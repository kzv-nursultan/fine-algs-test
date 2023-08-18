import './checkbox.css';

export const CheckBox = ({
  name,
  checked,
  onChange
}) => {
  return (
    <div className='checkbox-wrapper'>
      <label className='checkbox-label'>
        <input
          className='check-box'
          type='checkbox'
          name={ name}
          checked={checked}
          onChange={onChange}
        />
        <span>{'I want to reveive updates via email.'}</span>
      </label>
    </div>
  )
}