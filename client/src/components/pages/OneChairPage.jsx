import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import SkeletonLoader from '../hoc/SkeletonLoader';
import { Card } from 'react-bootstrap';

export default function OneChairPage() {
  const [chair, setChair] = useState(null);

  const { chairId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axiosInstance(`/chairs/${chairId}`, { signal })
      .then((res) => setChair(res.data))
      .catch(console.log);
    return () => controller.abort();
  }, [chairId]);

  return !chair ? (
    <SkeletonLoader isLoading={!chair}>Loading</SkeletonLoader>
  ) : (
    <>
      <Link to={`/chairs/${Number(chairId) + 1}`}>Следующий стул</Link>
      <Link to={`/chairs/${Number(chairId) - 1}`}>Предыдущий стул</Link>
      <Card className="bg-dark text-white">
        <Card.Img src={chair.image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{ color: 'black' }}>{chair.name}</Card.Title>
          {/* <Card.Text>
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text> */}
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
