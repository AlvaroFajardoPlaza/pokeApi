import React from 'react';
import './styles.css';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { getPokeByName , getPokeById} from '../../pokeApiCalls/apiService';

import { Typography, Box, CircularProgress, Button } from '@mui/material'
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import alienWink from '../../assets/alienWink1.json';

const PokeDetails = () => {

  const [ loading, setLoading ] = useState(true)
  const [ pokeData, setPokeData ] = useState({});

  const pokemonName = useParams().slug

  const fetchPokemon = async(pokemonName) => {
    const res = await getPokeByName(pokemonName)
    setPokeData(res)
    setLoading(false)
  };

  //hook que pide la info del pokemon por nombre al cargar la página.
  useEffect( () => {
     fetchPokemon(pokemonName)
  }, [])

  console.log('Esta es la pokeData: ', pokeData);


  const pokeId = pokeData.id

  //funcion que pide la info por order: TENEMOS QUE CREAR UNA NUEVA FUNCIÓN QUE OPERE A TRAVÉS DE LOS ORDERS (variable tipo Number).
  const fetchPokemonByOrder = async (pokeId) => {
    setLoading(true);
    try {
      const res = await getPokeById(pokeId);
      setPokeData(res);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching Pokémon:', error);
      setLoading(false);
    }
  };

  const getPreviousPoke = async () => {
    const previousPokeId = pokeData.id - 1;
    await fetchPokemonByOrder(previousPokeId);
  };

  const getNextPoke = async () => {
    const nextPokeId = pokeData.id + 1;
    await fetchPokemonByOrder(nextPokeId);
  };

  return (
    <>
        <NavBar />

        <Box className='pokeDetailsWall' sx={{display:'flex', justifyContent:'center', alignItems:'center', bgcolor:'#000000',}}>
    
        <Box className='triWall' sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

          

            <Box className='boxPokeCardDetail' sx={{minWidth:'40%', bgcolor:'#262626E6', marginTop:'6rem', p:'1rem', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 15px 3px rgba(175,175,175,0.3)', display:'flex', justifyContent:'center', alignItems:'center' }}>      

                {/* <Box className='lottieBack'>
                <Lottie animationData={alienWink} loop={true} />
                </Box> */}
                
                { loading ? (<CircularProgress color='secondary' sx={{marginTop:'15rem', marginBottom:'15rem'}} />
                ) : (
                <>
                 <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', minHeight:'650px'}}>
                  
                  {/* POKE NAME & ORDER */}
                  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'0.75rem' }}>
                    <Typography variant='h4' sx={{fontWeight:'900', color:'#e6e6e600', textTransform:'capitalize', fontSize:'3.5rem', letterSpacing:'-0.1rem', WebkitTextStroke:'1px #d1d1d1'}}>
                      N.{pokeData.order}
                    </Typography>
                    <Typography variant='h4' sx={{fontWeight:'800', color:'#ffffff', textTransform:'capitalize'}}>
                      {pokeData.name}
                    </Typography>
                  </Box>

                  {/* POKE IMAGE */}
                  <img className='pokeImg' src={pokeData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default || pokeData.sprites.front_default}></img>

                  {/* POKE TYPES */}
                  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem', marginTop:'1rem'}}>
                    {pokeData.types.map( type => {
                      switch (type.type.name) {
                        case "fire":
                            return (<Box key={pokeData.name} sx={{bgcolor:'#D50404', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
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
                      <Typography variant='body1'>Weight: <b>{pokeData.weight}</b></Typography>
                      <Typography variant='body1'>Height: <b>{pokeData.height}</b></Typography>
                    </Box>

                    <hr className='horizLine'></hr>


                    {/* HABILITIES */}
                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'left', gap:'1rem', marginTop:'0.8rem', width:'100%', color:'#fdfdfd', fontSize:'1.2rem' }}>
                      
                      <Typography>Possible abilities of {pokeData.name}:</Typography>

                    {pokeData.abilities.map( ability => (
                        <Typography variant='body1' sx={{textTransform:'capitalize', fontWeight:'700', letterSpacing:'0.06rem'}}>
                          {ability.ability.name} //
                        </Typography>
                      ))}
                    </Box>



                    {/* POKE STATS */}
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'left', gap:'1rem', marginTop: '1rem', border: '1px solid #eaeaea50', borderRadius:'1rem', padding:'1rem', bgcolor:'#e3e3e350' }}>
                    {pokeData.stats.map( stat => (
                        <Typography variant='body1' sx={{textTransform:'capitalize'}}>
                          {stat.stat.name} : {stat.base_stat}
                        </Typography>
                      ))}
                    </Box>
                  
                  
                 </Box>
                </>
                 )}
                 
            </Box>
            
            {/* ESTA LÓGICA TIENE QUE VENIR IMPLEMENTADA A TRAVÉS DEL ID DEL POKEMON */}
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem', m:'2rem'}}>
              <Button 
                onClick={() => getPreviousPoke()} 
                variant='contained' 
                color='secondary' 
                sx={{borderRadius:'4rem'}}>Previous</Button>  
              <Button 
                onClick={() => getNextPoke()} 
                variant='contained' 
                color='secondary' 
                sx={{borderRadius:'4rem'}}>Next</Button>        
            </Box>


            </Box>
        </Box>

        <Footer />
    </>
  )
}

export default PokeDetails