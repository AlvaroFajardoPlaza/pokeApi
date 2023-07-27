import React from 'react'

import PokeList from './PokeList/PokeList';

import { Typography, Box, Button } from '@mui/material'
import NavBar from './NavBar/NavBar'

const Pokedex = () => {
  return (
    <>
        <NavBar></NavBar>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', bgcolor:'#242424',}}>
            <Box sx={{marginTop:'6rem', minHeight:'100vh', maxWidth:'85%'}}>            
                <PokeList />
            </Box>
        </Box>

        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'25vh', bgcolor:'#242424'}}>  
          <Button 
                variant='contained' 
                sx={{marginTop:'3rem', marginBottom:'5rem'}}
                //onClick={handleCargarMas()}> 
                >Cargar más
          </Button>
        </Box>
    </>
  )
}

export default Pokedex