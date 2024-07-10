import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default function Layout() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
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
