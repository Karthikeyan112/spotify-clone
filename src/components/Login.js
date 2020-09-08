import React from 'react';
import './Login.css';
import Logo from '../images/spotify-logo.png';
import { loginUrl } from '../spotify';

const Login = () => {
  return (
    <div className='login'>
      <img src={Logo} alt='Spotify Logo' />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login;