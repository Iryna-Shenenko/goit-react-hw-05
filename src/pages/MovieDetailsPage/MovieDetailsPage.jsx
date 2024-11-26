import { useEffect, useState } from 'react';
import { useParams, NavLink, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails,  } from '../../api';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetailsPage.module.css';





const MovieDetailsPage = () => {
  const { movieId } = useParams();
const location = useLocation();
  const [movie, setMovie] = useState(null);
  const backLink = location.state?.from || '/';
 

  useEffect(() => {
    const fetchMovie = async () => {
        try { 
      const details = await getMovieDetails(movieId);
      setMovie(details);
     
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
};

fetchMovie();
  }, [movieId]);

  if (!movie) {return <Loader />;

  } if (!movie.title || !movie.overview || !movie.poster_path || !movie.genres) {
    return <p>Movie information is not available.</p>;
  }

  return (
    <div className={css.movieDetails}>
         <NavLink to={backLink} className={css.back}>
        Go back
      </NavLink>
<div className={css.container}>  
      <img className={css.img} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div> 
      <h1>{movie.title}</h1>
      <p className={css.subText}><strong>User Score:</strong> {(movie.vote_average * 10).toFixed(0)}</p>
          <p className={css.subText}><strong>Overview:</strong> {movie.overview}</p>
          <p className={css.subText}><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
      </div> 
      </div>
      <h3>Additional information</h3>
      <ul>  
        <li>
        <NavLink to="cast" state={{ from: backLink }} className={css.link}>Cast</NavLink>
        </li>
        <li>
        <NavLink to="reviews" state={{ from: backLink }} className={css.link}>
            Reviews
          </NavLink>
        </li>

      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
