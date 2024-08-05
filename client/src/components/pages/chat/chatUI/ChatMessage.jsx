import React, { useContext } from 'react';
import UserContext from '../../../../contexts/user';

export default function ChatMessage({ message }) {
  const { user } = useContext(UserContext);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent:
          user.id === message.userId ? 'flex-end' : 'flex-start',
      }}
    >
      {message.body}&nbsp;&nbsp;<i>-{message.User.name}</i>
    </div>
  );
}
