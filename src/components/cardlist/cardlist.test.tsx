import { render, screen } from '@testing-library/react';
import CardList from './cardlist';
import { userListData } from '../../users';

describe('CardList component', () => {
  it('it renders', () => {
    render(<CardList userList={userListData} />);

    expect(screen.getByText(userListData[0].username)).toBeInTheDocument();
    expect(screen.getByText(userListData[0].website)).toBeInTheDocument();
  });
});
