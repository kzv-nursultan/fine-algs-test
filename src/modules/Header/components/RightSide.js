import { Rectangle } from "../../../partials/mock-rectangle/rectangle";

export const RightSide = () => {

  const style = {
    width: '20%',
    display: 'flex',
    gap: '10px',
  };

  return (
    <div style={style}>
      <Rectangle width={'100%'}/>
      <Rectangle width={'100%'}/>
      <Rectangle width={'100%'}/>
    </div>
  )
}