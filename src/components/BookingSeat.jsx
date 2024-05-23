import { Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const BookingSeat = ({ seatNumber, isSelected, onClick }) => {
  return (
    <Button
      variant={isSelected ? 'success' : 'outline-secondary'}
      onClick={() => onClick(seatNumber)}
      className="m-1"
    >
      {seatNumber}
    </Button>
  );
};

export default BookingSeat;
