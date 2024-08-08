import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

type PaginateCharsProps = {
  page: number;
  changePage: (page: number) => void;
};

export default function PaginateChars({
  page,
  changePage,
}: PaginateCharsProps): JSX.Element {
  const pages = new Array(5).fill(null).map((_, i) => i + 1);
  return (
    <Pagination size="lg">
      {pages.map((num) => (
        <Pagination.Item
          key={num}
          active={page === num}
          onClick={() => changePage(num)}
        >
          {num}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}
