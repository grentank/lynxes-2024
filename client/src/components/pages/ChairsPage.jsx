import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChairCard from '../ui/ChairCard';
import AddChairForm from '../ui/AddChairForm';
import useChairs from '../../hooks/useChairs';

export default function ChairsPage() {
  const { addChairHandler, chairs, loading, deleteChairHandler } =
    useChairs({ url: '/chairs' });
  return (
    <Container>
      <Row>
        <Col>
          <AddChairForm addChairHandler={addChairHandler} />
        </Col>
      </Row>

      <Row>
        {chairs.map((chair) => (
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
