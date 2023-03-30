import { SongInfo, SongRowContainer } from "./styles"

export default function SongRow({track}) {
  return (
    <SongRowContainer>
        <img src={track.album.images[0].url} alt="Album" />
        <SongInfo>
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
