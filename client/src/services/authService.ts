import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import axiosInstance from './client';
import type { AuthSchemaT, LoginForm } from '../types/auth';
import { authSchema } from '../types/auth';

class AuthService {
  constructor(private client: AxiosInstance) {}

  async submitLoginForm(formData: LoginForm): Promise<AuthSchemaT> {
    try {
      const res = await this.client.post('/auth/login', formData);
      return authSchema.parse(res.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR WHILE LOGIN', error.issues);
      }
      return Promise.reject(new Error('Login error'));
    }
  }

  async checkAuth(): Promise<AuthSchemaT> {
    const res = await this.client.get('/tokens/refresh');
    return authSchema.parse(res.data);
  }

  async logout(): Promise<void> {
    await this.client.get('/auth/logout');
  }
}

const authService = new AuthService(axiosInstance);

export default authService;
