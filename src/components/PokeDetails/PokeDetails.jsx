import React from 'react';
import NavBar from '../NavBar/NavBar';

import { Typography, Box } from '@mui/material'

const PokeDetails = () => {
  return (
    <>
        <NavBar />
        
        <Typography>Esto serían los detalles de un pokemon concreto al que accedemos por slug
        </Typography>
    </>
  )
}

export default PokeDetails