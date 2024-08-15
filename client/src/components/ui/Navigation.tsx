import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PlusCircleIcon from './icons/PlusCircleIcon';
import { openModal } from '../../redux/slices/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearAuth } from '../../redux/slices/auth/authSlice';
import { UserStatus } from '../../types/auth';
import { logoutThunk } from '../../redux/slices/auth/thunks';

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          {user.status === UserStatus.Logged ? user.name : 'Гость'}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          {user.status === UserStatus.Logged ? (
            <>
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={Button} onClick={() => dispatch(openModal('Создание поста'))}>
                <PlusCircleIcon />
              </Nav.Link>
              <Button onClick={() => void dispatch(logoutThunk())}>Выйти</Button>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup">
                Signup
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
