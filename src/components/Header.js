import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import {AiOutlineShoppingCart} from 'react-icons/ai';



const Header = () => {
  return (
    <Navbar
      className="color-nav"
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="logo" href="/">
          <img alt="logo" src="" className="d-inline-block align-top" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-links" href="#service">
              Our Service
            </Nav.Link>
            <Nav.Link className="nav-links" href="#results">
              Our Results
            </Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="success" size="lg">
                LOGIN
              </Button>{" "}
            </Nav.Link>
            <Nav.Link eventKey={2} >
              <Button variant="outline-success" size="lg">
                SIGN UP
              </Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
