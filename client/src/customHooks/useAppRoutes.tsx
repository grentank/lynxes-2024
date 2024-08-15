import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';
import ProtectedRoute from '../components/HOC/ProtectedRoute';
import SignupPage from '../components/pages/SignupPage';
import { useAppSelector } from '../redux/hooks';
import { UserStatus } from '../types/auth';

export default function useAppRoutes(): ReturnType<typeof createBrowserRouter> {
  const status = useAppSelector((store) => store.auth.user.status);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          element: <ProtectedRoute isAllowed={status === UserStatus.Guest} />,
          children: [
            {
              path: '/login',
              element: <LoginPage />,
            },
            {
              path: '/signup',
              element: <SignupPage />,
            },
          ],
        },
      ],
    },
  ]);
  return router;
}
