import { NavLink, useLocation } from 'react-router-dom';
import style from './header.module.css';

const setActiveLink = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'active-link' : '';
};

const setVisibilityHidden = ({ isActive }: { isActive: boolean }) => {
  return isActive ? 'visibility-hidden' : '';
};

export default function Header() {
  const location = useLocation();
  return (
    <header className={style.header}>
      <span>{location.pathname}</span>

      <div>
        <nav>
          <NavLink to="/" className={setActiveLink}>
            Home
          </NavLink>
          <NavLink to="/form" className={setActiveLink}>
            Form
          </NavLink>
          <NavLink to="/about" className={setActiveLink}>
            About
          </NavLink>
          <NavLink to="/sdfdsv" className={setVisibilityHidden}>
            Surprise me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
