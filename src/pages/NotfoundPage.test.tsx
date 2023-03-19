import { render, screen } from '@testing-library/react';
import NotfoundPage from './NotfoundPage';

describe('NotfoundPage', () => {
  it('it renders', () => {
    render(<NotfoundPage />);

    expect(
      screen.getByText('Oops! Something went wrong. Surprise not found:(')
    ).toBeInTheDocument();
  });
});
