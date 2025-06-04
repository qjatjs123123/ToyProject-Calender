import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { MODE } from "../util/constants";
import type { modeProps } from "../type/interface";
import type { ManipulateType } from "dayjs";

const initalState: modeProps = {
  mode: MODE.MONTH
};

export const modeSlice = createSlice({
  name: "mode",
  initialState: initalState,
  reducers: {
    setMode: (state, action: PayloadAction<ManipulateType>) => {
      state.mode = action.payload
    },
  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
