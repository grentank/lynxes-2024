import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../components/pages/MainPage';
import ChairsPage from '../components/pages/ChairsPage';
import ProtectedRoute from '../components/hoc/ProtectedRoute';
import AccountPage from '../components/pages/AccountPage';
import LoginPage from '../components/pages/LoginPage';
import SignupPage from '../components/pages/SignupPage';
import EffectPage from '../components/pages/EffectPage';
import OneChairPage from '../components/pages/OneChairPage';
import SearchPage from '../components/pages/SearchPage';

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
          path: '/search',
          element: <SearchPage />,
        },
        {
          path: '/chairs/:chairId',
          element: <OneChairPage />,
        },
        {
          path: '/effect',
          element: <EffectPage />,
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
