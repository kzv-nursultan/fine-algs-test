import './header.css';
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";

export const Header = () => {
  return (
    <div className='header'>
      <LeftSide/>
      <RightSide/>
    </div>
  )
}