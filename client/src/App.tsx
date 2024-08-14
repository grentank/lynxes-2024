/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAppRoutes from './customHooks/useAppRoutes';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getPostsThunk } from './redux/slices/posts/thunks';
import { checkAuthThunk } from './redux/slices/auth/thunks';
import { UserStatus } from './types/auth';

function App(): JSX.Element {
  const router = useAppRoutes();
  const dispatch = useAppDispatch();
  const status = useAppSelector((store) => store.auth.user.status);

  useEffect(() => {
    void dispatch(getPostsThunk());
    void dispatch(checkAuthThunk());
  }, []);

  if (status === UserStatus.Pending) return <Spinner animation="border" />;
  return <RouterProvider router={router} />;
}

export default App;
