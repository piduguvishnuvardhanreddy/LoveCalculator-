import React from 'react';
import './index.css';

const OopsPage = () => {
  return (
    <div className="oops-page">
      <h1 className="heading">Oops!</h1>
      <p>Something went wrong. Please try again later.</p>
      <button className="go-back-button" onClick={() => window.location.href = '/'}>
        Go Back
      </button>
    </div>
  );
};

export default OopsPage;
