import { useState } from "react";

export default function SearchBar(onSearchCB) {
  const [id, setId] = useState([]);
  const handleChange = (event) => {
    setId([event.target.value]);
  };
  return (
    <div>
      <input
        placeholder="ID"
        className="input-search"
        type="number"
        min="1"
        onChange={handleChange}
      />
      <button
        className="btton-search"
        onClick={(event) => onSearchCB.onSearch(id, event)}
      >
        Agregar
      </button>
    </div>
  );
}
