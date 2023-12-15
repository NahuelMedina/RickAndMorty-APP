import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleDetail from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className={styleDetail.divDetail}>
      <div>
        <h2>{character.name}</h2>
        <ul>
          <li>State: {character.status}</li>
          <li>Specie: {character.species}</li>
          <li>Gender: {character.gender}</li>
          <li>Origin: {character.origin?.name}</li>
        </ul>
      </div>
      <div>
        <img
          className={styleDetail.cardImg}
          src={character.image}
          alt={character.name}
        />
      </div>
    </div>
  );
}
