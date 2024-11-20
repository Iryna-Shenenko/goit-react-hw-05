const MovieCast = ({ cast }) => {
    return (
      <div>
        {cast.map(actor => (
          <div key={actor.cast_id}>
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieCast;