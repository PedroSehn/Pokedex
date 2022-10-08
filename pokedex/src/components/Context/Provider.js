import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { retrunAllPokemons } from '../../services';

function Provider({ children }) {
  const [pokemons, SetPokemons] = useState([]);
  const [fetching, SetFetching] = useState(true);
  const [highestId, SetHighestId] = useState(0);
  
  const contextValue = {
    pokemons,
    SetPokemons,
    fetching, 
    SetFetching,
    highestId, 
    SetHighestId
  };

  const fetchPokemonData = async () => {
    const newArray = [];
    const InfoArray = await retrunAllPokemons(highestId)
    newArray.push(...InfoArray.array)
    SetPokemons(newArray);
    SetHighestId(InfoArray.newId);
    SetFetching(false);
  }

  useEffect(() => {
    SetFetching(true)
    fetchPokemonData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
