import React, { useContext } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import UserContext from '../../contexts/user';

export default function AddChairForm({ addChairHandler }) {
  const { user } = useContext(UserContext);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        addChairHandler(formData);
      }}
    >
      <FloatingLabel
        controlId="floatingInput"
        label="Название стула"
        className="mb-3"
      >
        <Form.Control
          disabled={!user}
          name="name"
          type="text"
          placeholder="Название стула"
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Ссылка на изображение"
        className="mb-3"
      >
        <Form.Control
          disabled={!user}
          name="image"
          type="url"
          placeholder="http://..."
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Описание стула"
        className="mb-3"
      >
        <Form.Control
          disabled={!user}
          as="textarea"
          name="description"
          type="text"
          placeholder="Описание стула"
        />
      </FloatingLabel>
      <Button variant="primary" type="submit" disabled={!user}>
        Добавить стул
      </Button>
    </Form>
  );
}
