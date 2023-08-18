import { Rectangle } from "../../../partials/mock-rectangle/rectangle";

export const RightSide = () => {

  const style = {
    width: '80vw',
    display: 'flex',
    
  };

  return (
    <div style={style}>
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </div>
  )
}