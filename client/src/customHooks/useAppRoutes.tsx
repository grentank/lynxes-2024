import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';

export default function useAppRoutes(): ReturnType<typeof createBrowserRouter> {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return router;
}
