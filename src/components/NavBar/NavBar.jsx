import React from 'react';
import './styles.css';
import pokedexLogo from '../../assets/pokedexLogo.png';
import SearchBar from './SearchBar';

import { useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';


const NavBar = () => {

  const navigate = useNavigate()

  return (
    <AppBar color='primary' position='fixed'>
        <Toolbar>

            <Box>
            <img className='runningPikachu' src='https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif?resize=480%2C342&ssl=1' />
            </Box>

            <Box>
            <img className='pokedexLogo' src={pokedexLogo} onClick={()=> navigate('/')}/>
            </Box>

            <Box sx={{display: 'flex', justifyContent:'flex-end', width:'100%' }}>
              <SearchBar />
            </Box>
            

        </Toolbar>
    </AppBar>
  )
}

export default NavBar