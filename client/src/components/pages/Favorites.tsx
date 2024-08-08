import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

type AddFormType = {
  ids: string;
};

export default function Favorites(): JSX.Element {
  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as AddFormType;
    const res = await axios.post('/api/favorites/multiple', formData);
    if (res.status === 200) {
      window.location.href = '/';
    }
  };
  return (
    <Form onSubmit={(e) => void submitHandler(e)}>
      <Form.Group className="mb-3">
        <Form.Label>Напиши через запятую id</Form.Label>
        <Form.Control name="ids" as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit">Добавить</Button>
    </Form>
  );
}
