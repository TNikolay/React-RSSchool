import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from './myform';
import { act } from 'react-dom/test-utils';

describe('MyForm', () => {
  it('submits the form with all data', async () => {
    const onSubmit = jest.fn();
    render(<MyForm onSubmit={onSubmit} />);

    // {
    //   const file = new File(['test image'], 'test.png', { type: 'image/png' });
    //   const input = screen.getByLabelText('Avatar:') as HTMLInputElement;

    //   expect(input).toBeInTheDocument();

    //   await act(async () => {
    //     fireEvent.input(input, { target: { files: [file] } });
    //     fireEvent.change(input, { target: { files: [file] } });
    //   });
    //   const submitButton = screen.getByRole('button', { name: 'Submit' });
    //   fireEvent.click(submitButton);
    //   expect(await screen.findAllByTestId('error-message')).toHaveLength(6); // 6 validation errors
    // }

    const usernameInput = screen.getByPlaceholderText('User name');
    const birthdayInput = screen.getByLabelText('Birthday:');
    const locationSelect = screen.getByLabelText('Location:');
    const maleRadio = screen.getByLabelText('Male');
    const femaleRadio = screen.getByLabelText('Female');
    const avatarInput = screen.getByTestId('avatar');
    const agreeCheckbox = screen.getByLabelText('Terms:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    const username = 'John Doe';
    const birthday = '1990-01-01';
    const location = 'Earth';
    const gender = 'Male';
    const avatarFile = new File(['testimage'], 'test.png', { type: 'image/png' });
    const mockCreateObjectURL = jest.fn(() => 'mock-url'); //
    global.URL.createObjectURL = mockCreateObjectURL; //

    expect(screen.queryByTestId('error-message')).toBeNull(); // no validation errors

    fireEvent.click(submitButton);

    expect(await screen.findAllByTestId('error-message')).toHaveLength(6); // 6 validation errors

    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(birthdayInput, { target: { value: birthday } });
    fireEvent.change(locationSelect, { target: { value: location } });
    fireEvent.click(maleRadio);
    fireEvent.click(agreeCheckbox);
    //    fireEvent.click(submitButton);

    await act(async () => {
      fireEvent.input(avatarInput, { target: { files: [avatarFile] } });
      fireEvent.change(avatarInput, { target: { files: [avatarFile] } });
      fireEvent.click(submitButton);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(await screen.findAllByTestId('error-message')).toHaveLength(0); // 0 validation errors

    await screen.findByTestId('error-message'); // wait for validation errors to clear

    // expect(onSubmit).toHaveBeenCalledWith({
    //   username,
    //   birthday,
    //   location,
    //   gender,
    //   avatar_form: expect.any(FileList),
    //   agree: true,
    // });
    // expect(onSubmit.mock.calls[0][0].avatar_form[0]).toBeInstanceOf(File);
  });
});
