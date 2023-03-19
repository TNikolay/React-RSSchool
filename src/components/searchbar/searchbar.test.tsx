import { render, screen } from '@testing-library/react';
import SearchBar from './searchbar';

describe('SearchBar', () => {
  it('it renders', () => {
    render(<SearchBar />);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
