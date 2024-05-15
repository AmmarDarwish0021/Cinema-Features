import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SeatSelection = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/api/movies/${movieId}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [movieId]);

  return (
    <div>
      <h1>Seat Selection</h1>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          {/* Add seat selection interface here */}
        </div>
      )}
    </div>
  );
};

export default SeatSelection;
