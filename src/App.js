import './App.css';
import LoginPage from './Logon/LoginPage';
import LayoutPage from './Layout/LayoutPage';

function App() {
  return (
    <div className="App">
      {false && <LayoutPage />}
      {true && <LoginPage />}
    </div>
  );
}

export default App;
