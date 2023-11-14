import { useState } from "react";
import axios from "axios";
import "./App.css";
//import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
// import characters from "./data.js";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    let filterCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters([...filterCharacters]);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
