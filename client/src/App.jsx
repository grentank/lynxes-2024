import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import ChairsPage from './components/pages/ChairsPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import axiosInstance from './axiosInstance';

function App() {
  const [user, setUser] = useState(); // undefined | null | { id, name, email }

  useEffect(() => {
    axiosInstance
      .get('/tokens/refresh')
      .then((res) => {
        const { user, accessToken } = res.data;
        setUser(user);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const handleSignup = async (signupData) => {
    try {
      const res = await axiosInstance.post('/auth/signup', signupData);
      setUser(res.data.user);
      console.log(res);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const handleLogout = () => axiosInstance('/auth/logout').then(() => {
    setUser(null)
  })

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
          element: <ChairsPage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/signup',
          element: <SignupPage handleSignup={handleSignup} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
