import { Form } from "./components/Form";
import { MockText } from "./components/MockText";
import './content.css';

export const Content = () => {
  return (
    <div className='container'>
      <div className='inner-container'>
        <Form />
        <MockText />
      </div>
    </div>
  )
}