import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTokenFromURL } from './spotify_logic'
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import './App.css';
import { SET_USER } from './features/UserSlice';
import SpotifyWebApi from 'spotify-web-api-js';
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import { SET_PLAYLIST } from './features/PlaylistSlice';

const spotify = new SpotifyWebApi();

function App() {

  const token = useSelector(selectToken)
  const dispatch = useDispatch();


  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;

    if (_token) {
      dispatch(SET_TOKEN(_token))
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => dispatch(SET_USER(user)))
      spotify.getUserPlaylists()
      spotify.getPlaylist('3IboOPbJJuIyRPqlB21ysH').then(playlist => 
        dispatch(SET_PLAYLIST(playlist)))
    }
  }, [dispatch])

  return (
    <div className="App">
    {
      token ? <Player/> : <Login/>
    }
  
    </div>
  );
}

export default App;
