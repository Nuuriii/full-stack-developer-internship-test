import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
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
    addTodo(state, action: PayloadAction<Task>) {
      state.todoList.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todoList = state.todoList.filter(
        (task) => task.id !== action.payload,
      );
    },
    editTodoCompleted(
      state,
      action: PayloadAction<{ id: string; completed: boolean }>,
    ) {
      const task = state.todoList.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = action.payload.completed;
      }
    },
    editTodoTitle(state, action: PayloadAction<{ id: string; title: string }>) {
      const task = state.todoList.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
  },
});

export const {
  updateListTodo,
  addTodo,
  deleteTodo,
  editTodoCompleted,
  editTodoTitle,
} = counterSlice.actions;
export default counterSlice.reducer;
