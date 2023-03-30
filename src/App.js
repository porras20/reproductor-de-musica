import React, { useEffect, useState } from 'react'
import { getTokenFromURL } from './spotify_logic'
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import './App.css';
function App() {

  const [token, setToken] = useState('');
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = '';
    const _token = hash.access_token;
    setToken(_token)
    // console.log("token =>", _token);
  }, [])

  return (
    <div className="App">
    {
      token ? <Player/> : <Login/>
    }
  
    </div>
  );
}

export default App;
