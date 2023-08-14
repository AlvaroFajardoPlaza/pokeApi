import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useNavigate } from 'react-router-dom';

//APISERVICE 
import { get40Pokemon, getPokeByName } from '../../pokeApiCalls/apiService';

//MATERIAL UI & ASSETS
import { Grid, Box, Card, CardContent, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Loader from '../Loader/Loader';


const PokeList = () => {

  //Creamos el hook que nos permita navegar a cada PokeCard
  const navigate = useNavigate();

  const [ offset, setOffset ] = useState(0)
  const [ pokemonData, setPokemonData ] = useState([])

  //Estado para el Infinite Scroll
  const [ hasMore, setHasMore ] = useState(true)

  //Estados para el filtrado por tipos
  const [ typeFilter, setTypeFilter ] = useState({
    fire: false, water: false, grass: false, normal: false,  poison: false, electric: false,
    ground: false, rock: false, ice: false, steel: false,  fairy: false, ghost: false,
    dark: false, fighting: false, psychic: false, flying: false,  bug: false, dragon: false,
  });
  const [ filteredList, setFilteredList ] = useState([]);


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

  //FUNCIÓN PARA FILTRAR LOS POKEMON POR TIPO: ------------------------------------------
  const handleCheckbox = (e) => {  
    setTypeFilter({
      ...typeFilter,
      [e.target.value] : e.target.checked
    })

    const selectedType = e.target.value; //******************ATENCION */

    //A partir de este punto tenemos que plantear la condición para el filtrado y almacenar los resultados en el estado filteredList.----
    if(e.target.checked){
      const filteredResults = pokemonData.filter( (pokemon) => pokemon.types.some(typeObj => typeObj.type.name === selectedType) )
      setFilteredList([
        ...filteredList,
        ...filteredResults
      ]);
    } else { //Parte de la condición para implementar la lógica de deselección
        const filteredResults = filteredList.filter( (pokemon) => pokemon.types.some(typeObj => typeObj.type.name !== selectedType))
        setFilteredList([
          ...filteredResults
        ]);
    }
  }

  console.log('Tenemos la lista filtrada?', filteredList);

  return (
    <>

    {/* LÓGICA DEL FILTRADO POR TIPOS */}
    <Box sx={{m:'2rem', p:'2rem', display:'flex-wrap', lineHeight:'2.5rem', justifyContent:'center', alignItems:'center', gap:'1rem', bgcolor:'#dedede', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 10px 3px rgba(175,175,175,0.1)'}}>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='fire' value='fire' />
      <label htmlFor='fire'>fire</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='water' value='water' />
      <label htmlFor='water'>water</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='grass' value='grass' />
      <label htmlFor='grass'>grass</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='normal' value='normal' />
      <label htmlFor='normal'>normal</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='poison' value='poison' />
      <label htmlFor='poison'>poison</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='electric' value='electric' />
      <label htmlFor='electric'>electric</label>

      <input type='checkbox' name='type' onChange={handleCheckbox} id='ground' value='ground' />
      <label htmlFor='ground'>ground</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='rock' value='rock' />
      <label htmlFor='rock'>rock</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='ice' value='ice' />
      <label htmlFor='ice'>ice</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='steel' value='steel' />
      <label htmlFor='steel'>steel</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='fairy' value='fairy' />
      <label htmlFor='fairy'>fairy</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='ghost' value='ghost' />
      <label htmlFor='ghost'>ghost</label>

      <input type='checkbox' name='type' onChange={handleCheckbox} id='dark' value='dark' />
      <label htmlFor='dark'>dark</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='fighting' value='fighting' />
      <label htmlFor='fighting'>fighting</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='psychic' value='psychic' />
      <label htmlFor='psychic'>psychic</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='flying' value='flying' />
      <label htmlFor='flying'>flying</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='bug' value='bug' />
      <label htmlFor='bug'>bug</label>
      <input type='checkbox' name='type' onChange={handleCheckbox} id='dragon' value='dragon' />
      <label htmlFor='dragon'>dragon</label>
    </Box>

    <InfiniteScroll 
      dataLength={pokemonData.length || filteredList.length} //AQUÍ DENTRO TENEMOS QUE INCLUIR LA LÓGICA PARA BIEN PINTAR POKEDATA O FILTERED LIST
      next={fetchMorePokemon}
      hasMore={hasMore}
      //loader={<Typography variant='h5' sx={{fontWeight:'800', textAlign:'center', marginTop:'2rem', marginBottom:'4rem'}}>Loading more Pokemon...</Typography>}
      endMessage={<Typography variant='h5' sx={{fontWeight:'800', textAlign:'center', marginTop:'2rem', marginBottom:'4rem'}}>Loading more Pokemon...</Typography>}
      >
    <Grid container spacing={2} sx={{p:'2rem'}}>
       {/* AQUÍ EMPEZARÍA LA CONDICÓN; */}
      { filteredList.length > 0 ?
          filteredList.map( pokemon => {
            return(
              <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
                <Card className='cardContainer'
                  sx={{bgcolor:'#252525', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 10px 3px rgba(175,175,175,0.3)', minHeight:'300px'}}
                  onClick={ () => {
                    getPokeByName(pokemon.name)
                      .then(() => navigate(`/${pokemon.name}`))
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
                      <img className='pokeSprite' src={pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default || pokemon.sprites.front_default }></img>
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
          })
        : pokemonData.length > 0 ?
          pokemonData.map( pokemon => {
            return(
              <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
                <Card className='cardContainer'
                  sx={{bgcolor:'#252525', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 10px 3px rgba(175,175,175,0.3)', minHeight:'300px'}}
                  onClick={ () => {
                    getPokeByName(pokemon.name)
                      .then(() => navigate(`/${pokemon.name}`))
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
          })
      :
        (<Loader />)
      }
    </Grid>
    </InfiniteScroll>
  </>
  )
};

export default PokeList;




{/* <FormGroup sx={{p:'2rem', m:'2rem', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', bgcolor:'#dedede', border:'1px solid #858585', borderRadius:'1rem', boxShadow:'2px 2px 10px 3px rgba(175,175,175,0.1)', }}>
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="fire" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="water" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="grass" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="normal" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="poison" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="electric" />

      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="ground" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="rock" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="ice" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="steel" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="fairy" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="ghost" />

      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="dark" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="fighting" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="psychic" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="flying" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="bug" />
      <FormControlLabel control={<Checkbox onChange={handleCheckbox}/>} label="dragon" />
      </FormGroup> */}
