import React from 'react';
import { RouterProvider } from 'react-router-dom';
import SkeletonLoader from './components/hoc/SkeletonLoader';
import UserContext from './contexts/user';
import useAuth from './hooks/useAuth';
import useAppRouter from './hooks/useAppRouter';

function App() {
  const auth = useAuth();
  const { user } = auth;

  const router = useAppRouter(user);

  return (
    <UserContext.Provider value={auth}>
      <SkeletonLoader isLoading={user === undefined}>
        <RouterProvider router={router} />
      </SkeletonLoader>
    </UserContext.Provider>
  );
}

export default App;
