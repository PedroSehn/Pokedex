import  { filterPokemonData } from '../utils/filterData'

const BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMON_LIMIT = 36;

export const createPokelist = async (pokeList) => {
    const pokemons = []
    
    pokeList.map((item) => {
        const filteredData = filterPokemonData(item);
        return pokemons.push(filteredData);
    })

    return pokemons;
}

export const getPokemons = async (id) => {
    const page = `${BASE_URL}/pokemon/?limit=${POKEMON_LIMIT}&offset=${id}` 
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
    const sort = (a, b) => {
        if(a.id > b.id) return 1
        if(a.id < b.id) return -1
        return 0
    }
    const pokemonBasicData = await getPokemons(id);
    const pokemonFullData = await fetchPokemon(pokemonBasicData);
    const pokemonClearData = await createPokelist(pokemonFullData);
    array.push(...pokemonClearData);
    array.sort(sort)
    return { array, newId: (id + 36) };
}