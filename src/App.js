import { createContext, useState } from 'react';
import './App.css';
import AuthPage from './pages';
import SuccessPage from './pages/SuccessPage';

const initValue = {
  setSuccess: () => { }
}

export const MainContext = createContext(initValue);

function App() {
  const [success, setSuccess] = useState(false);
  return (
    <MainContext.Provider value={{setSuccess}}>
      {success
        ? <SuccessPage />
        : <AuthPage />}
    </MainContext.Provider>
  )
}

export default App;
