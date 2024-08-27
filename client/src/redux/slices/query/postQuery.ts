import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PostT } from '../../../types/post';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<PostT[], void>({
      query: () => `posts`,
      providesTags: ['Post'],
    }),
    deletePost: builder.mutation<void, PostT['id']>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const res = dispatch(
          postsApi.util.updateQueryData('getPosts', undefined, (draft) =>
            draft.filter((post) => post.id !== id),
          ),
        );
        await queryFulfilled.catch(() => res.undo());
      },
      //   invalidatesTags: ['Post'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useDeletePostMutation } = postsApi;
