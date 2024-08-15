import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import axiosInstance from './client';
import type { PostFormT, PostT } from '../types/post';
import { postSchema } from '../types/post';

class PostService {
  constructor(private client: AxiosInstance) {}

  async getAllPosts(): Promise<PostT[]> {
    try {
      const res = await this.client('/posts'); // axios('/posts')
      if (res.status !== 200) throw new Error('Error fetching posts');
      return postSchema.array().parse(res.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZodError issues:', error.issues);
      } else {
        console.error(error);
      }
      return Promise.reject(new Error('Error fetching posts'));
    }
  }

  async deletePost(postId: PostT['id']): Promise<PostT['id']> {
    const res = await this.client.delete(`/posts/${postId}`);
    if (res.status !== 204) throw new Error('Wrong status while deleting a post');
    return postId;
  }

  async createPost(formData: PostFormT): Promise<PostT> {
    const res = await this.client.post('/posts', formData);
    if (res.status === 201) return postSchema.parse(res.data);
    return Promise.reject(new Error('Ошибка добавления постов (чекни статус)'));
  }

  async editPost(formData: PostFormT, id: PostT['id']): Promise<PostT> {
    const res = await this.client.patch(`/posts/${id}`, formData);
    if (res.status === 200) return postSchema.parse(res.data);
    return Promise.reject(new Error('Ошибка редактирование поста (чекни статус)'));
  }
}

const postService = new PostService(axiosInstance);

export default postService;
