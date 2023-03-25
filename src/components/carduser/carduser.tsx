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
        <h3 className={style.username}>
          {this.props.user.id}: {this.props.user.username}
        </h3>
        {/* <img
          className={style.img}
          src={`/user-images/${this.props.user.id}.png`}
          alt={this.props.user.username}
        ></img>

        <div className={style.inner}>
          <p className={style.name}>
            {this.props.user.name} <span className={style.from}>from</span> {this.props.user.city}
          </p>
          <p>Contacts:</p>
          <ul className={style.list}>
            <li>
              E-mail: <a href={`mailto:${this.props.user.email}`}>{this.props.user.email}</a>
            </li>
            <li>
              Website:{' '}
              <a href={`http://${this.props.user.website}`} target="_blank" rel="noreferrer">
                {this.props.user.website}
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default CardUser;
