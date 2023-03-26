import { render, screen } from '@testing-library/react';
import { IUser2 } from '../../pages/FormPage';
import CardUser from './carduser';

describe('Card component', () => {
  it('it renders', () => {
    const test: IUser2 = {
      id: 1,
      username: 'Nikolay Tiushkov',
      birthday: '01/01/1970',
      location: 'Sevastopol',
      gender: 'Superman',
      avatar: 'itsclassified.png',
    };
    render(<CardUser user={test} />);

    expect(screen.getAllByText(test.username ?? '').length).toBe(2);
    expect(screen.getAllByText(test.gender ?? '').length).toBe(1);
  });
});
