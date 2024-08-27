import React, { useEffect } from 'react';
import PostList from '../ui/PostList';
import { useAppDispatch } from '../../redux/hooks';
import { getPostsThunk } from '../../redux/slices/posts/thunks';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPostsThunk());
  }, []);
  return (
    <>
      <div>FORM</div>
      <PostList />
    </>
  );
}
