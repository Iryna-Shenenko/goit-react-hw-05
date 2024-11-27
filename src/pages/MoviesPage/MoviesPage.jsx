import css from "./MoviesPage.module.css";
import { useState, useEffect } from 'react';
import { searchMovies } from '../../api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();

  useEffect (() => {
    document.title = 'Movies';
  },[]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
    setSearchParams ({query});
  };
  useEffect (() => {
const queryFormUrl = searchParams.get('query') || '';
setQuery (queryFormUrl);
 if (queryFormUrl.trim() !== '') {
  const fetchMovies = async () => {
    const results = await searchMovies (queryFormUrl);
    setMovies (results);
  };
  fetchMovies();
 } else {
  setMovies([]);
 }

  }, [searchParams]);


  return (
    <div className={css.search}>
      <form className={css.form} onSubmit={handleSearch}>
        <input className={css.input}
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a movie"
        />
        <button className={css.button} type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
