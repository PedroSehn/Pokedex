import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
import Pokemon from '../Pokemon';

import './style.scss'

const Pokedex = () => {
  const { pokemons } = useContext(AppContext);
  const fillPokedex = () => {
    return (
      pokemons[0].map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} key={`${index}`}/>
      })
    )
  };

  return(
  <div className='Pokedex'>
    { fillPokedex() }
  </div>)
}

export default Pokedex;