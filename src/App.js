import './App.css';
import './Start.js';
import NavBar from "./NavBar";

import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useRef } from 'react';
import goback from "./Images/circular_go_back_button.png"

function App() {
  const navRef = useRef(null); 
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goForward = () => {
    navigate(+1);
  };

  return (
    <div className="App">
      
      <NavBar ref={navRef} /> 
    
   
      <Footer scrollRef={navRef} /> 
    </div>
  );
}

export default App;