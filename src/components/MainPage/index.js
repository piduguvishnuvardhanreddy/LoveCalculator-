import React, { useState } from 'react';
import './index.css';  // Ensure correct import for styles
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function MainPage({ setUserList }) {
  const [boy, setBoy] = useState('');
  const [girl, setGirl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading

    const id = uuidv4();
    const formData = { id, boy, girl };

    try {
      const response = await fetch('https://firstbackenddeployment-5z8y.onrender.com/name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setUserList((prev) => [...prev, formData]);
        navigate('/calculate');
      } else {
        navigate('/oops');
      }
    } catch (error) {
      console.error(error);
      navigate('/oops');
    } finally {
      setLoading(false);  // End loading
    }
  };

  return (
    <div className={`main-page ${loading ? 'loading' : ''}`}>
      {loading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}
      <h1 className="heading">Love Calculator</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Boy's Name"
          value={boy}
          onChange={(e) => setBoy(e.target.value)}
          required
        />
        <span className="love-symbol">❤️</span>
        <input
          type="text"
          placeholder="Girl's Name"
          value={girl}
          onChange={(e) => setGirl(e.target.value)}
          required
        />
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Calculating...' : 'Love Calculator'}
        </button>
      </form>
    </div>
  );
}

export default MainPage;


