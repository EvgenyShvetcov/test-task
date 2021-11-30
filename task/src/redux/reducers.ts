import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {};

export const dataSlice = createSlice({
  name: "groupedData",
  initialState,
  reducers: {
    jobGroup(state, action: PayloadAction<any>) {
      state = state;
    },
  },
});

export default dataSlice.reducer;
