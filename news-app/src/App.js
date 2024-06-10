import { useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';

function App() {
  // const [data, setData] = useState(null);
  // const onClick = async() => {
  //   try {
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=acb96962bdb9478c8d301fa3a5c8cbcb')
  //     setData(response.data);
  //   } catch(e) {
  //     console.error(e);
  //   }
  // }

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={50} cols={100} value={JSON.stringify(data,null,2)}/>}
  //   </div>
  // );

  return <NewsList/>
}

export default App;
