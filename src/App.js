import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';  // Updated to MainPage
import LoveCalculationsPage from './components/LoveCalculationsPage';  // Corrected to LoveCalculationsPage
import OopsPage from './components/OopsPage';
import HistoryPage from './components/HistoryPage';
import Nav from './components/Nav';  // Corrected to Nav
import './App.css';

function App() {
  const [userList, setUserList] = useState(() => {
    const storedData = localStorage.getItem('userList');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(userList));
  }, [userList]);

  return (
    <Router>
      <Nav />  {/* Corrected navigation component */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainPage setUserList={setUserList} />} />  {/* Updated to MainPage */}
          <Route path="/calculate" element={<LoveCalculationsPage />} />  {/* Corrected to LoveCalculationsPage */}
          <Route path="/oops" element={<OopsPage />} />
          <Route path="/history" element={<HistoryPage userList={userList} setUserList={setUserList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





