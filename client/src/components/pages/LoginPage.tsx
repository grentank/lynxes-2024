import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppDispatch } from '../../redux/hooks';
import type { LoginForm } from '../../types/auth';
import { loginThunk } from '../../redux/slices/auth/thunks';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginForm;
        void dispatch(loginThunk(formData));
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" name="password" placeholder="Пароль" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
