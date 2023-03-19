import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('About page', () => {
  it('it renders', async () => {
    render(<AboutPage />);

    expect(
      screen.getByText('We are a small, but proud and promising company!')
    ).toBeInTheDocument();
  });
});
