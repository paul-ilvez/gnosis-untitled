import { configureStore } from "@reduxjs/toolkit";
import { screenHandlerSlice } from "@/store/slices/screenHanlderSlice";

export const store = configureStore({
  reducer: {
    screenHandler: screenHandlerSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
