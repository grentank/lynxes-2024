import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { PostT } from '../../types/post';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToFavorite, setChosenPost } from '../../redux/slices/posts/postSlice';
import HeartFilledIcon from './icons/HeartFilledIcon';
import HeartIcon from './icons/HeartIcon';
import { deletePostThunk } from '../../redux/slices/posts/thunks';
import { openModal } from '../../redux/slices/modal/modalSlice';

type PostCardProps = {
  post: PostT;
  isFavorite: boolean;
  isOwner: boolean;
  options: {
    totalPosts: number;
    currentDate: Date;
  };
  onLike: () => void;
};

function PostCard({
  post,
  isFavorite,
  isOwner,
  options,
  onLike,
}: PostCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  console.log('card render');
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>
        <Card.Text>
          {post.User.name} ({options.totalPosts})
        </Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        {isFavorite ? (
          <Button variant="danger">
            <HeartFilledIcon />
          </Button>
        ) : (
          <Button
            variant="secondary"
            onClick={() => (dispatch(addToFavorite(post.id)), onLike())}
          >
            <HeartIcon />
          </Button>
        )}
        <Button
          disabled={!isOwner}
          variant="danger"
          onClick={() => void dispatch(deletePostThunk(post.id))}
        >
          Удалить
        </Button>
        <Button
          disabled={!isOwner}
          variant="warning"
          onClick={() => {
            dispatch(openModal('Редактирование'));
            dispatch(setChosenPost(post));
          }}
        >
          Редактировать
        </Button>
      </Card.Body>
    </Card>
  );
}

export default React.memo(PostCard);
