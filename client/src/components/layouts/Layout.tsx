import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navigation from '../ui/Navigation';

export default function Layout(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col>
          <Navigation />
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
