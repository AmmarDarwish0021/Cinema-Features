import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Booking from './components/Booking';
import SeatSelection from './components/SeatSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
