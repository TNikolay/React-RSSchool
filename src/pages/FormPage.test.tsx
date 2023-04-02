import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('should render and submit the form', async () => {
    global.URL.createObjectURL = jest.fn(() => 'mock-file-url');

    render(<FormPage />);
    expect(screen.getByText('Registration Form')).toBeInTheDocument();

    expect(screen.queryAllByRole('radio').length).toBe(2);
    expect(screen.queryAllByRole('option').length).toBe(9);
    expect(screen.queryAllByRole('button').length).toBe(1);

    const usernameInput = screen.getByPlaceholderText('User name');
    const birthdayInput = screen.getByLabelText('Birthday:');
    const locationSelect = screen.getByLabelText('Location:');
    const maleRadio = screen.getByLabelText('Male');
    const avatarInput = screen.getByTestId('avatar');
    const agreeCheckbox = screen.getByLabelText('Terms:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    const username = 'John Doe';
    const birthday = '1990-01-01';
    const location = 'Earth';
    const gender = 'Male';
    const avatarFile = new File(['testimage'], 'test.png', { type: 'image/png' });

    expect(screen.queryByTestId('error-message')).toBeNull(); // no validation errors

    fireEvent.click(submitButton);
    expect(await screen.findAllByTestId('error-message')).toHaveLength(6); // 6 validation errors

    fireEvent.change(avatarInput, { target: { files: [avatarFile] } });
    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(birthdayInput, { target: { value: birthday } });
    fireEvent.change(locationSelect, { target: { value: location } });
    fireEvent.click(maleRadio);
    fireEvent.click(agreeCheckbox);
    fireEvent.click(submitButton);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.queryByTestId('error-message')).toBeNull(); // no validation errors

    expect(screen.getAllByText(RegExp(`${username}`)).length).toBe(2);
    expect(screen.getAllByText(gender).length).toBe(2);
    expect(screen.getAllByText('1990-01-01').length).toBe(1);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'mock-file-url');
  });
});
