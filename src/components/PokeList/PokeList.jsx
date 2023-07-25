import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

import { Grid, Box, Card, CardActions, CardContent, CardMedia, Button, Typography, CircularProgress } from '@mui/material';


const PokeList = () => {

  const [ offset, setOffset ] = useState(0)
  const [ pokemonData, setPokemonData ] = useState({})

  const getPokeData = async (limit = 40 ) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      console.log('la PokeData: ', data.results);

      const promises = data.results.map( async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = res.json()
        return data
      })

      const pokeResults = await Promise.all(promises)
      console.log('Esta es la data bien recibida de los pokemon: ', pokeResults);

      setPokemonData(pokeResults)
      return
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getPokeData()
    console.log('Recibimos los datos: ', pokemonData);
  }, [])

  return (
    <>
    <Grid container spacing={2}>
      { pokemonData.length > 0 ? pokemonData.map( pokemon => {
        return(
          <Grid item xs={12} sm={6} md={3} key={pokemon.name}>
            <Card sx={{border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 15px 3px rgba(175,175,175,0.3)'}}>
              <CardContent>

                {/* POKENAME Y POKEORDER */}
                <Box sx={{display: 'flex', justifyContent:'flex-start', alignItems:'center'}}>
                  <Box sx={{display:'inline-flex', gap:'1rem'}}>
                    <Typography variant='h3' sx={{color:'#858585', fontSize:'2.4rem', fontWeight:'800'}}>
                      {pokemon.order}
                    </Typography>

                    <Typography variant='h6'>
                      {pokemon.name}
                    </Typography>
                  </Box>
                </Box>

                {/* POKEIMAGE --- SPRITE FRONT.DEFAULT */}
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img className='pokeSprite' src={pokemon.sprites.front_default}></img>
                </Box>

                {/* POKETYPES */}
                {/* <Box>
                  {pokemon.type.map( pokemonType => {
                    return(
                      <Typography>{pokemon.type.name}</Typography>
                    )
                  })}
                </Box> */}


              </CardContent>
            </Card>
          </Grid>
        )
      } 
      ) : (<CircularProgress color='secondary' />)
      }
    </Grid>
  </>
  )
};

export default PokeList