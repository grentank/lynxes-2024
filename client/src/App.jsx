import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import ChairsPage from './components/pages/ChairsPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import axiosInstance, { setAccessToken } from './axiosInstance';
import SkeletonLoader from './components/hoc/SkeletonLoader';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import AccountPage from './components/pages/AccountPage';

function App() {
  const [user, setUser] = useState(); // undefined | null | { id, name, email }

  useEffect(() => {
    axiosInstance
      .get('/tokens/refresh')
      .then((res) => {
        const { user, accessToken } = res.data;
        setUser(user);
        setAccessToken(accessToken);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const handleSignup = async (signupData) => {
    try {
      const res = await axiosInstance.post('/auth/signup', signupData);
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
      console.log(res);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const handleLogout = () =>
    axiosInstance('/auth/logout').then(() => {
      setUser(null);
      setAccessToken('');
    });

  const handleLogin = async (formData) => {
    try {
      const res = await axiosInstance.post('/auth/login', formData);
      setUser(res.data.user); // res.data = { user: {}, accessToken: '' }
      setAccessToken(res.data.accessToken);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const router = createBrowserRouter([
    {
      element: <Layout user={user} handleLogout={handleLogout} />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/chairs',
          element: <ChairsPage user={user} />,
        },
        {
          path: '/account',
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/login">
              <AccountPage />
            </ProtectedRoute>
          ),
          errorElement: <Navigate to="/login" replace />,
          loader: () => axiosInstance('/chairs/my').then((res) => res.data),
        },
        {
          element: <ProtectedRoute isAllowed={!user} />,
          children: [
            {
              path: '/login',
              element: <LoginPage handleLogin={handleLogin} />,
            },
            {
              path: '/signup',
              element: <SignupPage handleSignup={handleSignup} />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <SkeletonLoader isLoading={user === undefined}>
      <RouterProvider router={router} />
    </SkeletonLoader>
  );
}

export default App;
