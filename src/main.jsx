import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Booking from './components/Booking';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="booking/:movieId" element={<Booking />} />
      </Route>
    </Routes>
  </Router>
);
