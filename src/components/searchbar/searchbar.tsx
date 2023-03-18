import React, { Component } from 'react';
import style from './searchbar.module.css';

interface IState {
  query: string;
}

export class SearchBar extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    const st: IState = {
      query: '',
    };

    this.state = st;
  }

  componentDidMount() {
    this.setState({
      query: localStorage.getItem('search_query') ?? '',
    });
  }

  componentWillUnmount() {
    localStorage.setItem('search_query', this.state.query);
  }

  onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search here"
          value={this.state.query}
          onChange={this.onQueryChange}
        />
        <button className={style.button}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
