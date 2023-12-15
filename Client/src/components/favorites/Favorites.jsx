import { useSelector } from "react-redux";
import Card from "../card/Card";
import styleCards from "../cards/Cards.module.css";
export default function Favorites({ onClose }) {
  //console.log(characters);
  const myFavorites = useSelector((state) => state.myFavorites);
  return (
    <div className={styleCards.cardsContainer}>
  
      {myFavorites.length ? (
        myFavorites?.map((character) => (
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
      ) : (
        <div className={styleCards.messageEmpty}>
          <h1 >No tienes Favoritos</h1></div>
        
      )}
    </div>
  );
}
