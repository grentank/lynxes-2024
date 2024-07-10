import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChairCard from '../ui/ChairCard';
import useChairs from '../../hooks/useChairs';

export default function AccountPage() {
  const {
    chairs: myChairs,
    loading,
    deleteChairHandler,
  } = useChairs({
    url: '/chairs/my',
  });
  return (
    <Container>
      <Row>
        {myChairs.map((chair) => (
          <Col key={chair.id} xs={4}>
            <ChairCard
              chair={chair}
              loading={loading}
              deleteChairHandler={deleteChairHandler}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
