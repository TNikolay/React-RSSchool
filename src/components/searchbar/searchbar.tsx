import React, { Component } from 'react';
import './searchbar.css';

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-container">
        <div>
          <input type="text" placeholder="Search here" />
          <button className="button">Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
