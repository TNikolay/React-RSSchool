import React, { LegacyRef } from 'react';
import style from './myform.module.css';
import { IUser2 } from '../../pages/FormPage';

interface IFormProps {
  onSubmit: (data: IUser2) => void;
}

type MyFormState = {
  isError: boolean;
};

class MyForm extends React.Component<IFormProps, MyFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { isError: false };
  }

  private id = 0;
  private input: React.RefObject<HTMLInputElement> = React.createRef();
  private date: React.RefObject<HTMLInputElement> = React.createRef();
  private location: LegacyRef<HTMLSelectElement> = React.createRef(); // React.RefObject<HTMLInputElement> = React.createRef();
  private genderM: React.RefObject<HTMLInputElement> = React.createRef();
  private genderF: React.RefObject<HTMLInputElement> = React.createRef();
  private avatar: React.RefObject<HTMLInputElement> = React.createRef();
  private agree: React.RefObject<HTMLInputElement> = React.createRef();

  handleSubmit: React.FormEventHandler<HTMLFormElement /*& FormFields*/> = (event) => {
    event.preventDefault();

    const gender = this.getGender();
    //console.log(this.avatar.current?.files?.length == 0);
    if (
      !this.agree.current?.checked ||
      gender == '' ||
      this.input.current?.value.trim() == '' ||
      this.date.current?.value == '' ||
      this.location.current.value == '1' ||
      this.avatar.current?.files?.length == 0
    ) {
      this.setState({ isError: true });
      return;
    }

    this.id++;
    this.props.onSubmit({
      id: this.id,
      username: this.input.current.value.trim(),
      birthday: this.date.current?.value,
      location: this.location.current?.value,
      gender: gender,
      avatar: this.avatar?.current?.files[0]?.name,
    });
    this.setState({ isError: false });
  };

  getGender = () => {
    const Male = this.genderM.current.checked;
    const Female = this.genderF.current.checked;
    if (Male && !Female) return 'Male';
    else if (Female && !Male) return 'Female';
    return '';
  };

  render() {
    return (
      <>
        {this.state.isError ? <h2 className={style.red}>Error</h2> : ''}
        <form onSubmit={this.handleSubmit}>
          <label
            className={
              this.state.isError && this.input.current?.value.trim() == '' ? style.red : ''
            }
          >
            User Name:
            <input type="text" name="username" ref={this.input} />
          </label>
          <br />

          <label className={this.state.isError && this.date.current?.value == '' ? style.red : ''}>
            Birthday:
            <input type="date" name="birthday" ref={this.date} />
          </label>
          <br />

          <label
            className={this.state.isError && this.location.current.value == '1' ? style.red : ''}
          >
            Location:
            <select name="location" defaultValue="1" ref={this.location}>
              <option disabled value="1">
                Choose one
              </option>
              <option value="Mercury">Mercury</option>
              <option value="Venus">Venus</option>
              <option value="Earth">Earth</option>
              <option value="Mars">Mars</option>
              <option value="Jupiter">Jupiter</option>
              <option value="Saturn">Saturn</option>
              <option value="Uranus">Uranus</option>
              <option value="Neptune">Neptune</option>
            </select>
          </label>
          <br />

          <h4
            className={
              this.state.isError && !this.genderM.current.checked && !this.genderF.current.checked
                ? style.red
                : ''
            }
          >
            Gender:
          </h4>
          <label>
            <input type="radio" name="gender" value="Male" ref={this.genderM} />
            Male
          </label>
          <br />
          <label>
            <input type="radio" name="gender" value="Female" ref={this.genderF} />
            Female
          </label>
          <br />

          <h4
            className={
              this.state.isError && this.avatar.current?.files?.length == 0 ? style.red : ''
            }
          >
            Avatar:
          </h4>
          <label>
            <input type="file" name="image" accept="image/*" ref={this.avatar} />
          </label>
          <br />

          <h4>Terms:</h4>
          <div>
            <label className={this.state.isError && !this.agree.current?.checked ? style.red : ''}>
              <input type="checkbox" name="agree" ref={this.agree} />I am up for anything
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default MyForm;
