import React, { useMemo, useCallback } from 'react';
import { Col, Row } from 'react-bootstrap';
import PostCard from './PostCard';
import { useAppSelector } from '../../redux/hooks';
import { UserStatus } from '../../types/auth';

export default function PostList(): JSX.Element {
  const user = useAppSelector((store) => store.auth.user);
  const posts = useAppSelector((store) => store.posts.posts);
  const favorites = useAppSelector((store) => store.posts.favoritePosts);
  const options = useMemo(
    () => ({
      totalPosts: posts.length,
      currentDate: new Date(),
    }),
    [posts.length],
  );
  const onLike = useCallback((): void => {
    alert('Like!');
  }, []);
  return (
    <Row>
      {posts.map((post) => (
        <Col xs={4} key={post.id}>
          <PostCard
            onLike={onLike}
            post={post}
            options={options}
            isOwner={user.status === UserStatus.Logged && user.id === post.userId}
            isFavorite={!!favorites.find((p) => p.id === post.id)}
          />
        </Col>
      ))}
    </Row>
  );
}
