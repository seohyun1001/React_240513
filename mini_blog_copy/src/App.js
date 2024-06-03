import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PageViewPage";
import { useRef, useState } from 'react';
import data from "./data.json";

const MainTitleText=styled.p`
  font-size : 24px;
  font-weight : bold;
  text-align : center;
`;

const addBoard = {}

function App() {
  const [board, setBoard] = useState(data);
  const idRef = useRef(6);

  const onCreate = (content) => {
    const newItem = {
      id:idRef.current,
      title,
      content,
      comments : {id, content},
    };
    
  }

  return (
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path="post-write" element={<PostWritePage />}/>
        <Route path="post/:postId" element={<PostViewPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;