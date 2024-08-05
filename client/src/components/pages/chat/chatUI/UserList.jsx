import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function UserList({ onlineUsers }) {
  return (
    <ListGroup>
      {onlineUsers.map((user) => (
        <ListGroup.Item key={user.id} action>
          {user.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
