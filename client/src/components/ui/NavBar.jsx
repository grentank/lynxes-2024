import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UserContext from '../../contexts/user';

export default function NavBar() {
  const { user, handleLogout } = useContext(UserContext); // Provider -> {}
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">{user ? user.name : 'Гость'}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Main
          </Nav.Link>
          <Nav.Link as={NavLink} to="/chairs">
            Стулья
          </Nav.Link>
          <Nav.Link as={NavLink} to="/effect">
            useEffect
          </Nav.Link>
          {user ? (
            <>
              <Nav.Link as={NavLink} to="/account">
                Личный акк
              </Nav.Link>
              <Nav.Link as={NavLink} to="/chat">
                Чат
              </Nav.Link>
              <Button onClick={handleLogout}>Выход</Button>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/login">
                Вход
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup">
                Регистрация
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
