import React from 'react';
import Navbar from './components/Navbar';
import PasswordChecker from './components/PasswordChecker';
import './styles/App.css';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
    return (
    <>
      <Navbar />
      <div className="App">
        <div className="security-games">
          <PasswordChecker />
          <PasswordGenerator />
        </div>
      </div>
          </>
  );
}

export default App;