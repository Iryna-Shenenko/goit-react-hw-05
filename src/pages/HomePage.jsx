import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN'
      }
    })
    .then(response => setMovies(response.data.results))
    .catch(err => console.error(err));
  }, []);
  
  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};
export default HomePage;