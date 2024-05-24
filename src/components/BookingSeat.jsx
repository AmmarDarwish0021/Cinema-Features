import { Button } from 'react-bootstrap';

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
