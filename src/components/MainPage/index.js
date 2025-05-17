import React, { useState } from 'react';
import './index.css';  // Ensure correct import for styles
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet';

function MainPage({ setUserList }) {
  const [boyName, setBoy] = useState('');
  const [girlName, setGirl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading

    const id = uuidv4();
    const formData = { id, boyName, girlName };

    try {
      const response = await fetch('https://user-management-api-vishnu.onrender.com/api/love/users', {
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
      <Helmet>
        <title>Love Calculator | Fun & Free Love Percentage Tool</title>
        <meta name="description" content="Try our fun and free Love Calculator to find the love percentage between two names! Simple, instant, and entertaining." />
        <meta name="keywords" content="love calculator, love percentage, name match, romantic compatibility test" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Love Calculator" />
        <meta property="og:description" content="Check your love percentage based on names instantly!" />
        <meta property="og:url" content="https://love-calculator-gold.vercel.app/" />
      </Helmet>
      <h1 className="heading">Love Calculator</h1>
      <p>
        Welcome to our Love Calculator – a fun and free tool to check the love percentage between two names. Just enter your names and get an instant love compatibility score. Perfect for fun, friends, and Valentine's Day surprises!
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Boy's Name"
          value={boyName}
          onChange={(e) => setBoy(e.target.value)}
          required
        />
        <span className="love-symbol">❤️</span>
        <input
          type="text"
          placeholder="Girl's Name"
          value={girlName}
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


