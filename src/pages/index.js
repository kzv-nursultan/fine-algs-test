import { Content } from "../modules/Content";
import { Header } from "../modules/Header";

const AuthPage = () => {
  return (
    <div style={{maxWidth: '70%', margin: '0 auto', alignItems: 'center'}}>
      <Header />
      <Content />
    </div>
  )
}

export default AuthPage;