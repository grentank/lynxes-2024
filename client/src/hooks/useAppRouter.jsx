import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../components/pages/MainPage';
import ChairsPage from '../components/pages/ChairsPage';
import ProtectedRoute from '../components/hoc/ProtectedRoute';
import AccountPage from '../components/pages/AccountPage';
import LoginPage from '../components/pages/LoginPage';
import SignupPage from '../components/pages/SignupPage';

export default function useAppRouter(user) {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/chairs',
          element: <ChairsPage />,
        },
        {
          path: '/account',
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/login">
              <AccountPage />
            </ProtectedRoute>
          ),
        },
        {
          element: <ProtectedRoute isAllowed={!user} />,
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
}
