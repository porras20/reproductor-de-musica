import { useState } from 'react'
import { NewPlaylistContainer, Icon, OptionPlaylist } from './styles'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField, TextareaAutosize } from '@mui/material';
import Alert from '@mui/joy/Alert';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/TokenSlice';
import axios from 'axios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'grid',
    gap: 2,
    alignItems: 'center',
    borderRadius: '5px',
    border: 'none',
  };
export default function NewPlaylist() {
    const [showOptions, setShowOptions] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const token = useSelector(selectToken)

    const handleShow = () => {
        setShowOptions(!showOptions);
    }

    const validationForm = () => {
        if (name.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        handleSubmit();
        setName('');
        handleClose();
    }

    const handleSubmit = () => {
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        const data = {
          name: name,
          description: description,
          public: true,
        };
        axios
          .post("https://api.spotify.com/v1/me/playlists", data, { headers })
          .then((response) => {
            // console.log(response.data);
          })
          .catch((error) => {
            // console.log(error);
          });
      };
    
  return (
    <NewPlaylistContainer>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    New Playlist
                </Typography>
                {
                error ? 
                <Alert  color="danger">
                   El nombre de la playlists es obligatorio
                </Alert>
                : null
                }
                <TextField 
                    fullWidth 
                    id="outlined-required" 
                    label="Name" 
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <TextareaAutosize
                    maxRows={6}
                    maxLength={100}
                    minRows={6}
                    placeholder="Description"
                    style={{ width: 332 }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
                    <Button sx={{marginRight: '10px'}}  onClick={validationForm} color="primary" variant='contained'  >
                        Guardar
                    </Button>
                    <Button sx={{marginRight: '10px'}} onClick={handleClose} color="error" variant='contained' >
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
        {showOptions ? 
            <OptionPlaylist>
                <p onClick={handleOpen}>Nueva Playlist</p>
            </OptionPlaylist>
        : null
        }
        <Icon onClick={handleShow}> {showOptions ? '-' : '+'} </Icon>
    </NewPlaylistContainer>
  )
}
