import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Protected Routes</Navbar.Brand>
          <Nav className="me-5">
            <Nav.Link href="#home">Product</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
