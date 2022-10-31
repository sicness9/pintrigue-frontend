import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const pinFeedSlice = createSlice({
  name: "pinFeed",
  initialState,
  reducers: {
    addPinToFeed(state, action) {
      state.push(action.payload);
    },
    removePinFromFeed(state, action) {
      state = state.filter((pin) => pin.thumbnail.src !== action.payload);
    },
    resetPinFeed(state) {
      state = [];
    },
  },
});

export const { addPinToFeed, removePinFromFeed, resetPinFeed } =
  pinFeedSlice.actions;

export default pinFeedSlice.reducer;
