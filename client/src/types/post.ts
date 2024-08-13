import { z } from 'zod';

export const postSchema = z.object({
  title: z.string(),
  body: z.string(),
  id: z.number(),
});

export type PostT = z.infer<typeof postSchema>;

export type PostSliceT = {
  posts: PostT[];
  favoritePosts: PostT[];
  chosenPost: PostT | null;
}