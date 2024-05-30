import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/About">소개</Link></li>
      </ul>
      <hr/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>  
    </div>
  );
}

export default App;