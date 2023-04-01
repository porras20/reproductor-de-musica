import { PlayCircleOutline, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material'
import ListIcon from '@mui/icons-material/List';
import { Grid, Slider } from '@mui/material'
import React, { useEffect } from 'react'
import { HeaderContainer, HeaderCenter, HeaderLeft, HeaderRight } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { SET_TRACK, selectTrack } from '../../features/TrackSlice';



export default function Header() {
    const track = useSelector(selectTrack);
    
  return (
    <HeaderContainer>
        <HeaderLeft>
          <img src={track.album.images[0].url} alt="" />
          <div>
            <h4>{track.name}</h4>
            <p>{track.artists[0].name}</p>
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
  )
}
