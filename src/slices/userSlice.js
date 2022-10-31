import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.value = action.payload;
    },
    clearUser(state) {
      state.value = [];
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
