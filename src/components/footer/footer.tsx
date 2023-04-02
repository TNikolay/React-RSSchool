import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.container}>
      <a className={style.link} href="https://github.com/TNikolay" target="_blank" rel="noreferrer">
        TNikolay (c) 2023
      </a>
    </footer>
  );
}
