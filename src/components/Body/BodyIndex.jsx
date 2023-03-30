import React from 'react'
import { Container, Left, Right } from './styles'
import { Avatar } from '@mui/material';
import { selectUser } from '../../features/UserSlice';
import { useSelector } from 'react-redux';

export default function BodyHeader() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Container>
        <Left>
        <input type="text" placeholder='Busca tu canción'/>
        </Left>
        <Right>
          <Avatar src={user?.images[0].url}/>
          <h4>{user?.display_name}</h4>
        </Right>
    </Container>
  )
}
