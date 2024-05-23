import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../services/api';
import { Card, Button, Form } from 'react-bootstrap';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    loadMovies();
  }, []);

  const filteredMovies = filter
    ? movies.filter(movie => movie.description.categories.includes(filter))
    : movies;

  return (
    <div>
      <h1 className="my-4">Movies</h1>
      <Form.Group className="mb-3">
        <Form.Label>Filter by category</Form.Label>
        <Form.Control as="select" onChange={e => setFilter(e.target.value)} value={filter}>
          <option value="">All Categories</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
        </Form.Control>
      </Form.Group>

      <div className="d-flex flex-wrap">
        {filteredMovies.map(movie => (
          <Card key={movie.id} style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={`https://cinema-rest.nodehill.se${movie.description.posterImage}`} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                Length: {Math.floor(movie.description.length / 60)}h {movie.description.length % 60}m
                <br />
                Categories: {movie.description.categories.join(', ')}
              </Card.Text>
              <Button as={Link} to={`/booking/${movie.id}`} variant="primary">Book now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
