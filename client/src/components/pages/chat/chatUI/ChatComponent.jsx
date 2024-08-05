import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function ChatComponent({ messages, sendNewMessage }) {
  return (
    <>
      <Row>
        {messages.map((message) => (
          <Col xs={12} key={message.id}>
            <ChatMessage message={message} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}>
          <ChatInput sendNewMessage={sendNewMessage} />
        </Col>
      </Row>
    </>
  );
}
