import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChairCard from '../ui/ChairCard';
import axiosInstance from '../../axiosInstance';
import AddChairForm from '../ui/AddChairForm';

export default function ChairsPage({ user }) {
  const [chairs, setChairs] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get('/chairs')
      .then((res) => setChairs(res.data))
      .catch(() => setChairs([]))
      .finally(() => setLoading(false));
  }, []);

  const deleteChairHandler = async (chairId) => {
    const res = await axiosInstance.delete(`/chairs/${chairId}`);
    if (res.status === 204) {
      setChairs((prev) => prev.filter((chair) => chair.id !== chairId));
    }
  };

  const addChairHandler = async (formData) => {
    const res = await axiosInstance.post('/chairs', formData);
    if (res.status === 201) {
      setChairs((prev) => [...prev, res.data]);
    }
  };

  return (
    <Container>
      {!!user && (
        <Row>
          <Col>
            <AddChairForm addChairHandler={addChairHandler} />
          </Col>
        </Row>
      )}
      <Row>
        {chairs.map((chair) => (
          <Col key={chair.id} xs={4}>
            <ChairCard
              chair={chair}
              loading={loading}
              deleteChairHandler={deleteChairHandler}
              user={user}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
