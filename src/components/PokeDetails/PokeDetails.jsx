import React from 'react';
import NavBar from '../NavBar/NavBar';

import { Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom';

const PokeDetails = () => {

  const pokemonName = useParams().slug

  return (
    <>
        <NavBar />

        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', bgcolor:'#242424',}}>
            <Box className='mainContainer' sx={{minWidth:'70%', bgcolor:'#454545', marginTop:'6rem', marginBottom:'6rem', p:'2rem', minHeight:'100vh', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 15px 3px rgba(175,175,175,0.3)'}}>            
                <Typography variant='body1' sx={{color:'#e3e3e3', textAlign:'center'}}>
                  Traemos los datos del Pokémon al que estás llamando:
                </Typography>

                <Typography variant='h4' sx={{color:'#e3e3e3', textTransform:'capitalize', textAlign:'center', paddingTop:'1rem'}}>
                  {pokemonName}
                </Typography>
            </Box>
        </Box>
    </>
  )
}

export default PokeDetails