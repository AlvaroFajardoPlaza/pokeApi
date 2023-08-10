import React from 'react';
import './typeFilter.css';
import { useState } from 'react';

//METRIAL UI
import { Box, Button } from '@mui/material';

const TypeFilter = ( {onSelectedType} ) => {
  return (
    <>
        <Box sx={{paddingLeft:'6rem', paddingRight:'6rem', paddingBottom:'2rem', bgcolor:'#212121', display:'flex-start', justifyContent:'space-evenly' }}>

            {/* INTRODUCIMOS LA LÓGICA DE LOS 18 TIPOS */}
            <Button
            onClick={() => onSelectedType('fire')}
            sx={{m:'0.3rem',bgcolor:'#D50404', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>FIRE</Button>

            <Button
            onClick={() => onSelectedType('water') }
            sx={{m:'0.3rem', bgcolor:'#0489D5', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>WATER</Button>

            <Button
            onClick={() => onSelectedType('grass')}
            sx={{m:'0.3rem', bgcolor:'#139C21', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>GRASS</Button>

            <Button
            onClick={() => onSelectedType('normal')}
            sx={{m:'0.3rem', bgcolor:'#C9C9C9', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>NORMAL</Button>

            <Button
            onClick={() => onSelectedType('poison')}
            sx={{m:'0.3rem', bgcolor:'#68139C', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>POISON</Button>

            <Button
            onClick={() => onSelectedType('electric')}
            sx={{m:'0.3rem', bgcolor:'#FEFE23', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>ELECTRIC</Button>





            <Button
            onClick={() => onSelectedType('ground')}
             sx={{m:'0.3rem', bgcolor:'#C28408', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>GROUND</Button>

            <Button
            onClick={() => onSelectedType('rock')}
             sx={{m:'0.3rem', bgcolor:'#765D2C', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>ROCK</Button>

            <Button
            onClick={() => onSelectedType('ice')}
             sx={{m:'0.3rem', bgcolor:'#9EFDF3', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>ICE</Button>

            <Button
            onClick={() => onSelectedType('steel')}
             sx={{m:'0.3rem', bgcolor:'#909090', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>STEEL</Button>

            <Button
            onClick={() => onSelectedType('fairy')}
             sx={{m:'0.3rem', bgcolor:'#FCAAEC', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>FAIRY</Button>

            <Button
            onClick={() => onSelectedType('ghost')}
             sx={{m:'0.3rem', bgcolor:'#443B49', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>GHOST</Button>





            <Button
            onClick={ () => onSelectedType('dark')}
            sx={{m:'0.3rem', bgcolor:'#300B16', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>dark</Button>

            <Button
            onClick={ () => onSelectedType('fighting')}
            sx={{m:'0.3rem', bgcolor:'#973009', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>fighting</Button>

            <Button
            onClick={ () => onSelectedType('psychic')} 
            sx={{m:'0.3rem', bgcolor:'#EA57AC', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>psychic</Button>

            <Button
            onClick={ () => onSelectedType('flying')} 
            sx={{m:'0.3rem', bgcolor:'#8EC6DE', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>flying</Button>

            <Button
            onClick={ () => onSelectedType('bug')} 
            sx={{m:'0.3rem', bgcolor:'#A2D638', color:'#353535', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>bug</Button>

            <Button
            onClick={ () => onSelectedType('dragon')} 
            sx={{m:'0.3rem', bgcolor:'#252A7C', color:'#ffffff', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)', textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>dragon</Button>


        </Box>
    </>
  )
}

export default TypeFilter