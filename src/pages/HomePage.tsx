import SearchBar from '../components/searchbar/searchbar';
import CardList from '../components/cardlist/cardlist';
import { userListData } from '../users';

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <CardList userList={userListData} />
    </>
  );
}
