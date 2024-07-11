import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';

export default function SearchPage() {
  const [chairs, setChairs] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value === '') return;
    const timeoutId = setTimeout(() => {
      axiosInstance('/chairs/search?name=' + value).then((res) =>
        setChairs(res.data),
      );
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <Container>
      <Row>
        <Col>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Начните писать..."
          />
        </Col>
      </Row>
      <ListGroup as="ol" numbered>
        {chairs.map((chair) => (
          <ListGroup.Item
            key={chair.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{chair.name.slice(0, 30)}</div>
              {chair.description.slice(0, 100)}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
