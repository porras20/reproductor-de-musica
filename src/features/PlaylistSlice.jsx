import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name: "platlist",
    initialState: {
        playlist: null,
    },
    reducers: {
        SET_PLAYLIST: (state, action) => {
            state.playlist = action.payload;
        },
    },
})

export const { SET_PLAYLIST } = playlistSlice.actions;
export const selectPlaylist = state => state.playlist.playlist;
export default playlistSlice.reducer;