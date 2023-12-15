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

const URL = "http://localhost:3001/rickandmorty/character/";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = async (id) => {
    const characterId = characters.filter(
      (character) => character.id === Number(id)
    );
    if (characterId.length) {
      return alert(`El personaje ${characterId[0].name} ya existe`);
    }
    try {
      const res = await axios(`${URL}${id}`);
      const data = res.data;
      if (data.name) {
        navigate("/home");
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      return alert("No existe un personaje con ese ID");
    }
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
  // const EMAIL = "ejemplo@gmail.com";
  // const PASSWORD = "123456";

  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    const res = await axios.get(URL + `?email=${email}&password=${password}`);
    const data = res.data;
    const { access } = data;
    setAccess(access);
    access && navigate("/home");
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
