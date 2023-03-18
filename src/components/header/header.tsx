import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const setActiveLink = ({ isActive }) => {
  return isActive ? 'active-link' : '';
};

const setVisibilityHidden = ({ isActive }) => {
  return isActive ? 'visibility-hidden' : '';
};

export class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/" className={setActiveLink}>
          Home
        </NavLink>
        <NavLink to="/about" className={setActiveLink}>
          About
        </NavLink>
        <NavLink to="/sdfdsv" className={setVisibilityHidden}>
          Surprise me!
        </NavLink>
      </header>
    );
  }
}

export default Header;
