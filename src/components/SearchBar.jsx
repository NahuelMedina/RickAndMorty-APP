export default function SearchBar(onSearchCB) {
  return (
    <div>
      <input placeholder="ID" className="input-search" type="number" min="1" />
      <button className="btton-search" onClick={onSearchCB.onSearch}>
        Agregar
      </button>
    </div>
  );
}
