import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';



const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect (() => {
    document.title = 'Home';
  },[]);


  useEffect (() => {
    const loadMovies = async () => {
      try { 
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    } catch (err) {
      setError('Failed to load movies');
    } finally {
      setLoading(false);
    }
  };

  loadMovies();
}, []);
if (loading) {
  return <Loader/>;
}

if (error) {
  return <div>{error}</div>;
}


  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
