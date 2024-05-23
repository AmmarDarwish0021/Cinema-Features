import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Feature Flicks</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
      <footer className="text-center mt-4">
      </footer>
    </div>
  );
};

export default App;
