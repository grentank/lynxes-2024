/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useReducer } from 'react';
import postsReducer from './postsReducer';
import postService from '../services/postService';
import type { HandleDeletePost } from '../types/post';
import { PostContext } from './PostContext';

type PostsProviderProps = {
  children: JSX.Element;
};

export default function PostsProvider({ children }: PostsProviderProps): JSX.Element {
  const [posts, dispatch] = useReducer(postsReducer, []);

  useEffect(() => {
    postService
      .getAllPosts()
      .then((data) => {
        dispatch({ type: 'SET_POSTS', payload: data });
      })
      .catch(console.log);
  }, []);

  const deleteHandler: HandleDeletePost = async (postId) => {
    await postService.deletePost(postId);
    dispatch({ type: 'DELETE_POST', payload: postId });
  };
  return <PostContext.Provider value={{ posts, deleteHandler }}>{children}</PostContext.Provider>;
}
