import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import style from './Layout.module.css';

export class Layout extends Component {
  render() {
    return (
      <div className={style.pagelayout}>
        <Header />
        <main className={style.container}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
