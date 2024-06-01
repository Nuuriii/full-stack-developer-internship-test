import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface ListNote {
  todoList: Task[];
}

const initialState: ListNote = {
  todoList: [],
};

export const counterSlice = createSlice({
  name: 'note list',
  initialState,
  reducers: {
    updateListTodo(state, action: PayloadAction<Task[]>) {
      state.todoList = action.payload;
    },
  },
});

export const { updateListTodo } = counterSlice.actions;

export default counterSlice.reducer;
