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
      const fullPageHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const currentScrollPosition = fullPageHeight - scrollTop
      console.log(`
      currentScrollPosition = ${currentScrollPosition}
      windowHeight = ${windowHeight}
      diferença = ${currentScrollPosition - windowHeight}
      `)
      if(currentScrollPosition === windowHeight){
        loadMorePokemon()
      }
    }
   
  }
  return(
  <div className='Pokedex'>
    { fetching ? <div> </div> : fillPokedex() }
    <Loading classe='loadMore'/> 
  </div>)
}

export default Pokedex;