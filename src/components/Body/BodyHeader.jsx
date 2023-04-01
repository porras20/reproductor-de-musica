import { PlayCircleOutline, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material'
import ListIcon from '@mui/icons-material/List';
import { Grid, Slider } from '@mui/material'
import { HeaderContainer, HeaderCenter, HeaderLeft, HeaderRight } from './styles'
import { useSelector } from 'react-redux';
import { selectTrack } from '../../features/TrackSlice';

export default function Header() {
    const track = useSelector(selectTrack);
    
  return (
    <>
    {
      track === '' ? <h1>No hay cancionés seleccionadas</h1> : 
      <HeaderContainer> 
        <HeaderLeft>
            <img src={track[0]?.album.images[0].url} alt="" />
            <div>
              <h4>{track[0]?.name}</h4>
              <p>{track[0]?.artists[0].name}</p>
            </div>
          </HeaderLeft>
          
          <HeaderCenter>
            <Shuffle/>
            <SkipPrevious />
            <PlayCircleOutline />
            <SkipNext />
            <Repeat />
          </HeaderCenter>
          <HeaderRight>
            <Grid container spacing={2}>
              <Grid item><ListIcon /></Grid>
              <Grid item><VolumeDown /></Grid>
              <Grid item xs><Slider /></Grid>
            </Grid>
          </HeaderRight>
      </HeaderContainer>
    }
    </>
  )
}
