import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
import Pokemon from '../Pokemon';
import { retrunAllPokemons } from '../../services';

import './style.scss'

const Pokedex = () => {
  const { pokemons, SetPokemons,highestId, SetHighestId, SetFetching } = useContext(AppContext);
  
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
    const newArray = [];
    const InfoArray = await retrunAllPokemons(highestId)
    newArray.push(...pokemons ,...InfoArray.array)
    SetPokemons(newArray);
    SetHighestId(InfoArray.newId);
    SetFetching(false);
  }

  return(
  <div className='Pokedex'>
    { fillPokedex() }
    <button onClick={fetchPokemonData}> Load More </button>
  </div>)
}

export default Pokedex;