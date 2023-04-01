import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
  name: "track",
  initialState: {
    track: null,
  },
  reducers: {
    SET_TRACK: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

export const { SET_TRACK } = trackSlice.actions;
export const selectTrack = (state) => state.track.track;
export default trackSlice.reducer;