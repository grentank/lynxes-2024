import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modal/modalSlice';
import { editPostThunk, submitPostThunk } from '../../redux/slices/posts/thunks';
import type { PostFormT } from '../../types/post';
import { setChosenPost } from '../../redux/slices/posts/postSlice';

export default function PostsModal(): JSX.Element {
  const chosenPost = useAppSelector((store) => store.posts.chosenPost);
  const { open } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(closeModal());
    dispatch(setChosenPost(null));
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as PostFormT;
    if (!chosenPost) void dispatch(submitPostThunk(formData));
    else void dispatch(editPostThunk({ ...formData, id: chosenPost.id }));
    e.currentTarget.reset();
    handleClose();
  };
  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {chosenPost ? `Редактирование поста ${chosenPost.id}` : 'Создание поста'}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              defaultValue={chosenPost?.title || ''}
              name="title"
              type="text"
              placeholder="Заголовок поста"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Текст поста</Form.Label>
            <Form.Control
              defaultValue={chosenPost?.body || ''}
              name="body"
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {chosenPost ? 'Сохранить' : 'Создать'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
