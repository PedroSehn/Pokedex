import  { filterPokemonData } from '../utils/filterData'

const BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMON_LIMIT = 33;

/*const mock = [
    {name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/'}, 
    {name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/'},
]*/

export const createPokelist = async (pokeList) => {
    const pokemons = []
    
    pokeList.map((item) => {
        const filteredData = filterPokemonData(item);
        return pokemons.push(filteredData);
    })

    return pokemons;
}

export const getPokemons = async (lastId) => {
    const page = `${BASE_URL}/pokemon/?limit=${POKEMON_LIMIT}&offset=${lastId}` 
    const result = await fetch(page);
    const resultJSON = await result.json();
    return resultJSON.results;
};

export const fetchPokemon = async (PokemonArray) => {
    const array = []
    const pokemon = PokemonArray.map(async (pokemon) => {
       const { url } = pokemon;
       const response = await fetch(url);
       const result = await response.json();
       array.push(result);
    })
    await Promise.all(pokemon)
    return array;
}

export const retrunAllPokemons = async (id) => {
    const array = []
    const pokemonBasicData = await getPokemons(id);
    const pokemonFullData = await fetchPokemon(pokemonBasicData);
    const pokemonClearData = await createPokelist(pokemonFullData);
    array.push(pokemonClearData);

    return { array, newId: id + 51 };
}