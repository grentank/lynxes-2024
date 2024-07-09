import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChairCard from '../ui/ChairCard';

export default function AccountPage() {
  const myChairs = useLoaderData();
  return (
    <Container>
      <Row>
        {myChairs.map((chair) => (
          <Col key={chair.id} xs={4}>
            <ChairCard
              chair={chair}
              loading={false}
              // deleteChairHandler={deleteChairHandler}
              user={null}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
