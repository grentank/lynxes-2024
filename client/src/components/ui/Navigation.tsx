import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import PlusCircleIcon from './icons/PlusCircleIcon';
import { openModal } from '../../redux/slices/modal/modalSlice';
import { useAppDispatch } from '../../redux/hooks';

export default function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link as={Button} onClick={() => dispatch(openModal('Создание поста'))}>
            <PlusCircleIcon />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
