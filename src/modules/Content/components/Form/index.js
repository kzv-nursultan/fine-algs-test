import { Button } from "./components/Button"
import { CheckBox } from "./components/CheckBox"
import { TextField } from "./components/TextField/TextField"
import { FormTitle } from "./components/Title"

export const Form = () => {
  return (
    <div>
      <FormTitle/>
      <form onSubmit={e => e.preventDefault()}>
        <TextField/>
        <TextField label="Email" type="email"/>
        <CheckBox/>
        {/* <Button/> */}
      </form>
    </div>
  )
}