//En este archivo mantendremos las distintas llamadas a la PokeApi
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const pokeApi = 'https://pokeapi.co/api/v2/';

//1º LLAMADA A LOS PRIMEROS 40 POKEMON:
export const get40Pokemon = async (limit = 40 ) => {
  try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      //console.log('la PokeData: ', data.results);

      const promises = data.results.map( async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = res.json()
        return data
      })
      const pokeResults = await Promise.all(promises)
      console.log('Esta es la data bien recibida de los pokemon: ', pokeResults);

      return pokeResults

  } catch(error){
      console.log(error)
  }
};

//LLAMADA A LOS DATOS DE 1 POKEMON --- POKEDETAILS
export const getPokeByName = async(pokename) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
    console.log(data);
    return data
    
  } catch(error){
    console.log('Parece que ha habido un error: ', error)
  }
};



//GET ALL THE 1400 POKEMON!
 export const globalData = async () => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1600&offset=0`);
    console.log('Toda la data es: ', data.results);

    const promises = data.results.map( async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })

    const globalResults = await Promise.all(promises)
    console.log('Data global: ', globalResults);
    return globalResults

  } catch(error){
    console.log('Este es el error: ', error)
  }
};

