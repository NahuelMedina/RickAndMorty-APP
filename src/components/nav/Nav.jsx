import { Link } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";
import styleNav from "./Nav.module.css";
import styleInput from "/src/components/search-bar/SearchBar.module.css";
export default function Nav(props) {
  return (
    <nav className={styleNav.navBar}>
      <div className={styleNav.divHome}>
        <Link to="/home">
          <img
            className={styleNav.iconHome}
            src="/src/assets/Rick-and-Morty-icon-home.png"
            alt="home-icon"
          />
        </Link>
        <Link to="/home">
          <button className={styleInput.bttonSearch}>Home</button>
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} />
      <div>
        <Link to="/favorites">
          <button className={styleInput.bttonSearch}>Favorites ❤️</button>
        </Link>
        <Link to="/about">
          <button className={styleInput.bttonSearch}>About</button>
        </Link>
      </div>
      <div>
        <button className={styleInput.bttonSearch} onClick={props.logout}>
          <img
            className={styleNav.iconLogout}
            src="/src/assets/icon-logout.png"
            alt=""
          />
          Logout
        </button>
      </div>
    </nav>
  );
}
