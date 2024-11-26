import { getMovieCast } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

  const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  
    useEffect(() => {
      const getCast = async () => {
        try {
          const data = await getMovieCast(movieId);
          setCast(data);
        } catch (e) {
          setError("Failed to load cast");
          console.error(e);
        } finally {
          setLoading(false);
        }
      };
      getCast();
    }, [movieId]);
  
    if (loading) {
      return <Loader />;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
    if (cast.length === 0) {
      return <p>No cast information available.</p>;
    }

    return (
      <div className={css.castContainer}>
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.castItem}>
            <div className={css.actorCard}>
              {actor.profile_path ? (
                <img
                  className={css.actorImage}
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <div className={css.noImage}>No Image</div>
              )}
              <div className={css.actorInfo}>
                <h3>{actor.name}</h3>
                <p>{actor.character && `Character: ${actor.character}`}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
  
  export default MovieCast;