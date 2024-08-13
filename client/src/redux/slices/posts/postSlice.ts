import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PostSliceT, PostT } from '../../../types/post';
import { deletePostThunk, getPostsThunk, submitPostThunk } from './thunks';

const initialState: PostSliceT = {
  posts: [],
  favoritePosts: [],
  chosenPost: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    dislikeAllPosts: (state) => {
      state.favoritePosts = [];
    },
    addToFavorite: (state, action: PayloadAction<PostT['id']>) => {
      const targetPost = state.posts.find((post) => post.id === action.payload);
      if (targetPost) state.favoritePosts.push(targetPost);
      //   else state.favoritePosts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(submitPostThunk.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      });
  },
});

export const { dislikeAllPosts, addToFavorite } = postSlice.actions;

export default postSlice.reducer;
