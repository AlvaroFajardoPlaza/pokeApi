import React, { useEffect } from "react";
import { useState } from "react";
import { globalData } from "../../pokeApiCalls/apiService";


//MATERIAL UI 
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const navigate = useNavigate()

  const [ search, setSearch ] = useState('')

  const [ allPokes, setAllPokes ] = useState([]); //GUARDAMOS TODO EL LISTADO DE POKES
  const [ query, setQuery ] = useState(''); //El valor que le damos a la búsqueda.


  console.log('AllPokemon', allPokes);
  console.log('Estamos haciendo la búsqueda?', search);

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

  //ERROR: TO DO ---> ARREGLAR LA LOGICA DEL SEARCH //
  const handleSubmit = () => {
  const filteredPokemon = allPokes.filter( pokemon => {
      return pokemon.toLowerCase().includes(query.toLowerCase())
    })
  };


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search a pokemon..."
        value={query} 
        onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
};

export default SearchBar