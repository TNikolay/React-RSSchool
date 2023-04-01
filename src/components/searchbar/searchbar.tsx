import React, { useState, useEffect, useRef } from 'react';
import style from './searchbar.module.css';

export default function Searchbar() {
  const [query, setQuery] = useState('');
  const queryRef = useRef('');

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    queryRef.current = event.target.value;
    setQuery(event.target.value);
  };

  useEffect(() => {
    setQuery(localStorage.getItem('search_query') ?? '');
    queryRef.current = localStorage.getItem('search_query') ?? ''; // fix for <React.StrictMode>

    return () => {
      localStorage.setItem('search_query', queryRef.current);
    };
  }, []);

  return (
    <div>
      <input type="text" placeholder="Search here" value={query} onChange={onQueryChange} />
      <button className={style.button}>Search</button>
    </div>
  );
}
