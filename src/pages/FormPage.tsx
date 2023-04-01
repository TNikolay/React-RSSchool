import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardUser from '../components/carduser/carduser';
import MyForm from '../components/myform/myform';
import style from './FormPage.module.css';

export interface IUser2 {
  id: number;
  username: string;
  birthday: string;
  location: string;
  gender: string;
  avatar: string;
}

export type IUser2List = IUser2[];

export default function FormPage() {
  const [list, setList] = useState<IUser2List>([]);

  const addCard = (data: IUser2): void => {
    console.log('add card ', data);
    data.id = list.length + 1;
    setList([...list, data]);
    toast.success(`Card with id = ${data.id} successfully added`);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <MyForm onSubmit={addCard} />

      <div className={style.container}>
        {list.map((v) => (
          <CardUser user={v} key={v.id} />
        ))}
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}
