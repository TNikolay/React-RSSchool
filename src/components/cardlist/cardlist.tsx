import React, { Component } from 'react';
import { IUserList } from '../../users';
import { Card } from '../card/card';
import style from './cardlist.module.css';

interface CardListProps {
  userList: IUserList;
}

export class CardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    const userList: IUserList = this.props.userList;
    return (
      <div className={style.container}>
        {userList.map((v) => (
          <Card user={v} key={v.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
