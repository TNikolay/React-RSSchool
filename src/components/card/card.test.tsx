import { render, screen } from '@testing-library/react';
import { IUser } from '../../users';
import Card from './card';

describe('Card component', () => {
  it('it renders', () => {
    const test: IUser = {
      id: 1,
      name: 'Nikolay Tiushkov',
      username: 'Begemot',
      email: 'begemot@begemotov.net',
      city: 'Sevastopol',
      website: 'begemotov.net',
    };
    render(<Card user={test} />);

    expect(screen.getByText(test.username)).toBeInTheDocument();
    expect(screen.getByText(test.website)).toBeInTheDocument();
  });
});
