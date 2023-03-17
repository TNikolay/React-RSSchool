import React, { Component } from 'react';
import style from './footer.module.css';

export class Footer extends Component {
  render() {
    return (
      <footer className={style.container}>
        <a
          className={style.link}
          href="https://github.com/TNikolay"
          target="_blank"
          rel="noreferrer"
        >
          TNikolay (c) 2023
        </a>
      </footer>
    );
  }
}

export default Footer;
