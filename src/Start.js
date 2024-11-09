// Start.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate(); // Use useNavigate

  const handleStartClick = () => {
    navigate('/app'); // Navigate to the main app page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My App!</h1>
      <button onClick={handleStartClick}>Start</button>
    </div>
  );
};

export default Start;






