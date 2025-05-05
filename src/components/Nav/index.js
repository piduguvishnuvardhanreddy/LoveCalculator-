import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo"> <Link to="/" className="nav-link">💘 LoveCalc</Link></div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/history" className="nav-link">History</Link>
      </div>
    </nav>
  );
};

export default Nav;
