import './checkbox.css';

export const CheckBox = ({
  label = 'I want to reveive updates via email.'
}) => {
  return (
    <div className='checkbox-wrapper'>
      <label className='checkbox-label'>
        <input className='check-box' type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  )
}