import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/posts/postSlice';
import modalReducer from './slices/modal/modalSlice';
import authReducer from './slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    modal: modalReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
