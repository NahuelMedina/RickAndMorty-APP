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
        <h3>State: {character.status}</h3>
        <h3>Specie: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Origin: {character.origin?.name}</h3>
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
