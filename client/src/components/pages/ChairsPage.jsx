import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChairCard from '../ui/ChairCard';
import axiosInstance from '../../axiosInstance';

export default function ChairsPage() {
  const [chairs, setChairs] = useState([]);

  useEffect(() => {
    axiosInstance.get('/chairs').then((res) => setChairs(res.data));
  }, []);

  return (
    <Container>
      <Row>
        <Col>Форма добавления</Col>
      </Row>
      <Row>
        {chairs.map((chair) => (
          <Col key={chair.id} xs={4}>
            <ChairCard chair={chair} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
