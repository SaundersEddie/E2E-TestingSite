import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FrontPage from './pages/FrontPage';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container>
          <FrontPage />
        </Container>

        <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#features">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </div>
  );
}

export default App;
