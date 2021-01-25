import './App.css';
import LoginPage from './Logon/LoginPage';
import LayoutPage from './Layout/LayoutPage';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {false && <LoginPage />}
      {true && <NavBar />}
      {true && <LayoutPage />}
    </div>
  );
}

export default App;
