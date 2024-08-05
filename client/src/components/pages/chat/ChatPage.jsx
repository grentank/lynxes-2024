import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import UserList from './chatUI/UserList';
import ChatComponent from './chatUI/ChatComponent';

export default function ChatPage() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);
  useEffect(() => {
    function connect() {
      const socket = new WebSocket('http://localhost:3000');
      socketRef.current = socket;
      socket.onopen = () => console.log('Connected to WebSocket server');
      socket.onclose = () => {
        console.log('Disconnected from WebSocket');
        setTimeout(connect, 2000);
      };
      socket.onerror = (error) => console.log('WebSocket error:', error);
      socket.onmessage = (event) => {
        const action = JSON.parse(event.data);
        const { type, payload } = action;
        switch (type) {
          case 'SET_USERS':
            setOnlineUsers(payload);
            break;
          case 'SET_MESSAGES':
            setMessages(payload);
            break;
          case 'ADD_MESSAGE':
            setMessages((prev) => [...prev, payload]);
            break;
          default:
            break;
        }
      };
    }
    connect();

    return () => socketRef.current.close();
  }, []);
  const sendNewMessage = (text) => {
    const action = {
      type: 'NEW_MESSAGE',
      payload: text,
    };
    socketRef.current.send(JSON.stringify(action));
  };
  return (
    <Row>
      <Col xs={3}>
        <UserList onlineUsers={onlineUsers} />
      </Col>
      <Col xs={9}>
        <ChatComponent
          sendNewMessage={sendNewMessage}
          messages={messages}
        />
      </Col>
    </Row>
  );
}
