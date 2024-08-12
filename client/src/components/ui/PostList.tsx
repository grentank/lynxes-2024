import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { usePosts } from '../../contexts/PostContext';
import PostCard from './PostCard';

export default function PostList(): JSX.Element {
  const { posts } = usePosts();
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
