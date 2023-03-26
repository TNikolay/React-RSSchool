import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer', () => {
  it('it renders', () => {
    render(<Footer />);

    expect(screen.getByText('TNikolay (c) 2023')).toBeInTheDocument();
  });
});
