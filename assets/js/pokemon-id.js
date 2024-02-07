
const url = `https://pokeapi.co/api/v2/pokemon/1`;

let pokemon = {};

const getPokemon = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        pokemon.name = data.forms[0].name
        pokemon.id = data.id;
        pokemon.image = data.sprites.other.dream_world.front_default;
        pokemon.types = data.types.map((typeSlot)=> typeSlot.type.name)
        pokemon.abilities = data.abilities.map((abilityOk) => abilityOk.ability.name)
        pokemon.stats = data.stats
    });

    return pokemon
}


