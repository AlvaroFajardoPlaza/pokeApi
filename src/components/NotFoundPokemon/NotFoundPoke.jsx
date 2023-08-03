import React from 'react';
import NavBar from '../NavBar/NavBar';


import { Box, Typography } from '@mui/material';
import Footer from '../Footer/Footer';

const NotFoundPoke = () => {
  return (
    <>
        <NavBar></NavBar>

        <Box sx={{display:'flex', justifyContent:'center', alignContent:'center', bgcolor:'#151515'}}>
            <Typography variant='h6' sx={{color:'#dedede'}}>Looks like we could not find this pokemon!</Typography>
        </Box>

        <Footer />
    </>
  )
}

export default NotFoundPoke