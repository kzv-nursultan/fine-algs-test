import { Rectangle } from '../../../../partials/mock-rectangle/rectangle';
import './mocktext.css';

export const MockText = () => {
  return (
    <div className='mock-text'>
      <Rectangle width={'30%'} />
      <Rectangle width={'95%'} />
      <Rectangle width={'95%'} />
      <Rectangle width={'95%'} />
      <div className='wrapper'>
        <Rectangle width={'30%'} />
      </div>
    </div>
  )
}