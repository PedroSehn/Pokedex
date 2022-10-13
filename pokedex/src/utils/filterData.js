export const filterPokemonData = (pokemonData) => {
    const { id, name, abilities, sprites, stats, types } = pokemonData;
    const typeNames = types.map((type) => type.type.name);
    const filteredAbilities = abilities.map((item) => {
        const { name, url } = item.ability;
        return { abilitieName: name, url }
    })
    

    const filteredData = {
        id,
        name: name.split('-', 1)[0].toUpperCase(),
        abilities: filteredAbilities,
        sprites: {
            static: sprites.versions['generation-v']['black-white'].front_default || 
            sprites.other['official-artwork'].front_default ||
            sprites.versions['generation-viii'].icons.front_default,
            male: sprites.versions['generation-v']['black-white'].animated.front_default || 
            sprites.versions['generation-v']['black-white'].front_default,
            female: sprites.versions['generation-v']['black-white'].animated.front_female || null,
        },
        stats: {
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            specialAttack: stats[3].base_stat,
            specialDefese: stats[4].base_stat,
            speed: stats[5].base_stat,
        },
        types: typeNames
    }

    return filteredData;
}

export const findEnglish = (object) => {
    const { effect_entries } = object;
    return effect_entries.find((item) => item.language.name === 'en')
}