import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
import Pokemon from '../Pokemon';

import './style.scss'

const Pokedex = () => {
  const { pokemons, fetching, loadMore, loadMorePokemon  } = useContext(AppContext);
  
  const fillPokedex = () => {
    if(pokemons.length > 30)return (
        pokemons.map((pokemon, index) => {
            return <Pokemon pokemon={pokemon} key={`${index}`}/>
          })
      )
  };

  return(
  <div className='Pokedex'>
    { fetching ? <div> </div> : fillPokedex() }
    { loadMore ?  <div> loading more pokemon </div> : <button onClick={loadMorePokemon}> Load More </button>}
  </div>)
}

export default Pokedex;