import css from "./Navigation.module.css";
import { NavLink} from 'react-router-dom';
import clsx from 'clsx';
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};


const Navigation = () => {
  return (
    <header className={css.header}>

      <ul className={css.menu}>
      <NavLink className={buildLinkClass} 
      to="/">Home</NavLink>
      <NavLink className={buildLinkClass} to="/movies">Movies</NavLink>
      </ul>
    </header>
  );
};

export default Navigation;