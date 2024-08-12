import { z } from 'zod';

export const postSchema = z.object({
  title: z.string(),
  body: z.string(),
  id: z.number(),
});

export type PostT = z.infer<typeof postSchema>;

export type HandleDeletePost = (postId: PostT['id']) => Promise<void>;

export type PostContextValue = {
  posts: PostT[];
  deleteHandler: HandleDeletePost;
};

export type PostAction =
  | {
      type: 'SET_POSTS';
      payload: PostT[];
    }
  | {
      type: 'DELETE_POST';
      payload: PostT['id'];
    }
  | {
      type: 'CLEAR_POSTS';
    };
