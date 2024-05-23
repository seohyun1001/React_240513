import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './03.JSX소개/Library';
import ConfirmDialog from './04.엘리먼트랜더링/ConfirmDialog';
import Clock from './04.엘리먼트랜더링/Clock';
import PropsEx from './05.컴포넌트와props/PropsEx';
import CommentList from './05.컴포넌트와props/CommentList';
import BoardList from './05.컴포넌트와props_게시판/BoardList';
import NotificationList from './06.State와생명주기/NotificationList';
import Counter from './07.Hooks/Counter';
import Info from './07.Hooks/info';
import Average from './07.Hooks/Average';
import Accommodate from './07.Hooks/Accommodate';
import Say from './08.이벤트핸들링/Say';
import Toggle from './08.이벤트핸들링/Toggle';
import Toggle2 from './08.이벤트핸들링/Toggle2';
import ConfirmButton from './08.이벤트핸들링/ConfirmButton';
import EventPractice from './08.이벤트핸들링/EventPractice';
import Greeting from './09.조건부랜더링/Greeting';
import LoginControl from './09.조건부랜더링/LoginControl';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() =>{
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   )
// }, 1000)

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Library /> */}
    {/* <ConfirmDialog /> */}
    {/* <PropsEx /> */}
    {/* <CommentList /> */}

    {/* <BoardList /> */}
    {/* <NotificationList /> */}
    {/* <Counter/> */}
    {/* <Info /> */}
    {/* <Average /> */}

    {/* <Accommodate /> */}

{/* 8장 */}
    {/* <Say /> */}
    {/* <Toggle /> */}
    {/* <Toggle2 /> */}
    {/* <ConfirmButton /> */}
    {/* <EventPractice /> */}

{/* 9장 */}
    {/* <Greeting /> */}
    <LoginControl />
    

  </React.StrictMode>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
