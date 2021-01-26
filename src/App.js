import { useState } from 'react';
import './App.css';
import LoginPage from './Logon/LoginPage';
import LayoutPage from './Layout/LayoutPage';
import NavBar from './NavBar/NavBar';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function setActivePage() {
    setLoggedIn(!isLoggedIn);
  }

  return (
    <div className="App">
      {!isLoggedIn && <LoginPage loginFunction={setActivePage}/>}
      {isLoggedIn && <NavBar />}
      {isLoggedIn && <LayoutPage signoutFunction={setActivePage}/>}
    </div>
  );
}

export default App;
