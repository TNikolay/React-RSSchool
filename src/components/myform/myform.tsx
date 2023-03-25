import React from 'react';
//import style from './myform.module.css';
import { IUser2 } from '../../pages/FormPage';

interface IFormProps {
  onSubmit: (data: IUser2) => void;
}

class MyForm extends React.Component<IFormProps> {
  constructor(props: IFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private id = 0;
  private input: React.RefObject<HTMLInputElement> = React.createRef();

  handleSubmit: React.FormEventHandler<HTMLFormElement /*& FormFields*/> = (event) => {
    event.preventDefault();

    this.id++;
    this.props.onSubmit({
      id: this.id,
      username: this.input.current.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="send" />
      </form>
    );
  }
}

export default MyForm;
