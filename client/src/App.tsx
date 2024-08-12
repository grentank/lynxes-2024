/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import PostsProvider from './contexts/PostsProvider';
import useAppRoutes from './customHooks/useAppRoutes';

function App(): JSX.Element {
  const router = useAppRoutes();

  return (
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  );
}

export default App;
