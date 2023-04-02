import {
  render,
  fireEvent,
  screen,
  getByPlaceholderText,
  getByTestId,
} from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('it renders', () => {
    render(<FormPage />);

    expect(screen.getByText('Registration Form')).toBeInTheDocument();
  });
});

describe('FormPage', () => {
  test('Form elemets', async () => {
    render(<FormPage />);

    //expect(screen.queryByText(/is required field/)).toBeNull(); // no validation errors
    expect(screen.queryByTestId('error-message')).toBeNull(); // no validation errors
    expect(screen.queryAllByRole('radio').length).toBe(2);
    expect(screen.queryAllByRole('option').length).toBe(9);
    expect(screen.queryAllByRole('button').length).toBe(1);

    fireEvent.click(screen.getByRole('button'));
    // let items = await screen.findAllByText(/is required field/);
    // expect(items).toHaveLength(2);

    expect(await screen.findAllByTestId('error-message')).toHaveLength(6); // 6 validation errors
  });
});
// describe("Image upload and view card", () => {
//   test("should display selected image", async () => {
//     const file = new File(["test image"], "test.png", { type: "image/png" });

//     const { getByLabelText, getByAltText } = render(<FormPage />);

//     //const input = screen.getByLabelText("avatar_form");
//     const input = getByTestId(input, "avatar");
//     fireEvent.change(input, { target: { files: [file] } });

//     const image = await screen.findByAltText("Selected Image");

//     expect(image).toBeInTheDocument();
//     expect(image.getAttribute("src")).toContain("blob");
//   });

//   test("should not display image when no file is selected", async () => {
//     const { queryByAltText } = render(<ImageUploadForm />);

//     expect(queryByAltText("Selected Image")).toBeNull();
//   });
// });
