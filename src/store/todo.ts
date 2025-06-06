/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TempTodoBox } from "../type/interface";

interface HighlightMap {
  [date: string]: any[];
}

interface TodoState {
  todos: HighlightMap;
}

const initialState: TodoState = {
  todos: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<{ value: TempTodoBox }>) => {
      const { value } = action.payload;

      if (!state.todos[value.date]) {
        state.todos[value.date] = [];
      }

      state.todos[value.date].push(value);
    },
    deleteTodo: (state, action: PayloadAction<{ value: TempTodoBox }>) => {
      const { value } = action.payload;

      if (!state.todos[value.date]) return;

      state.todos[value.date] = state.todos[value.date].filter(
        (todo) => todo.id !== value.id
      );
    },
    updateTodo: (state, action: PayloadAction<{ value: TempTodoBox }>) => {
      const { value } = action.payload;

      if (!state.todos[value.date]) return;

      state.todos[value.date] = state.todos[value.date].map((todo) =>
        todo.id === value.id ? { ...value } : todo
      );
    },
  },
});

export const { setTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
