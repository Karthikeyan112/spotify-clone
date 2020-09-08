import React, { useEffect, useState } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './spotify';
import Login from './components/Login';
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        });
      });

      spotify.getUserPlaylists().then(playLists => {
        console.log('playLists', playLists);
        dispatch({
          type: 'SET_PLAYLISTS',
          playLists
        })
      });

      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {token ? (
        <Player spotify={spotify} />
      ): (
        <Login />
      )}
    </div>
  );
}

export default App;
