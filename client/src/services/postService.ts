import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import axiosInstance from './client';
import type { PostT } from '../types/post';
import { postSchema } from '../types/post';

class PostService {
  constructor(private client: AxiosInstance) {}

  async getAllPosts(): Promise<PostT[]> {
    try {
      const res = await this.client('/posts');
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

  async deletePost(postId: PostT['id']): Promise<void> {
    const res = await this.client.delete(`/posts/${postId}`);
    if (res.status !== 204) throw new Error('Wrong status while deleting a post');
  }
}

const postService = new PostService(axiosInstance);

export default postService;
