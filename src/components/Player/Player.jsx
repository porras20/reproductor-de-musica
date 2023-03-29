import './styles';
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body';
import { SpotifyBody } from './styles';


export default function Player() {
  return (
    <SpotifyBody>
        <Sidebar/>
        <Body/>
    </SpotifyBody>
  )
}
