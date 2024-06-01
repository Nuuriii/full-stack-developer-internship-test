import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '@/app/lib/reduxToolkit/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todoListGlobalState: todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
