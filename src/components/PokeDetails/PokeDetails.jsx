import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { getPokeByName } from '../../pokeApiCalls/apiService';

import { Typography, Box, CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom';

const PokeDetails = () => {

  const [ loading, setLoading ] = useState(true)
  const [ pokeData, setPokeData ] = useState({});

  const pokemonName = useParams().slug

  const fetchPokemon = async(pokemonName) => {
    const res = await getPokeByName(pokemonName)
    setPokeData(res)
    setLoading(false)
  };


  //hook que pide la info al cargar la página.
  useEffect( () => {
     fetchPokemon(pokemonName)
  }, [])

  console.log('Tenemos bien recibida la PokeData???', pokeData);

  return (
    <>
        <NavBar />

        <Box className='pokeDetailsWall' sx={{display:'flex', justifyContent:'center', alignItems:'center', bgcolor:'#000000',}}>
    
        <Box className='triWall' sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Box className='boxPokeCardDetail' sx={{minWidth:'40%', bgcolor:'#262626E6', marginTop:'6rem', marginBottom:'6rem', p:'2rem', minHeight:'100vh', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 15px 3px rgba(175,175,175,0.3)'}}>            
                { loading ? (<CircularProgress color='secondary' sx={{marginTop:'8rem'}} />
                ) : (
                <>
                 <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  
                  {/* POKE NAME & ORDER */}
                  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'0.75rem' }}>
                    <Typography variant='h4' sx={{fontWeight:'900', color:'#e6e6e600', textTransform:'capitalize', fontSize:'3.5rem', letterSpacing:'-0.1rem', WebkitTextStroke:'1px #d1d1d1'}}>
                      {pokeData.order}.
                    </Typography>
                    <Typography variant='h4' sx={{fontWeight:'800', color:'#ffffff', textTransform:'capitalize'}}>
                      {pokeData.name}
                    </Typography>
                  </Box>

                  {/* POKE IMAGE */}
                  <img className='pokeImg' src={pokeData.sprites.front_default}></img>

                  {/* POKE TYPES */}
                  <Box key={pokeData.id} sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
                    {pokeData.types.map( type => {
                      switch (type.type.name) {
                        case "fire":
                            return (<Box sx={{bgcolor:'#D50404', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                              <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                {type.type.name}
                              </Typography>
                              </Box>)
                          break;
                        case "water":
                            return (<Box sx={{bgcolor:'#0489D5', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)' }}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                            break;
                        case "grass":
                            return (<Box sx={{bgcolor:'#139C21', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "normal":
                            return (<Box sx={{bgcolor:'#C9C9C9', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "poison":
                            return (<Box sx={{bgcolor:'#68139C', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "electric":
                            return (<Box sx={{bgcolor:'#FEFE23', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "ground":
                            return (<Box sx={{bgcolor:'#C28408', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "rock":
                            return (<Box sx={{bgcolor:'#765D2C', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "ice":
                            return (<Box sx={{bgcolor:'#9EFDF3', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "steel":
                          return (<Box sx={{bgcolor:'#909090', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                          break;
                      case "fairy":
                          return (<Box sx={{bgcolor:'#FCAAEC', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                          break;
                      case "ghost":
                          return (<Box sx={{bgcolor:'#443B49', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                          break; 
                      case "dark":
                          return (<Box sx={{bgcolor:'#300B16', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                          break;
                      case "fighting":
                          return (<Box sx={{bgcolor:'#973009', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                          break;
                      case "psychic":
                          return (<Box sx={{bgcolor:'#EA57AC', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                  {type.type.name}
                                </Typography>
                                </Box>)
                          break;
                        case "flying":
                            return (<Box sx={{bgcolor:'#8EC6DE', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "bug":
                            return (<Box sx={{bgcolor:'#A2D638', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#353535',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                        case "dragon":
                            return (<Box sx={{bgcolor:'#252A7C', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                                  <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem'}}>
                                    {type.type.name}
                                  </Typography>
                                  </Box>)
                            break;
                      }
                    })}
                  </Box>

                  {/* WEIGHT & HEIGHT */}
                  <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center', gap:'2rem', marginTop: '2rem', color:'#e3e3e3'}}>
                    <Typography variant='body1'>Weight: {pokeData.weight}</Typography>
                    <Typography variant='body1'>Height: {pokeData.height}</Typography>
                  </Box>

                  <Box sx={{display:'flex', gap:'2rem'}}>
                    {/* HABILITIES */}
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'left', alignItems:'left', gap:'1rem', marginTop:'2rem', bgcolor:'#e3e3e3', borderRadius:'1rem', padding:'1rem', }}>
                      <Typography>Possible abilities of {pokeData.name}:</Typography>
                    
                    {pokeData.abilities.map( ability => (
                        <Typography variant='body1' sx={{textTransform:'capitalize', fontWeight:'600'}}>
                          {ability.ability.name}
                        </Typography>
                      ))}
                    </Box>

                    {/* POKE STATS */}
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'left', gap:'1rem', marginTop: '2rem', border: '1px solid #eaeaea', borderRadius:'1rem', padding:'1rem', bgcolor:'#e3e3e3' }}>
                    {pokeData.stats.map( stat => (
                        <Typography variant='body1' sx={{textTransform:'capitalize'}}>
                          {stat.stat.name} : {stat.base_stat}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                  
                 </Box>
                </>
                 )}
                 
            </Box>
            </Box>
        </Box>
    </>
  )
}

export default PokeDetails