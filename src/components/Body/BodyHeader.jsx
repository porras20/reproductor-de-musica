import { PlayCircleOutline, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material'
import ListIcon from '@mui/icons-material/List';
import { Grid, Slider } from '@mui/material'
import React, { useEffect } from 'react'
import { HeaderContainer, HeaderCenter, HeaderLeft, HeaderRight } from './styles'
import { useDispatch } from 'react-redux';
import { SET_TRACK } from '../../features/TrackSlice';


export default function Header() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SET_TRACK('Probando'))
  }, [])
  
  return (
    <HeaderContainer>
        <HeaderLeft>
          <img src="../../album.jpg" alt="" />
          <div>
            <h4>Shape of me heart</h4>
            <p>Sting</p>
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
