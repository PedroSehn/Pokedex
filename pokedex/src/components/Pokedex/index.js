import React, { useContext } from 'react'
import AppContext from "../Context/AppContext";
import Loading from '../Loading';
import Pokemon from '../Pokemon';

import './style.scss'

const Pokedex = () => {
  const { pokemons, fetching, loadMorePokemon, loadMore  } = useContext(AppContext);
  
  const fillPokedex = () => {
    if(pokemons.length > 30)return (
        pokemons.map((pokemon, index) => {
            return <Pokemon pokemon={pokemon} key={`${index}`}/>
          })
      )
  };
/*
  window.onscroll = () => {
    if(!fetching) {
      const fullPageHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const currentScrollPosition = fullPageHeight - scrollTop
      
      if(currentScrollPosition === windowHeight){
        loadMorePokemon()
      }
    }
   
  }
  */


  return(
  <div className='Pokedex'>
    { fetching ? <div> </div> : fillPokedex() }
    {loadMore ? <Loading classe='loadMore'/> : <button onClick={ loadMorePokemon }> Load More</button> }
  </div>)
}

export default Pokedex;