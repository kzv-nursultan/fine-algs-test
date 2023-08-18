import { useContext } from "react";
import { MainContext } from "../App";

const SuccessPage = () => {
  const { setSuccess } = useContext(MainContext);
  return (
    <div>
      <h1>
        Success!
      </h1>
      <button onClick={()=> setSuccess(false)}>
        Go back
      </button>
    </div>
  )
}

export default SuccessPage;