export const fetchMovies = async () => {
  const response = await fetch('/api/movies');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};
