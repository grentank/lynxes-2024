import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { PostT } from '../../types/post';
import { usePosts } from '../../contexts/PostContext';

type PostCardProps = {
  post: PostT;
};

export default function PostCard({ post }: PostCardProps): JSX.Element {
  const { deleteHandler } = usePosts();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="danger" onClick={() => void deleteHandler(post.id)}>
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}
