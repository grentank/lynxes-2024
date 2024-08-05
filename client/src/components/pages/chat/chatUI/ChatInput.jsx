import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function ChatInput({ sendNewMessage }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const text = new FormData(form).get('text');
        sendNewMessage(text);
        form.reset();
      }}
    >
      <Form.Control
        name="text"
        type="text"
        placeholder="Введи сообщение"
      />
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
  );
}
