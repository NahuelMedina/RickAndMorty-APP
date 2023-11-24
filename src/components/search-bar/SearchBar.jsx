import { useState } from "react";
import styleSearchBar from "./SearchBar.module.css";

export default function SearchBar(onSearchCB) {
  const [id, setId] = useState([]);
  const handleChange = (event) => {
    setId([event.target.value]);
  };
  const randomNum = Math.ceil(Math.random() * 826);

  return (
    <div className={styleSearchBar.divSearchBar}>
      <input
        placeholder="Ingrese un ID"
        className={styleSearchBar.inputSearch}
        type="number"
        min="1"
        onChange={handleChange}
      />
      <button
        className={styleSearchBar.bttonSearch}
        onClick={(event) => onSearchCB.onSearch(id, event)}
      >
        Agregar
      </button>
      <button
        className={styleSearchBar.bttonSearch}
        onClick={(event) => onSearchCB.onSearch(randomNum, event)}
      >
        Random
      </button>
    </div>
  );
}
