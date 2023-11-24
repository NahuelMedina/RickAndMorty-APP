import Card from "../card/Card";
import styleCards from "./Cards.module.css";
export default function Cards({ characters, onClose }) {
  //console.log(characters);
  return (
    <div className={styleCards.cardsContainer}>
      {characters.length
        ? characters?.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin?.name}
              image={character.image}
              onClose={onClose}
            />
          ))
        : null}
    </div>
  );
}
