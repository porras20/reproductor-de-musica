import React from 'react'
import { LoginButton, LoginContainer } from './styles'

const endPoint = 'https://accounts.spotify.com/authorize'
const clientID = 'd4f80f65e01a4d7a8563f9be4f7109b4';
const redirectUri = 'http://localhost:3000'
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"]
const loginURL = `${endPoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;

export default function Login() {
  return (
    <LoginContainer>
        <img src="../../Logo.png" alt="" />
        <LoginButton href={loginURL}>Login whith spotify</LoginButton>
    </LoginContainer>
  )
}
