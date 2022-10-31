import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const authedSlice = createSlice({
  name: "authed",
  initialState,
  reducers: {
    setAuthed(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setAuthed } = authedSlice.actions;

export default authedSlice.reducer;
