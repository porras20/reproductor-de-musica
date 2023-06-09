import React, { useState } from 'react'
import { Container, Left, Right } from './styles'
import { Avatar } from '@mui/material';
import { selectUser } from '../../features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SEARCH } from '../../features/SearchSlice';
export default function BodyHeader() {

  const [busqueda, setBusqueda] = useState('');
  const dispatch = useDispatch()
  dispatch(SET_SEARCH(busqueda));

  
  const user = useSelector(selectUser);

  return (
    <Container>
        <Left>
        <input 
          type="text" 
          placeholder='Busca tu canción' 
          onChange={e => setBusqueda(e.target.value)}/>
        </Left>
        <Right>
          <Avatar src={user?.images[0].url}/>
          <h4>{user?.display_name}</h4>
          <p>Seguidores: {user?.followers.total}</p>
        </Right>
    </Container>
  )
}
