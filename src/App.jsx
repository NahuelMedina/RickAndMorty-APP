import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";
import axios from "axios";
//import Card from "./components/Card.jsx";
import "./App";
import { About, Detail, Cards, Nav, Error, Form } from "./components";
import Favorites from "./components/favorites/Favorites";

// import characters from "./data.js";

const URL = "https://rickandmortyapi.com/api/character/";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = (id) => {
    const characterId = characters.filter(
      (character) => character.id === Number(id)
    );
    if (characterId.length) {
      return alert(`El pesonaje ${characterId[0].name} ya existe`);
    }
    axios(`${URL}${id}`).then(({ data }) => {
      if (data.name) {
        navigate("/home");
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const onClose = (id) => {
    let filterCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters([...filterCharacters]);
    dispatch(removeFav(id));
  };

  //* Login
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "123456";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario incorrecto");
    }
  }

  function logout() {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="divFather">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logout={logout} />
      ) : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters}></Cards>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
