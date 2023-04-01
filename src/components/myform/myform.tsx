import React, { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './myform.module.css';
import { IUser2 } from '../../pages/FormPage';

function ErrorPlaceholder(props: { text?: string }): ReactElement {
  return <div className={style.red}>{props.text ? props.text : ''}</div>;
}

interface IFormProps {
  onSubmit: (data: IUser2) => void;
}

interface IFormField extends IUser2 {
  agree: boolean;
  avatar_form: FileList;
}

export default function MyForm({ onSubmit }: IFormProps): ReactElement {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormField>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmitLocal: SubmitHandler<IFormField> = (data) => {
    console.log('onSubmitLocal', data);
    const nd: IUser2 = {
      id: -1,
      username: data.username,
      birthday: data.birthday,
      location: data.location,
      gender: data.gender,
      avatar: data.avatar_form[0].name,
    };
    onSubmit(nd);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitLocal)}>
      <h4>User Name:</h4>
      <input
        {...register('username', {
          setValueAs: (v) => v.trim(),
          required: 'User name is required field',
          minLength: { value: 2, message: 'Should be minimum 2 symbols' },
          maxLength: { value: 30, message: 'Should be maximum 30 symbols' },
          pattern: {
            value: /^[\p{Lu}]/u,
            message: 'Should start with capital letter',
          },
        })}
        placeholder="User name"
      />
      <ErrorPlaceholder text={errors.username?.message} />

      <h4>Birthday:</h4>
      <input type="date" {...register('birthday', { required: 'Birthday is required field' })} />
      <ErrorPlaceholder text={errors.birthday?.message} />

      <h4>Location:</h4>
      <select {...register('location', { required: 'Select your location' })}>
        <option value="">Choose one...</option>
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option>
      </select>
      <ErrorPlaceholder text={errors.location?.message} />

      <h4>Gender:</h4>
      <input
        {...register('gender', { required: 'Select your gender' })}
        type="radio"
        value="Male"
      />
      <span className={style.pr}>Male</span>
      <input
        {...register('gender', { required: 'Select your gender' })}
        type="radio"
        value="Female"
      />
      <span className={style.pr}>Female</span>
      <ErrorPlaceholder text={errors.gender?.message} />

      <h4>Avatar:</h4>
      <input
        {...register('avatar_form', { required: 'Show me your face' })}
        type="file"
        accept="image/*"
      />
      <ErrorPlaceholder text={errors.avatar_form?.message} />

      <h4>Terms:</h4>
      <input {...register('agree', { required: 'You should obey...' })} type="checkbox" />
      <span className={style.pr}>I am up for anything</span>
      <ErrorPlaceholder text={errors.agree?.message} />

      <input type="submit" className={style.submit} />
    </form>
  );
}
