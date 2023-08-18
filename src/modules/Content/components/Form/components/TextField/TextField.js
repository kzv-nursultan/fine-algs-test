import { useState } from 'react';
import './styles.css';
import Warning from '../../../../../../assets/fe_warning.svg';

const errorMessages = {
  name: 'Please provide a name!',
  email: 'Please provide an email!',
}

export const TextField = ({
  label = 'Name',
  type = 'text',
  name,
  value,
  onChange,
}) => {
  const [error, setError] = useState(false);

  const onBlurHandler = () => {
    setError(!value)
  };

  return (
    <>
      <label className='label'>
        {label}
      </label>
      <input
        className='input'
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        required
        onBlur={onBlurHandler}
        style={{border: error && '1.5px solid #FF0000'}}
        data-testid={name === 'name' ? 'name-input' : 'email-input'}
      />
      {error &&
        <span className='error-msg'>
          <img alt='warning' src={Warning} />
          {errorMessages[name]}
        </span>
      }

    </>
  )
}