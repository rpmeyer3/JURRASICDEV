import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PasswordChecker from './components/PasswordChecker';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
    return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navbar />} />

        <Route path="/password-checker" element={<PasswordChecker />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;