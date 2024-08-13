/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import useAppRoutes from './customHooks/useAppRoutes';
import { useAppDispatch } from './redux/hooks';
import { getPostsThunk } from './redux/slices/posts/thunks';

function App(): JSX.Element {
  const router = useAppRoutes();
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPostsThunk());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
