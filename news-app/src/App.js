import { useCallback, useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

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

  const [category, setCategory] = useState("all");
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  )
}

export default App;
