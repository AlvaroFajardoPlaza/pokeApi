import React, { useEffect } from "react";
import axios from "axios";
import '../NavBar/styles.css';
import { useState } from "react";
import { getPokeByName, globalData } from "../../pokeApiCalls/apiService";



//MATERIAL UI 
import { Box, Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const navigate = useNavigate()

  const [ allPokes, setAllPokes ] = useState([]); //GUARDAMOS TODO EL LISTADO DE POKES
  const [ pokeQuery, setPokeQuery ] = useState(""); //El valor que le damos a la búsqueda.


  //TO DO -- EMPLEO DE LA FUNCIÓN GETPOKEBYNAME DE LA APISERVICE
  const getPokeSearch = async(event) => {
    //TENEMOS QUE HACER LA LLAMADA DEL POST A LA API DE POKEMON.
    const pokeName = pokeQuery.toLowerCase()
    
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + pokeName)
    //console.log('estamos haciendo la apicall? ', result.data)
    const pokeData = result.data;

    if( pokeData === null ){
      console.log(error)
      return
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
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <TextField
        variant='standard'
        sx={{bgcolor:'#ffffff', borderRadius:'10rem', paddingLeft:'1rem', paddingRight:'0.8rem', paddingTop:'0.25rem', paddingBottom:'0.25rem', marginRight:'1rem', border:'1px solid #dedede'}}
        className = 'searchPokeInput' 
        type="text" 
        placeholder="Search a pokemon..."
        value={pokeQuery} 
        onChange={(e) => setPokeQuery(e.target.value)} />

      {/* TO DO ---- IMPLEMEMTAR KEY UP PARA DARLE ENTER Y EJECUTAR BOTÓN SUBMIT: */}
      <Button
        variant='contained'
        color='secondary'
        sx={{ borderRadius:'10rem', color:'#252525', padding:'0.3, 1, 0.3, 1rem', letterSpacing:'0.15rem', border:'1px solid #dedede'}} 
        className = 'searchPokeButton'
        type="submit" 
        onClick={(e) => getPokeSearch(e)} >
        Search</Button>
      </Box>
    </>
  )
};

export default SearchBar