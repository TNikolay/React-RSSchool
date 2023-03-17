import React from 'react';
import SearchBar from '../components/searchbar/searchbar';
import CardList from '../components/cardlist/cardlist';
import { userListData } from '../users';

class HomePage extends React.Component {
  render() {
    console.log('Home page');
    return (
      <>
        <SearchBar />
        <CardList userList={userListData} />
      </>
    );
  }
}

export default HomePage;
