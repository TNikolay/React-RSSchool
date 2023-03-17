import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
