import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('it renders', () => {
    render(<FormPage />);

    expect(screen.getByText('This is Form')).toBeInTheDocument();
  });
});
