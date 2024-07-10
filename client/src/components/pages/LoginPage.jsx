import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import UserContext from '../../contexts/user';

export default function LoginPage() {
  const { handleLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        setLoading(true);
        handleLogin(formData).finally(() => setLoading(false));
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Эл.Почта</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="mail@mail.com"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control name="password" type="password" />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? 'Вход...' : 'Войти'}
      </Button>
    </Form>
  );
}
