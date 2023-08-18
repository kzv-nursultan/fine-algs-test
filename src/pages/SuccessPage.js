import { useContext } from "react";
import { MainContext } from "../App";
import { Button } from "../partials/Button";
import { Title } from "../partials/Title";

const SuccessPage = () => {
  const { setSuccess } = useContext(MainContext);

  return (
    <>
      <Title text='Success!'/>
      <Button text="Go back" onClick={() => setSuccess(false)}/>
    </>
  )
}

export default SuccessPage;