const MovieReviews = ({ reviews }) => {
    return (
      <div>
        {reviews.map(review => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieReviews;