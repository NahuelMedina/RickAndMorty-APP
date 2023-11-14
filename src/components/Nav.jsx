import SearchBar from "./SearchBar";
export default function Nav(characters) {
  return (
    <nav>
      <SearchBar onSearch={characters.onSearch} />
    </nav>
  );
}
