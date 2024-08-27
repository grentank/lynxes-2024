import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/posts/postSlice';
import modalReducer from './slices/modal/modalSlice';
import authReducer from './slices/auth/authSlice';
import { postsApi } from './slices/query/postQuery';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    modal: modalReducer,
    auth: authReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
