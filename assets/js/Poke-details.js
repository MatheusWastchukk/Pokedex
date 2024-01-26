const parametro = new URLSearchParams(window.location.search)

const pokemon = parametro.get('pokemon')

getDetails(pokemon)

function convertApiToPokemon(pokeDetail) {
    const pokemonD = new Pokemon()
    pokemonD.number = pokeDetail.id
    pokemonD.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    pokemonD.types = types
    pokemonD.type = type
    
    pokemonD.photo = pokeDetail.sprites.other.dream_world.front_default

    pokemonD.height = pokeDetail.height
    pokemonD.weight = pokeDetail.weight

    const abilities = pokeDetail.abilities.map((abilitieSlot) => abilitieSlot.ability.name)
    const [ability] = abilities
    pokemonD.abilities = abilities
    pokemonD.ability = ability


    return pokemonD
}
    
    

function getDetails(pokemon = 'ditto') {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    return fetch(url) 
        .then((response) => response.json())
        .then(convertApiToPokemon)
        .then((pokemonDetails) => attHtml(pokemonDetails))
}


function attHtml(pokemon) {

    const pokeDetail = document.getElementById('PokeDetails') 

    pokeDetail.innerHTML = detailPokemon(pokemon)
}

function detailPokemon (pokemon) {
    return `
    <h1> ${pokemon.name} </h1>
    <span> ${pokemon.number} <span>
    <span> ${pokemon.types} <span>
    <img src='${pokemon.photo}'>
    <span> ${pokemon.height} ' height <span>
    <span> ${pokemon.weight} ' weight <span>
    <span> ${pokemon.abilities} <span>
    `
}