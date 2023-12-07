import { Link } from "react-router-dom";
import styleCard from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(character) {
  //console.log(character);

  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(character.id));
    } else {
      setIsFav(true);
      dispatch(addFav(character));
    }
  };

  const myFavorites = useSelector((state) => state.myFavorites);
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styleCard.card} id={character.id}>
      {isFav ? (
        <button className={styleCard.cardFav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styleCard.cardFav} onClick={handleFavorite}>
          🤍
        </button>
      )}
      <img
        src="https://img.icons8.com/sf-black/64/delete-sign.png"
        className={styleCard.cardBtton}
        onClick={(event) => {
          character.onClose(character.id, event);
        }}
      ></img>
      <Link to={`/detail/${character.id}`}>
        <img className={styleCard.cardImg} src={character.image} alt="img-pj" />
      </Link>
      <Link to={`/detail/${character.id}`}>
        <h2>{character.name}</h2>
      </Link>
    </div>
  );
}
