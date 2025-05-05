import React, { useState, useEffect } from 'react';
import './index.css';

const LoveCalculationsPage = () => {
  const [lovePercentage, setLovePercentage] = useState(null);

  useEffect(() => {
    // Generate random love percentage
    const percentage = Math.floor(Math.random() * 26) + 75
    setLovePercentage(percentage);
  }, []);

  return (
    <div className="love-calculations-page">
      <h1 className="heading">Love Percentage</h1>
      <div className="result">
        <p>Your love percentage is:</p>
        <h2>{lovePercentage}%</h2>
        <button className="try-another-button" onClick={() => window.location.href = '/'}>
          Try Another
        </button>
      </div>
    </div>
  );
};

export default LoveCalculationsPage;
