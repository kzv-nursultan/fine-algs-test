import './button.css';

export const Button = ({text = 'Start the Course', ...props}) => {
  return <button className='button' {...props}>{text}</button>
}