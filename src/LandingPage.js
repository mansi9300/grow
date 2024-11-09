// LandingPage.js
import './App.css';
import './Start.js';
import NavBar from "./NavBar";
import banner from './Images/img.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useRef } from 'react';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/main'); // Update this path if needed
    };

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to My Website</h1>
            <button onClick={handleStartClick}>Start</button>
        </div>
    );
};

export default LandingPage;
