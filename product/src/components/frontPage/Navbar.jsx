import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search,ShoppingCart  } from 'lucide-react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavbarScroll() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Online Store</Navbar.Brand>
          <Nav className="me-auto p-3">
            <Nav.Link href="#home">Home</Nav.Link>
            
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant='light'><Search/></Button>
          </Form>
        </Container>
      </Navbar>
  );
}

export default NavbarScroll;