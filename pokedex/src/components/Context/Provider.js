import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import { getPokemons, fetchPokemon, createPokelist } from '../../services';

function Provider({ children }) {
  const [pokemons, SetPokemons] = useState([]);
  const [fetching, SetFetching] = useState(false);
  const [highestId, SetHighestId] = useState(0);
  
  const contextValue = {
    pokemons,
    SetPokemons,
    fetching, 
    SetFetching,
    highestId, 
    SetHighestId
  };

  useEffect(() => {
    const array = []
    const fetchPokemonData = async () => {
      const pokemonBasicData = await getPokemons(highestId);
      const pokemonFullData = await fetchPokemon(pokemonBasicData);
      const pokemonClearData = await createPokelist(pokemonFullData);
      array.push(pokemonClearData);
      SetPokemons(array)
      SetHighestId(highestId + 1);
    }

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
