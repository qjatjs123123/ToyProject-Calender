import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface HighlightMap {
  [date: string]: [number, number][];
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
    setTodo: (
      state,
      action: PayloadAction<{ date: string; value: [number, number] }>
    ) => {
      const { date, value } = action.payload;

      if (!state.todos[date]) {
        state.todos[date] = [];
      }

      state.todos[date].push(value);
    },
  },
});

export const { setTodo } = todoSlice.actions;

export default todoSlice.reducer;
