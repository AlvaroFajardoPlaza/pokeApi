import React from 'react';
import './typeFilter.css';
import { useState } from 'react';

//METRIAL UI
import { Box, Button } from '@mui/material';

const TypeFilter = () => {
  return (
    <>
        <Box sx={{paddingLeft:'6rem', paddingRight:'6rem', paddingBottom:'2rem', bgcolor:'#212121', display:'flex-start', justifyContent:'space-evenly' }}>

            {/* INTRODUCIMOS LA LÓGICA DE LOS 18 TIPOS */}
            <Button sx={{m:'0.3rem',bgcolor:'#D50404', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>FIRE</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#0489D5', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>WATER</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#139C21', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>GRASS</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#C9C9C9', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>NORMAL</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#68139C', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>POISON</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#FEFE23', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>ELECTRIC</Button>





            <Button sx={{m:'0.3rem', bgcolor:'#C28408', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>GROUND</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#765D2C', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>ROCK</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#9EFDF3', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>ICE</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#909090', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>STEEL</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#FCAAEC', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>FAIRY</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#443B49', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>GHOST</Button>





            <Button sx={{m:'0.3rem', bgcolor:'#C28408', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>GROUND</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#765D2C', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>ROCK</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#9EFDF3', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>ICE</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#909090', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>STEEL</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#FCAAEC', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>FAIRY</Button>

            <Button sx={{m:'0.3rem', bgcolor:'#443B49', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>GHOST</Button>


        </Box>
    </>
  )
}

export default TypeFilter