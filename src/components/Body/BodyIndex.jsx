import React from 'react'
import { Container, Left, Right } from './styles'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

export default function BodyHeader() {
  return (
    <Container>
        <Left>
        <SearchIcon/>
        <input type="text" placeholder='Busca tu canción'/>
        </Left>
        <Right>
          <Avatar/>
          <h4>Juanjosepo18</h4>
        </Right>
    </Container>
  )
}
