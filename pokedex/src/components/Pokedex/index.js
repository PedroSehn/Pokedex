import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
import Pokemon from '../Pokemon';
import { retrunAllPokemons } from '../../services';

import './style.scss'

const Pokedex = () => {
  const { pokemons, SetPokemons,highestId, SetHighestId, SetFetching, fetching, generatePokemons } = useContext(AppContext);
  
  const fillPokedex = () => {
    return (
      pokemons.map((pokemon) => {
        return pokemon.map((pokemon, index) => {
          return <Pokemon pokemon={pokemon} key={`${index}`}/>
        })
      })
    )
  };

  const fetchPokemonData = async () => {
    SetFetching(true)
    console.log(generatePokemons)
    const newArray = [];
    const InfoArray = await retrunAllPokemons(highestId)
    newArray.push(...pokemons ,...InfoArray.array)
    SetPokemons(newArray);
    SetHighestId(InfoArray.newId);
    SetFetching(false);
  }

  return(
  <div className='Pokedex'>
    { fetching ? <div> </div> : fillPokedex() }
    <button onClick={fetchPokemonData}> Load More </button>
  </div>)
}

export default Pokedex;