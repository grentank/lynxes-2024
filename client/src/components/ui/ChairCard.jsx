import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function ChairCard({ chair }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="bottom" src={chair.image} />
      <Card.Body>
        <Card.Title>{chair.name}</Card.Title>
        <Card.Text>{chair.description.slice(0, 100)}...</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
