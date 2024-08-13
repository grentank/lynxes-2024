import { createAsyncThunk } from '@reduxjs/toolkit';
import postService from '../../../services/postService';
import type { PostT } from '../../../types/post';

export const getPostsThunk = createAsyncThunk('posts/getPostsThunk', async () =>
  postService.getAllPosts(),
);

export const deletePostThunk = createAsyncThunk(
  'posts/deletePostThunk',
  (postId: PostT['id']) => postService.deletePost(postId),
);

export const submitPostThunk = createAsyncThunk(
  'posts/submitPostThunk',
  (formData: Omit<PostT, 'id'>) => postService.createPost(formData),
);
