import React, { Component } from 'react';
import { IUser2 } from '../../pages/FormPage';
import style from './carduser.module.css';

interface CardProps {
  user: IUser2;
}

export class CardUser extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        <h3 className={style.username}>{this.props.user.username}</h3>
        <ul className={style.list}>
          <li>
            id : <strong>{this.props.user.id}</strong>
          </li>
          <li>
            Name : <strong>{this.props.user.username}</strong>
          </li>
          <li>
            Location : <strong>{this.props.user.location}</strong>
          </li>
          <li>
            Birthday : <strong>{this.props.user.birthday}</strong>
          </li>
          <li>
            Gender : <strong>{this.props.user.gender}</strong>
          </li>
          <li>
            Avatar : <strong>{this.props.user.avatar}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default CardUser;
