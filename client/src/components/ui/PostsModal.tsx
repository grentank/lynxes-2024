import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modal/modalSlice';
import { submitPostThunk } from '../../redux/slices/posts/thunks';

export default function PostsModal(): JSX.Element {
  const { open, title } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(closeModal());
  };
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as {
            title: string;
            body: string;
          };
          void dispatch(submitPostThunk(formData));
          e.currentTarget.reset();
          handleClose();
        }}
      >
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control name="title" type="text" placeholder="Заголовок поста" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Текст поста</Form.Label>
            <Form.Control name="body" as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Создать пост
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
