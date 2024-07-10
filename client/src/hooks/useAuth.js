import { useEffect, useState } from 'react';
import axiosInstance, { setAccessToken } from '../axiosInstance';

export default function useAuth() {
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

  return { user, handleLogin, handleLogout, handleSignup };
}
