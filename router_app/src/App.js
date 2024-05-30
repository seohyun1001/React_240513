import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/info">info</Link></li>
      </ul>
      <hr/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/info" element={<About />}/>
        {/* Route 하나에 여러 개의 path 설정하기 */}
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>  
    </div>
  );
}

export default App;