import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import About from './components/pages/About/About';
import LaunchApp from './components/pages/LaunchApp/LaunchApp';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/services' element={<Services />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/launch-app' element={<LaunchApp />}/>
    </Routes> 
    <Footer />  
    </Router>
  );
}

export default App;
