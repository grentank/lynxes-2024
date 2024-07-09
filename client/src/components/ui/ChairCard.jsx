import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import TrashIcon from './TrashIcon';
import { useLocation } from 'react-router-dom';

export default function ChairCard({
  user,
  chair,
  loading,
  deleteChairHandler,
}) {
  const location = useLocation();
  return (
    <Card style={{ width: '18rem' }}>
      {loading ? (
        <Skeleton height="18rem" />
      ) : (
        <Card.Img
          style={{ height: '18rem' }}
          variant="bottom"
          src={chair.image}
        />
      )}
      <Card.Body>
        <Card.Title>
          {loading ? <Skeleton count={1} /> : chair.name.slice(0, 20) + '...'}
        </Card.Title>
        <Card.Text>
          {loading ? (
            <Skeleton count={3} />
          ) : (
            chair.description.slice(0, 100) + '...'
          )}
        </Card.Text>
        {!location.pathname.includes('account') &&
          user?.id === chair.ownerId && (
            <Button
              onClick={() => deleteChairHandler(chair.id)}
              variant="danger"
            >
              <TrashIcon />
            </Button>
          )}
      </Card.Body>
    </Card>
  );
}
