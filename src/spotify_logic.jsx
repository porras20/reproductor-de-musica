export const getTokenFromURL = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

const endPoint = 'https://accounts.spotify.com/authorize'
const clientID = 'd4f80f65e01a4d7a8563f9be4f7109b4';
const redirectUri = 'http://localhost:3000'
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"]
export const loginURL = `${endPoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;