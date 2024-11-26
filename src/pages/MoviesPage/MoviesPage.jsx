import css from "./MoviesPage.module.css";
import { useState, useEffect } from 'react';
import { searchMovies } from '../../api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect (() => {
    document.title = 'Movies';
  },[]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
    const results = await searchMovies(query);
    setMovies(results);
  };

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
