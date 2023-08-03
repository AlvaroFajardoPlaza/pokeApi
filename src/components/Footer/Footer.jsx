import React from 'react';
import './styles.css';
import Lottie from 'lottie-react';
import { Box, Typography, Link } from '@mui/material';
import catIcon from '/src/assets/cat-white-300px.png';
import logofj from '/src/assets/logoWhite80px.png';
import alienWink1 from '/src/assets/alienWink1.json';

const Footer = () => {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', bgcolor:'#151515'}}>
        <img src={logofj} alt='fajardo' className='fjLogo'/>
        <Link href="https://alvarofajardo.com/" underline="none" sx={{fontWeight:'800', fontSize:'0.85rem', color:'#ffffff', letterSpacing:'0.08rem'}}>www.alvarofajardo.com</Link>
        <Lottie className='alienWink' animationData={alienWink1} />
    </Box>
    </>
  )
}

export default Footer