import type { PostAction, PostT } from '../types/post';

export default function postsReducer(state: PostT[], action: PostAction): PostT[] {
  const { type } = action;
  switch (type) {
    case 'SET_POSTS':
      return action.payload;
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    case 'CLEAR_POSTS':
      return [];
    default:
      return state;
  }
}
