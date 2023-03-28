import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {

  return (
    <div>
      <Navbar bg="secondary" expand="lg">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>FC market</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/account">
              <Nav.Link>
                <i className="fa fa-user fa-lg"></i>
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
              <Nav.Link href="#">
                <i className="fa fa-shopping-cart fa-lg"></i>
              </Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
