import { useContext, useState } from 'react'
import { MainContext } from '../../../../App'
import { Button } from '../../../../partials/Button'
import { CheckBox } from './components/CheckBox'
import { TextField } from './components/TextField/TextField'
import { Title } from '../../../../partials/Title'

const initialState = {
  name: '',
  email: '',
  allowUpdates: false,
}

export const Form = () => {
  const [state, setState] = useState(initialState);
  const { setSuccess } = useContext(MainContext);

  const onChangeHandler = (e) => {
    const { name, value, checked } = e.target;
    setState(prev => ({
      ...prev,
      [name]: name === 'allowUpdates' ? checked : value,
    }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <div style={{ width: '100%' }}>
      <Title />
      <form onSubmit={onSubmitHandler}>
        <TextField
          name='name'
          value={state.name}
          onChange={onChangeHandler}
        />
        <TextField
          label='Email'
          type='email'
          name='email'
          value={state.email}
          onChange={onChangeHandler}
        />
        <CheckBox
          name={'allowUpdates'}
          checked={state.allowUpdates}
          onChange={onChangeHandler}
        />
        <Button />
      </form>
    </div>
  )
}