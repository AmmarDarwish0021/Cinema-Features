import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingSeat from './BookingSeat';
import { Button, Form, Alert, Container, Row, Col } from 'react-bootstrap';

const Booking = () => {
  const { movieId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numVisitors, setNumVisitors] = useState(1);
  const [bookingNumber, setBookingNumber] = useState(null);
  const [isBookingAllowed, setIsBookingAllowed] = useState(false);

  const rows = 10;
  const seatsPerRow = 10;
  const totalSeats = rows * seatsPerRow;

  const handleSeatClick = seatNumber => {
    setSelectedSeats(prevSeats =>
      prevSeats.includes(seatNumber)
        ? prevSeats.filter(seat => seat !== seatNumber)
        : [...prevSeats, seatNumber]
    );
  };

  const handleBooking = () => {
    if (selectedSeats.length !== numVisitors) {
      alert('Number of selected seats must match the number of visitors.');
      return;
    }
    const mockBookingNumber = Math.floor(Math.random() * 1000000);
    setBookingNumber(mockBookingNumber);
  };

  const seatPrice = 85;
  const totalPrice = selectedSeats.length * seatPrice;

  const handleNumVisitorsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumVisitors(value);
    setSelectedSeats([]);
    setIsBookingAllowed(value > 0);
  };

  return (
    <div>
      <h1 className="my-4">Booking for Movie {movieId}</h1>
      <Form.Group className="my-3">
        <Form.Label>Number of visitors</Form.Label>
        <Form.Control
          type="number"
          min="1"
          value={numVisitors}
          onChange={handleNumVisitorsChange}
        />
      </Form.Group>
      {isBookingAllowed && (
        <Container>
          <Row className="justify-content-center">
            {Array.from({ length: totalSeats }).map((_, index) => {
              const seatNumber = index + 1;
              const isSelected = selectedSeats.includes(seatNumber);
              return (
                <Col xs={2} key={seatNumber} className="my-2">
                  <BookingSeat
                    seatNumber={seatNumber}
                    isSelected={isSelected}
                    onClick={handleSeatClick}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
      <Button onClick={handleBooking} variant="primary" disabled={!isBookingAllowed}>Complete Booking</Button>
      {bookingNumber && (
        <Alert variant="success" className="mt-3">
          <h4>Booking Receipt</h4>
          <p>Booking Number: {bookingNumber}</p>
          <p>Seats: {selectedSeats.join(', ')}</p>
          <p>Total Price: SEK {totalPrice}</p>
        </Alert>
      )}
    </div>
  );
};

export default Booking;
