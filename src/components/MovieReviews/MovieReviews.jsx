import { useEffect, useState } from "react";
import { getMovieReviews } from "../../api";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";


const MovieReviews = () => {
  const { movieId} = useParams();
  const [reviews, setReviews] = useState([]);
  const [ loading, setLoading] = useState (true);
  const [ error, setError] = useState(null);

  useEffect (() => {
    const fetchReviews  = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (err) {
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }
  
    return (

      <div>
        <ul>  
        {reviews.map(review => (
          <li key={review.id}>
            <p><strong>{review.author}</strong></p>
            <p>{review.content}</p>
          </li>
        ))}
         </ul>
      </div>
    );
  };
  
  export default MovieReviews;