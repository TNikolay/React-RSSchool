import { IUser } from '../../users';
import style from './card.module.css';

interface CardProps {
  user: IUser;
}

export default function Card({ user }: CardProps) {
  return (
    <div className={style.container}>
      <h3 className={style.username}>{user.username}</h3>
      <img className={style.img} src={`/user-images/${user.id}.png`} alt={user.username}></img>

      <div className={style.inner}>
        <p className={style.name}>
          {user.name} <span className={style.from}>from</span> {user.city}
        </p>
        <p>Contacts:</p>
        <ul className={style.list}>
          <li>
            E-mail: <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>
          <li>
            Website:{' '}
            <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
              {user.website}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
