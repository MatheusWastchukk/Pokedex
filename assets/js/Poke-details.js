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
    <div class="pokemondetails ${pokemon.type}">
    <h1 class="name"> ${pokemon.name} </h1>
    <span class="number"> #${pokemon.number} </span>
    <img src='${pokemon.photo}' alt="${pokemon.name}">
    </div>
    <div class="pokedetails">
    <ol class="types">
    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    <section class="hw">
    <span class="weight"> ${pokemon.weight} ' 
        <p class="weight2">weight</p>
    </span>
    <span class="height"> ${pokemon.height} '
        <p class="height2">height</p>
    </span>
    </section>
    <ol class="abilities">
    <h2>Abilities</h2>
    ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
    </ol>
    </div>
    `
}