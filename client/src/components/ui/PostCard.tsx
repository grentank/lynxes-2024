import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { PostT } from '../../types/post';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToFavorite } from '../../redux/slices/posts/postSlice';
import HeartFilledIcon from './icons/HeartFilledIcon';
import HeartIcon from './icons/HeartIcon';
import { deletePostThunk } from '../../redux/slices/posts/thunks';

type PostCardProps = {
  post: PostT;
};

export default function PostCard({ post }: PostCardProps): JSX.Element {
  const favorites = useAppSelector((store) => store.posts.favoritePosts);
  const dispatch = useAppDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        {favorites.find((p) => p.id === post.id) ? (
          <Button variant="danger">
            <HeartFilledIcon />
          </Button>
        ) : (
          <Button variant="secondary" onClick={() => dispatch(addToFavorite(post.id))}>
            <HeartIcon />
          </Button>
        )}
        <Button variant="danger" onClick={() => void dispatch(deletePostThunk(post.id))}>
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}
