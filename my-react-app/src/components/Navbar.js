import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#">Dutch Teacher</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#schrijven">Schrijven</Nav.Link>
        <Nav.Link href="#spreken">Spreken</Nav.Link>
        <Nav.Link href="#luisteren">Luisteren</Nav.Link>
        <Nav.Link href="#lezen">Lezen</Nav.Link>
        <Nav.Link href="#knm">KNM</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
