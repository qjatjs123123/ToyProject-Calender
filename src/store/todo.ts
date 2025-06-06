/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    setTodo: (state, action: PayloadAction<{ date: string; value: any[] }>) => {
      const { date, value } = action.payload;

      if (!state.todos[date]) {
        state.todos[date] = [];
      }

      state.todos[date].push(value);
    },
    deleteTodo: (state, action: PayloadAction<{ date: string; id: any }>) => {
      const { date, id } = action.payload;

      if (!state.todos[date]) return;

      state.todos[date] = state.todos[date].filter(
        (todo) => todo[todo.length - 1] !== id
      );
    },
    updateTodo: (
      state,
      action: PayloadAction<{ date: string; id: any; newValue: any[] }>
    ) => {
      const { date, id, newValue } = action.payload;

      if (!state.todos[date]) return;

      const index = state.todos[date].findIndex(
        (todo) => todo[todo.length - 1] === id
      );

      if (index !== -1) {
        state.todos[date][index] = newValue;
      }
    },
  },
});

export const { setTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
