import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to Open Sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar Container */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <h2>Cybersecurity Topics</h2>
        <ul>
          <li><Link to="/how-networks-work" onClick={toggleSidebar}>How Networks Work</Link></li>
          <li><Link to="/cyber-attacks" onClick={toggleSidebar}>Cyber Attacks</Link></li>
          <li><Link to="/password-checker" onClick={toggleSidebar}>Password Checker</Link></li>
          <li><Link to="/password-generator" onClick={toggleSidebar}>Password Generator</Link></li>
        </ul>
      </div>
      
      {/* Overlay when sidebar is open */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;