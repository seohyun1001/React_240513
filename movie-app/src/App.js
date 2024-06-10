import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Modal } from 'bootstrap';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';



function App() {
  const [movies, setMovies] = useState([])

  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c8b645f7`;

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  };

  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newList = [...favorites, movie];
    setFavorites(newList);
    saveToLocalStorage(newList);
  };



  return (
    <div className='container-fluid movie-app'>
      <div className='row align-items-center my-4'>
        <MovieListHeading heading='영화 검색과 선호작 등록' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row scroll-container">
        <MovieList movies={movies} handleClick={addFavoriteMovie} />
      </div>

      <div className='row align-items-center my-4'>
        <MovieListHeading heading='내 선호작' />
      </div>
    </div>
  );
}

export default App;
