import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PostCardQuery from './PostCardQuery';
import { useGetPostsQuery } from '../../redux/slices/query/postQuery';

export default function PostListQuery(): JSX.Element {
  const { data: posts, isLoading, isSuccess } = useGetPostsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (!isSuccess) return <div>Error</div>;
  return (
    <Row>
      {posts.map((post) => (
        <Col xs={4} key={post.id}>
          <PostCardQuery post={post} />
        </Col>
      ))}
    </Row>
  );
}
