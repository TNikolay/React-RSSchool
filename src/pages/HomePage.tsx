import React from 'react';
import SearchBar from '../components/searchbar/searchbar';

class HomePage extends React.Component {
  render() {
    console.log('Home page');
    return (
      <>
        <SearchBar />
      </>
    );
  }
}

export default HomePage;
