import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN'
      }
    })
    .then(response => setMovie(response.data))
    .catch(err => console.error(err));
    
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN'
      }
    })
    .then(response => setCast(response.data.cast))
    .catch(err => console.error(err));

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN'
      }
    })
    .then(response => setReviews(response.data.results))
    .catch(err => console.error(err));
  }, [movieId]);
  
  if (!movie) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      
      <h2>Cast</h2>
      <MovieCast cast={cast} />
      
      <h2>Reviews</h2>
      <MovieReviews reviews={reviews} />
      
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default MovieDetailsPage;