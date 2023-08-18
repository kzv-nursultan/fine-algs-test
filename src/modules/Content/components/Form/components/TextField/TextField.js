import './styles.css';

export const TextField = ({ label = 'Name', type = 'text' }) => {
  return (
    <>
      <label className='label'>
        {label}
      </label>
      <input className='input' type={type} />
    </>
  )
}