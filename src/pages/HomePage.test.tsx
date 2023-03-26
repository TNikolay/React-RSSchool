import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('it renders', () => {
    render(<HomePage />);

    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
