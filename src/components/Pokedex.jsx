import React from 'react'

import PokeList from './PokeList/PokeList';

import { Typography, Box, Button } from '@mui/material'
import NavBar from './NavBar/NavBar'


const Pokedex = () => {
  return (
    <>
        <NavBar></NavBar>

        <Typography variant='h2' sx={{ color:'white', paddingTop:'7rem', textAlign:'center', bgcolor:'#212121', fontWeight:'900', fontSize:'2rem'}}>
            Welcome to the National Pokedex!
        </Typography>

        <Typography variant='h2' sx={{ color:'#dedede', paddingTop:'2rem', paddingBottom:'2rem', textAlign:'center', bgcolor:'#212121', fontWeight:'600', fontSize:'1.2rem'}}>
            Scroll down or go search for an specific Pokemon. You can also filter all Pokemon based on their types.
        </Typography>

        <Box className='pokeApiContainer' sx={{display:'flex', justifyContent:'center', alignItems:'center', bgcolor:'#212121',}}>
            <Box sx={{minHeight:'100vh', maxWidth:'85%'}}>            
                <PokeList />
            </Box>
        </Box>
    </>
  )
}

export default Pokedex