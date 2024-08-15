import { createAsyncThunk } from '@reduxjs/toolkit';
import postService from '../../../services/postService';
import type { PostFormT, PostT } from '../../../types/post';

export const getPostsThunk = createAsyncThunk('posts/getPostsThunk', async () =>
  postService.getAllPosts(),
);

export const deletePostThunk = createAsyncThunk(
  'posts/deletePostThunk',
  (postId: PostT['id']) => postService.deletePost(postId),
);

export const submitPostThunk = createAsyncThunk(
  'posts/submitPostThunk',
  (formData: PostFormT) => postService.createPost(formData),
);

export const editPostThunk = createAsyncThunk(
  'posts/editPostThunk',
  ({ title, body, id }: PostFormT & { id: PostT['id'] }) =>
    postService.editPost({ title, body }, id),
);
