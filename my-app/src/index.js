import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './03.JSX소개/Library';
import ConfirmDialog from './04.엘리먼트랜더링/ConfirmDialog';
import Clock from './04.엘리먼트랜더링/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() =>{
  root.render(
  <React.StrictMode>
    {/* <Library /> */}
    {/* <ConfirmDialog /> */}
    <Clock />
  </React.StrictMode>
);
}, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
