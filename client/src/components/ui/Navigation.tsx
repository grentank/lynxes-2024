import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation(): JSX.Element {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Персонажи</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/favs">Избранные</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
