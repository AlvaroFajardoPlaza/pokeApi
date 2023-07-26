//En este archivo mantendremos las distintas llamadas a la PokeApi
import React from "react";
import { useState } from "react";
import axios from "axios";

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
    //console.log(data);
    return data
    
  } catch(error){
    console.log('Parece que ha habido un error: ', error)
  }
};

