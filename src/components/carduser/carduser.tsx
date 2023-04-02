import { IUser2 } from '../../pages/FormPage';
import style from './carduser.module.css';

interface CardProps {
  user: IUser2;
}

export default function CardUser({ user }: CardProps) {
  return (
    <div className={style.container}>
      <h3 className={style.username}>
        {user.username} <span className={style.from}>from</span> {user.location}
      </h3>
      <img src={user.avatar} alt="{user.username}" width="450" />

      <ul className={style.list}>
        <li>
          id : <strong>{user.id}</strong>
        </li>
        <li>
          Name : <strong>{user.username}</strong>
        </li>
        <li>
          Location : <strong>{user.location}</strong>
        </li>
        <li>
          Birthday : <strong>{user.birthday}</strong>
        </li>
        <li>
          Gender : <strong>{user.gender}</strong>
        </li>
      </ul>
    </div>
  );
}
