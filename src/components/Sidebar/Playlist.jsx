import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import {selectToken } from '../../features/TokenSlice';
import { useState, useEffect } from 'react';
import { PlayList } from './styles';
import { SET_PLAYLIST } from '../../features/PlaylistSlice';

export default function Playlist() {
    const spotify = new SpotifyWebApi();
    const dispatch = useDispatch();
    const token = useSelector(selectToken)
    const userId = '81ed1r4nd7ycq3q11rromvyd6'; // Reemplaza USER_ID con el ID del usuario que deseas obtener las playlists
    const playlistsUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
    const accessToken = token // Reemplaza YOUR_ACCESS_TOKEN con tu token de acceso
    const [playlists, setPlaylists] = useState('');

    useEffect(() => {
      axios.get(playlistsUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setPlaylists(response.data.items) //  playlists obtenidas
      })
      .catch((error) => {
        console.log(error);
      })


    }, [])

    const handleIdPlaylist = (id) => {
      spotify.getPlaylist(id).then(playlist => 
        dispatch(SET_PLAYLIST(playlist)))
    }
  return (
      <PlayList>
          <h2>Playlists</h2>
         <div className='name_playlist'>         
          {
            Array.isArray(playlists) ?
            playlists.map((item, index) => (
                <h3 onClick={() => handleIdPlaylist(item.id)} key={item.id}>{item.name}</h3>
            )) : null
          }
          </div>
      </PlayList>
  )
}
