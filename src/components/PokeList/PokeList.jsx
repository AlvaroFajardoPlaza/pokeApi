import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

//APISERVICE 
import { get40Pokemon, globalData, getPokeByName } from '../../pokeApiCalls/apiService';

//MATERIAL UI & ASSETS
import { Grid, Box, Card, CardActions, CardContent, CardMedia, Button, Typography, CircularProgress } from '@mui/material';
import pokeWall from '../../assets/pokeball.png';


const PokeList = () => {

  //Creamos el hook que nos permita navegar a cada PokeCard
  const navigate = useNavigate();

  const [ offset, setOffset ] = useState(0)
  const [ pokemonData, setPokemonData ] = useState([])
  const [ globalPokemon, setGlobalPokemon] = useState([])

  //ESTADOS SIMPLES DENTRO DE NUESTRA POKÉDEX
  const [ active, setActive ] = useState(false)


  //1º UseEffect para llamar a los primeros 40 pokemon ------------------
  useEffect(() => {
    get40Pokemon()
      .then( data => {
        console.log('Recibimos datos 40 pokemon: ', data)
        setPokemonData(data)
      })
      .catch( error => console.log('Ha habido un error ', error))  
  }, []);

  // 2º UseEffect para llamar a todos los pokemon ------------------------------------
  // useEffect( () => {
  //   globalData()
  //   console.log('Global: ', globalPokemon);
  // }, []);


  const loadingPokeData = () => {
    return (
      <>
        <CircularProgress color='secondary' sx={{marginTop:'8rem'}} />
      </>
    )
  };

  return (
    <>
    <Grid container spacing={2}>
      { pokemonData.length > 0 ? pokemonData.map( pokemon => {
        return(
          <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
            <Card className='cardContainer'
              sx={{bgcolor:'#505050', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 10px 3px rgba(175,175,175,0.3)'}}
              onClick={ () => {
                getPokeByName(pokemon.name)
                  .then(navigate(`/${pokemon.name}`))
                  .catch(error => console.log(error))
              }}
            >
              
              <CardContent>

                {/* POKENAME Y POKEORDER */}
                <Box sx={{display: 'flex', justifyContent:'flex-start', alignItems:'center'}}>

                  <Box sx={{display:'flex', flexDirection:'row', justifyContent:'left', gap:'0.75rem', width:'100%'}}>
                    <Typography variant='h3' sx={{color:'#e3e3e366', fontSize:'2.3rem', fontWeight:'900', textAlign:'left'}}>
                      {pokemon.order}
                    </Typography>

                    <Typography variant='h6' sx={{color:'#f5f5f5', textTransform:'capitalize', fontSize:'1.4rem', fontWeight:'800'}}>
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
      ) : (loadingPokeData())
      }
    </Grid>
  </>
  )
};

export default PokeList