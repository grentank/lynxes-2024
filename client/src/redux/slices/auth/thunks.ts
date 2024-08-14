import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../../services/authService';
import type { LoginForm } from '../../../types/auth';

export const loginThunk = createAsyncThunk('auth/loginThunk', (formData: LoginForm) =>
  authService.submitLoginForm(formData),
);

export const checkAuthThunk = createAsyncThunk(
    'auth/checkAuthThunk',
    () => authService.checkAuth(),
);

export const logoutThunk = createAsyncThunk(
    'auth/logoutThunk',
    () => authService.logout(),
);
