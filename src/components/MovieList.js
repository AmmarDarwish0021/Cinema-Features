import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Fetching error:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Length: {movie.description.length} minutes</p>
            <p>Categories: {movie.description.categories.join(', ')}</p>
            <img src={movie.description.posterImage} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
