import React from 'react';
import { Col, Row } from 'react-bootstrap';
import type { PostT } from '../../types/post';
import PostCard from './PostCard';
import { useAppSelector } from '../../redux/hooks';

export default function PostList(): JSX.Element {
  const posts = useAppSelector(store => store.posts.posts)
  return (
    <Row>
      {posts.map((post) => (
        <Col xs={4} key={post.id}>
          <PostCard post={post} />
        </Col>
      ))}
    </Row>
  );
}
