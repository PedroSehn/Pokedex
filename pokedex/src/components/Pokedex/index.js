import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
import Loading from '../Loading';
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

  window.onscroll = () => {
    if(!fetching) {
      const { scrollHeight, scrollTop, clientHeight } =
      document.documentElement;

      if (scrollHeight - scrollTop - 100 <= clientHeight) {
        loadMorePokemon();
      }
    }
   
  }
  return(
  <div className='Pokedex'>
    { fetching ? <div> </div> : fillPokedex() }
    { loadMore &&  <Loading classe='loadMore'/> }
  </div>)
}

export default Pokedex;