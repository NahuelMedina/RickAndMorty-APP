export default function Card(character) {
  // console.log(character)
  return (
    <div className="card" id={character.id}>
      <img
        src="/src/assets/icons8-cross-32.png"
        className="card-btton"
        onClick={
          ((event) => character.onClose(character.id, event),
          () => {
            document.getElementById(character.id).className = "card-clicked";
          })
        }
      ></img>
      <div>
        <img className="card-img" src={character.image} alt="img-pj" />
        <h2>{character.name}</h2>
        <div className="card-info">
          <h2>Status: {character.status}</h2>
          <h2>Specie: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin}</h2>
        </div>
      </div>
    </div>
  );
}
