import { IUserList } from '../../users';
import Card from '../card/card';
import style from './cardlist.module.css';

interface CardListProps {
  userList: IUserList;
}

export default function CardList({ userList }: CardListProps) {
  return (
    <div className={style.container}>
      {userList.map((v) => (
        <Card user={v} key={v.id} />
      ))}
    </div>
  );
}
