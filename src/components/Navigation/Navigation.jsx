import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const makeLinksClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.isActive);
};

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink to="/" className={makeLinksClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={makeLinksClass}>
        Movies
      </NavLink>
      <h2 className={s.name}>MovieScout</h2>
    </nav>
  );
}
export default Navigation;