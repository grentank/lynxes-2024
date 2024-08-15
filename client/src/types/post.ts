import { z } from 'zod';
import { userSchema } from './auth';

export const postSchema = z.object({
  title: z.string(),
  body: z.string(),
  id: z.number(),
  userId: z.number(),
  User: userSchema,
});

export type PostT = z.infer<typeof postSchema>;

export type PostFormT = {
  title: string;
  body: string;
}

export type PostSliceT = {
  posts: PostT[];
  favoritePosts: PostT[];
  chosenPost: PostT | null;
};
