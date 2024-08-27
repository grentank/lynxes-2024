import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type { PostT } from '../../types/post';
import HeartFilledIcon from './icons/HeartFilledIcon';
import { useDeletePostMutation } from '../../redux/slices/query/postQuery';

type PostCardQueryProps = {
  post: PostT;
};

function PostCardQuery({ post }: PostCardQueryProps): JSX.Element {
  const [deletePost] = useDeletePostMutation();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>
        <Card.Text>{post.User.name}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        {/* {isFavorite ? ( */}
        <Button variant="danger">
          <HeartFilledIcon />
        </Button>
        {/* </Button>
        ) : (
          <Button
            variant="secondary"
            // onClick={() => (dispatch(addToFavorite(post.id)), onLike())}
          >
            <HeartIcon />
          </Button>
        )} */}
        <Button
          // disabled={!isOwner}
          variant="danger"
          onClick={() => void deletePost(post.id)}
          // onClick={() => void dispatch(deletePostThunk(post.id))}
        >
          Удалить
        </Button>
        {/* <Button
          disabled={!isOwner}
          variant="warning"
          onClick={() => {
            dispatch(openModal('Редактирование'));
            dispatch(setChosenPost(post));
          }}
        >
          Редактировать
        </Button> */}
      </Card.Body>
    </Card>
  );
}

export default React.memo(PostCardQuery);
