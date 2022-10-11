import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { retrunAllPokemons } from '../../services';

function Provider({ children }) {
  const [pokemons, SetPokemons] = useState([]);
  const [fetching, SetFetching] = useState(true);
  const [highestId, SetHighestId] = useState(0);
  const [loadMore, SetLoadMore] = useState(false);
  
  const contextValue = {
    pokemons, SetPokemons,
    fetching, SetFetching,
    highestId, SetHighestId,
    loadMore, SetLoadMore,
  };

  const fetchPokemonData = async () => {
    const newArray = [];
    const InfoArray = await retrunAllPokemons(highestId)
    newArray.push(...InfoArray.array)
    SetPokemons(newArray);
    SetHighestId(InfoArray.newId);
    SetFetching(false);
  }

  const loadMorePokemon = async () => {
    SetLoadMore(true);
    const newPokemons = await retrunAllPokemons(highestId);
    const newArray = pokemons.concat(newPokemons.array)
    SetPokemons(newArray)
    SetLoadMore(false);
    SetHighestId(highestId + 36)
  }

  useEffect(() => {
    SetFetching(true)
    fetchPokemonData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <AppContext.Provider value={ {
      pokemons, SetPokemons,
      fetching, SetFetching,
      highestId, SetHighestId,
      loadMore, SetLoadMore, 
      loadMorePokemon} }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
