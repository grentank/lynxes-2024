import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
