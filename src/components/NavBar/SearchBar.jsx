import React, { useEffect } from "react";
import { useState } from "react";
import { getPokeByName, globalData } from "../../pokeApiCalls/apiService";
import axios from "axios";


//MATERIAL UI 
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const navigate = useNavigate()

  const [ allPokes, setAllPokes ] = useState([]); //GUARDAMOS TODO EL LISTADO DE POKES
  const [ pokeQuery, setPokeQuery ] = useState(""); //El valor que le damos a la búsqueda.

  const getPokeSearch = async(event) => {
    //TENEMOS QUE HACER LA LLAMADA DEL POST A LA API DE POKEMON.
    const pokeName = pokeQuery.toLowerCase()
    
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + pokeName)
    //console.log('estamos haciendo la apicall? ', result.data)
    const pokeData = result.data;

    if( pokeData === null ){
      console.log('No hemos encontrado a este pokemon.')
    } else {
      navigate(`/${pokeData.name}`)
      window.location.reload()
      return
    }
  };

  // LLAMAMOS A LOS DATOS DE TODOS LOS POKEMON
  useEffect(()=>{
    globalData()
      .then(
        data => {
          setAllPokes({data})
        }
      )
      .catch(error => console.log('Parece que ha habido un error: ', error))
  }, [])

  return (
    <>
      <TextField
        variant='standard'
        sx={{ bgcolor:'#dedede', borderRadius:'10rem' , padding:'0.6rem', marginRight:'1rem'}}
        className = 'searchPokeInput' 
        type="text" 
        placeholder="Search a pokemon..."
        value={pokeQuery} 
        onChange={(e) => setPokeQuery(e.target.value)} />
      <Button
        variant='contained'
        color='secondary'
        sx={{borderRadius:'10rem', color:'#252525'}} 
        className = 'searchPokeButton'
        type="submit" 
        onClick={(e) => getPokeSearch(e)} >
        Search</Button>
    </>
  )
};

export default SearchBar