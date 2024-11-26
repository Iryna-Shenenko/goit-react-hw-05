
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {

    const location = useLocation();
    
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id || Math.random()}>
           <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || "Untitled Movie"}
          </Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default MovieList;