import { createContext, useContext } from 'react';
import type { PostContextValue } from '../types/post';

export const PostContext = createContext<PostContextValue | null>(null);

export function usePosts(): PostContextValue {
  const context = useContext(PostContext);
  if (!context) throw new Error('usePosts must be used within a PostsProvider');
  return context;
}
