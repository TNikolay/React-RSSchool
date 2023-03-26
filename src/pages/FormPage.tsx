import React from 'react';

import CardUser from '../components/carduser/carduser';
import MyForm from '../components/myform/myform';
import style from './FormPage.module.css';

export interface IUser2 {
  id: number;
  username: string | undefined;
  birthday: string | undefined;
  location: string | undefined;
  gender: string | undefined;
  avatar: string | undefined; //FileList;
}

export type IUser2List = IUser2[];

type MyFormPageState = {
  list: IUser2List;
};

class FormPage extends React.Component<object, MyFormPageState> {
  constructor(props: object) {
    super(props);

    const st: MyFormPageState = {
      list: [],
    };

    this.state = st;
  }

  addCard = (data: IUser2) => {
    console.log('AddCard ', data);
    this.setState((state) => ({
      list: [...state.list, data],
    }));
  };

  render() {
    return (
      <>
        <h1>This is Form</h1>
        <MyForm onSubmit={this.addCard} />

        <div className={style.container}>
          {this.state.list.map((v) => (
            <CardUser user={v} key={v.id} />
          ))}
        </div>
      </>
    );
  }
}

export default FormPage;
