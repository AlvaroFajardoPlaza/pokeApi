import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

import { Grid, Box, Card, CardActions, CardContent, CardMedia, Button, Typography, CircularProgress } from '@mui/material';


const PokeList = () => {

  const [ offset, setOffset ] = useState(0)
  const [ pokemonData, setPokemonData ] = useState([])
  const [ globalPokemon, setGlobalPokemon] = useState([])

  //ESTADOS SIMPLES DENTRO DE NUESTRA POKÉDEX
  const [ active, setActive ] = useState(false)

  //Esta función nos devuelve los primeros 40 Pokemon
  const getPokeData = async (limit = 40 ) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      //console.log('la PokeData: ', data.results);

      const promises = data.results.map( async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = res.json()
        return data
      })

      const pokeResults = await Promise.all(promises)
      //console.log('Esta es la data bien recibida de los pokemon: ', pokeResults);

      //Aquí tenemos que considerar la lógica del botón "CARGAR MÁS"
      setPokemonData(pokeResults)
      return
    } catch(error){
      console.log(error)
    }
  };

  //Esta función guarda la lógica para cargar más pokemon: -------------------
  // const LoadMoreButton = () => {
  //   const [data, setData] = useState([]);
  //   const [page, setPage] = useState(1);
  
  //   // Esta función realiza la solicitud a la API para obtener más datos
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?page=${page}`);
  //       setData((prevData) => [...prevData, ...response.data]); // Agregamos los nuevos datos al estado anterior
  //     } catch (error) {
  //       console.error('Error al obtener datos:', error);
  //     }
  //   }
  // };
  

  //Creamos una función que nos devuelva todos los pokemon de la API
  const globalData = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0`);
      //console.log('Toda la data es: ', data.results);

      const promises = data.results.map( async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = res.json()
        return data
      })

      const globalResults = await Promise.all(promises)
      //console.log('Data global: ', globalResults);

      setGlobalPokemon(globalResults);
      return

    } catch(error){
      console.log('Este es el error: ', error)
    }
  };

  //Función que nos devuelve la info de un pokemon conforme a su ID: ---------------
  const getPokeByID = async (id) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      console.log(data);
      return data
      
    } catch(error){
      console.log('Parece que ha habido un error: ', error)
    }
  };


  //1º UseEffect para llamar a los primeros 40 pokemon ------------------
  useEffect(() => {
    getPokeData()
    console.log('Recibimos datos 40 pokemon: ', pokemonData);
  }, []);

  //2º UseEffect para llamar a todos los pokemon ------------------------------------
  useEffect( () => {
    globalData()
    console.log('Global: ', globalPokemon);
  }, []);

  // const handleCargarMas = () => {
  //   setPage((prevPage) => prevPage + 1); //Incrementamos el valor de las páginas en 1
  // }

  return (
    <>
    <Grid container spacing={2}>
      { pokemonData.length > 0 ? pokemonData.map( pokemon => {
        return(
          <Grid item xs={12} sm={6} md={3} key={pokemon.name}>
            <Card sx={{bgcolor:'#606060' ,border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 15px 3px rgba(175,175,175,0.3)'}}>
              <CardContent>

                {/* POKENAME Y POKEORDER */}
                <Box sx={{display: 'flex', justifyContent:'flex-start', alignItems:'center'}}>
                  <Box sx={{display:'inline-flex', gap:'1rem'}}>
                    <Typography variant='h3' sx={{color:'#858585', fontSize:'2rem', fontWeight:'900'}}>
                      {pokemon.order}
                    </Typography>

                    <Typography variant='h6' sx={{color:'#f5f5f5', textTransform:'capitalize'}}>
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
      ) : (<CircularProgress color='secondary' sx={{marginTop:'8rem'}} />)
      }
    </Grid>

    <Button 
      variant='contained' 
      sx={{marginTop:'2rem', marginBottom:'5rem'}}
      //onClick={handleCargarMas()}> 
        >Cargar más
    </Button>
  </>
  )
};

export default PokeList