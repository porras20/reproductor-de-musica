import { useDispatch } from "react-redux"
import { SongInfo, SongRowContainer } from "./styles"
import { SET_TRACK } from "../../features/TrackSlice"

export default function SongRow({track}) {
    const dispatch = useDispatch();
    const setTrack = (track) =>{
        dispatch(SET_TRACK(track));
    }
   
  return (
    <SongRowContainer className="hvr-sweep-to-bottom">
        <img src={track.album.images[0].url} alt="Album" />
        <SongInfo onClick={() => setTrack(track)}>
            <h4>{track.name}</h4>
            <p>
                {
                    track.artists.map(artist => artist.name).join(', ')
                }
                {
                    track.album.name
                }
            </p>
        </SongInfo>
    </SongRowContainer>
  )
}
