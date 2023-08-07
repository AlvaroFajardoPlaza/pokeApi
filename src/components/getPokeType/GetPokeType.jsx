import React from 'react';
import { useState, useEffect } from 'react';
import { getPokeTypes } from '../../pokeApiCalls/apiService';

import { Typography, Box, CircularProgress } from '@mui/material';

const PokeType = (types) => {

    // const [ pokeType, setPokeType ] = useState([]);
    // const [ loading, setLoading ] = useState(true);

    // //Tenemos que definir la función que llama a los pokeTipos.
    // useEffect( () => {
    //     //1º TENEMOS QUE LLAMAR A LA FUNCIÓN QUE LLAMA A LOS POKEMON.
    //     getPokeTypes()
    //         .then( data => {
    //             setPokeType(data)
    //             console.log('Recibimos los tipos? ', pokeType)
    //         })
    //         .catch( error => console.log(error))
    // }, [])

  return (
    <>
     <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem', marginTop:'1rem'}}>
                    { type.length > 0 ? type.map( type => {
                      switch (type.type.name) {
                        case "fire":
                            return (<Box key={type.type.name} sx={{bgcolor:'#D50404', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                              <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                {type.type.name}
                              </Typography>
                              </Box>)
                        case "water":
                            return (<Box sx={{bgcolor:'#0489D5', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)' }}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                        case "grass":
                            return (<Box sx={{bgcolor:'#139C21', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "normal":
                            return (<Box sx={{bgcolor:'#C9C9C9', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "poison":
                            return (<Box sx={{bgcolor:'#68139C', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "electric":
                            return (<Box sx={{bgcolor:'#FEFE23', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "ground":
                            return (<Box sx={{bgcolor:'#C28408', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "rock":
                            return (<Box sx={{bgcolor:'#765D2C', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "ice":
                            return (<Box sx={{bgcolor:'#9EFDF3', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "steel":
                          return (<Box sx={{bgcolor:'#909090', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                      case "fairy":
                          return (<Box sx={{bgcolor:'#FCAAEC', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                      case "ghost":
                          return (<Box sx={{bgcolor:'#443B49', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                      case "dark":
                          return (<Box sx={{bgcolor:'#300B16', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                      case "fighting":
                          return (<Box sx={{bgcolor:'#973009', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                      case "psychic":
                          return (<Box sx={{bgcolor:'#EA57AC', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                        case "flying":
                            return (<Box sx={{bgcolor:'#8EC6DE', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "bug":
                            return (<Box sx={{bgcolor:'#A2D638', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                        case "dragon":
                            return (<Box sx={{bgcolor:'#252A7C', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                      }
                    }) : <CircularProgress color='secondary' sx={{marginTop:'1rem'}} />}
                  </Box>
    </>
  )
}

export default PokeType