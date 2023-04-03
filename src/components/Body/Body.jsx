import BodyIndex from "./BodyIndex";
import Header from "./BodyHeader";
import { BodyContainer, Info, InfoText, Icons, Songs } from "./styles";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../../features/PlaylistSlice";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import SongRow from "./SongRow";
import { selectSearch } from "../../features/SearchSlice";
import NewPlaylist from "./NewPlaylist";

export default function Body() {
  const playlist = useSelector(selectPlaylist);
  const busqueda = useSelector(selectSearch);

  

  return (
    <BodyContainer>
      <Header />
      <BodyIndex />
      <Info>
        <img src={playlist?.images[0]?.url} alt="" />
        <InfoText>
          <h4>Playlist</h4>
          <p>{playlist?.name}</p>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilled fontSize="large" />
          <Favorite fontSize="large" />
          <MoreHoriz fontSize="large" />
        </Icons>
        {
          playlist?.tracks?.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
            ))
        }
        
      </Songs>
      <NewPlaylist/>
    </BodyContainer>
  );
}
