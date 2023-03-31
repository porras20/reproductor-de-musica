import { PlayCircleOutline, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material'
import ListIcon from '@mui/icons-material/List';
import { Grid, Slider } from '@mui/material'
import React from 'react'
import { HeaderContainer, HeaderCenter, HeaderLeft, HeaderRight } from './styles'


export default function Header() {
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
