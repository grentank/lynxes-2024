import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default function Layout({ user, handleLogout }) {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar user={user} handleLogout={handleLogout} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
