import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useNavigate } from 'react-router-dom';

//APISERVICE 
import { get40Pokemon, globalData, getPokeByName } from '../../pokeApiCalls/apiService';

//MATERIAL UI & ASSETS
import { Grid, Box, Card, CardActions, CardContent, CardMedia, Button, Typography, CircularProgress } from '@mui/material';
import Loader from '../Loader/Loader';
import TypeFilter from '../Filters/TypeFilter';


const PokeList = () => {

  //Creamos el hook que nos permita navegar a cada PokeCard
  const navigate = useNavigate();

  const [ offset, setOffset ] = useState(0)
  const [ pokemonData, setPokemonData ] = useState([])
  //const [ globalPokemon, setGlobalPokemon] = useState([])
  const [ hasMore, setHasMore ] = useState(true)

  //ESTADOS SIMPLES DENTRO DE NUESTRA POKÉDEX
  const [ selectedType, setSelectedType ] = useState(null)


  //1º UseEffect para llamar a los primeros 40 pokemon ------------------
  useEffect(() => {
    get40Pokemon()
      .then( data => {
        console.log('Recibimos datos 40 pokemon: ', data)
        setPokemonData(data)
        setOffset(40)
      })
      .catch( error => console.log('Ha habido un error ', error))  
  }, []);

  //FUNCIÓN PARA LLAMAR A LOS 40 POKEMON SIGUIENTE A TRAVES DEL INFINITE SCROLL --------
  const fetchMorePokemon = async( limit = 40) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

      const promises = data.results.map( async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = res.json()
        return data
      })
      const pokeResults = await Promise.all(promises)
      setTimeout(() => {
        setPokemonData(pokemonData.concat(pokeResults))
        setOffset(offset + 40)
      }, 500)

    } catch(error) {
        console.log(error)
    }
  };

  //FUNCIÓN PARA FILTRAR LOS POKEMON POR TIPO:
  const filteredPokemonByType = (type) => {
    if ( type === selectedType) {
      setSelectedType(null) //Si el botoón ya ha sido pulsado, vuelve al estado null.
    } else {
      setSelectedType(type);
  }};

  console.log('Este es el tipo seleccionado: ', selectedType);

  //Ahora necesitamos la función que nos filtra la lista de pokemon según si el filtro ha sido seleccionado o no.
  const filteredPokemonList = selectedType
    ? pokemonData.filter( (pokemon) => {
       pokemon.types.some((type) => type.type.name == selectedType )
    })
      .then( () => setPokemonData(filteredPokemonList))
      .catch( error => console.log(error)) : pokemonData ;

  console.log('Tenemos la lista filtrada: ',filteredPokemonList);


  return (
    <>
    <TypeFilter onSelectedType={filteredPokemonByType} />

    <InfiniteScroll 
      dataLength={pokemonData.length}
      next={fetchMorePokemon}
      hasMore={hasMore}
      //loader={<Typography variant='h5' sx={{fontWeight:'800', textAlign:'center', marginTop:'2rem', marginBottom:'4rem'}}>Loading more Pokemon...</Typography>}
      endMessage={<Typography variant='h5' sx={{fontWeight:'800', textAlign:'center', marginTop:'2rem', marginBottom:'4rem'}}>Loading more Pokemon...</Typography>}
      >
    <Grid container spacing={2} sx={{p:'2rem'}}>
      { pokemonData.length > 0 ? pokemonData.map( pokemon => {
        return(
          <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
            <Card className='cardContainer'
              sx={{bgcolor:'#252525', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 10px 3px rgba(175,175,175,0.3)', minHeight:'300px'}}
              onClick={ () => {
                getPokeByName(pokemon.name)
                  .then(navigate(`/${pokemon.name}`))
                  .catch(error => console.log(error))
              }}
            >
              
              <CardContent>

                {/* POKENAME Y POKEORDER */}
                <Box sx={{display: 'flex', justifyContent:'flex-start', alignItems:'center', gap:'1rem'}}>

                  <Box sx={{display:'flex', flexDirection:'row', justifyContent:'left', gap:'0.75rem', width:'100%'}}>
                    <Typography variant='h3' sx={{color:'#e3e3e366', fontSize:'2rem', fontWeight:'900', textAlign:'left'}}>
                      N.{pokemon.order}
                    </Typography>

                    <Typography variant='h6' sx={{color:'#f5f5f5', textTransform:'capitalize', fontSize:'1.2rem', fontWeight:'800'}}>
                      {pokemon.name}
                    </Typography>
                  </Box>
                </Box>

                {/* POKEIMAGE --- SPRITE VII GENERATION FRONT.DEFAULT */}
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img className='pokeSprite' src={pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default || pokemon.sprites.front_default}></img>
                </Box>

                {/* POKETYPE ---- */}
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'0.5rem'}}>
                {pokemon.types.length > 0 ? pokemon.types.map( (type) => {
                    return (
                        <Box key={type.type.name} sx={{bgcolor:'#252525', border: '1px solid #eaeaea50', borderRadius:'5rem', padding:'1rem', boxShadow:'1px 1px 10px 3px rgba(60, 60, 60,0.8)'}}>
                          <Typography variant='body1' sx={{color:'#ffffff',textTransform:'uppercase', fontSize:'0.85rem', letterSpacing:'0.1rem', textAlign:'center'}}>
                            {type.type.name}
                          </Typography>
                        </Box>
                    )
                }): <Loader />}
                </Box>

              </CardContent>
            </Card>
          </Grid>
        )
      } 
      ) : (<Loader />)
      }
    </Grid>
    </InfiniteScroll>
  </>
  )
};

export default PokeList 