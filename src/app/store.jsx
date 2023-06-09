import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/UserSlice";
import  tokenReducer  from "../features/TokenSlice";
import playlistReducer from '../features/PlaylistSlice';
import trackReducer from "../features/TrackSlice";
import searchReducer from '../features/SearchSlice'
export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
        track: trackReducer,
        search: searchReducer,
    }
})