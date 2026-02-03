  import React, { useContext } from "react";
  import { Container, Nav, Navbar, Button } from "react-bootstrap"; // Import Button here
  import { contextD } from "./ContextData";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  const NavBar = () => {
    let { log, logout } = useContext(contextD);
    let navigate = useNavigate();

    return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-5">
            <Navbar.Brand as={Link} to="/">
              Protected Routes
            </Navbar.Brand>
            <Nav.Link as={Link} to="/product">
              Product
            </Nav.Link>

            {log ? (
              <Button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    );
  };

  export default NavBar;
