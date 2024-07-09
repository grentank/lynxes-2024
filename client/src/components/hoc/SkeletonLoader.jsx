import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function SkeletonLoader({ isLoading, children }) {
  if (isLoading)
    return (
      <div
        className="d-flex flex-row justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner
          style={{ margin: 'auto', height: '100px', width: '100px' }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  return children;
}
