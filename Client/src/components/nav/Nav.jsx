import { Link } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar";
import styleNav from "./Nav.module.css";
import styleInput from "../search-bar/SearchBar.module.css";
export default function Nav(props) {
  return (
    <nav className={styleNav.navBar}>
      <div className={styleNav.divHome}>
        <Link to="/home">
          <img
            className={styleNav.iconHome}
            src="https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif"
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
            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-logout-screen-from-the-working-portfolio-of-a-user-classic-bold-tal-revivo.png"
            alt=""
          />
          logout
        </button>
      </div>
    </nav>
  );
}
