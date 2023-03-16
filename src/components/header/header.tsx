import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sdfdsv">Surprise me!</Link>
      </header>
    );
  }
}

export default Header;
