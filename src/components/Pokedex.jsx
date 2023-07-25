import React from 'react'

import PokeList from './PokeList/PokeList';

import { Typography, Box } from '@mui/material'
import NavBar from './NavBar/NavBar'

const Pokedex = () => {
  return (
    <>
        <NavBar></NavBar>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', bgcolor:'#242424', margin: '0', padding: '0'}}>
            <Box className='mainContainer' sx={{marginTop:'5rem', minHeight:'100vh', maxWidth:'85%'}}>            
                <PokeList />
            </Box>
        </Box>
    </>
  )
}

export default Pokedex