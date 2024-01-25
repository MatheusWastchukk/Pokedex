const parametro = new URLSearchParams(window.location.search)

const pokemon = parametro.get('pokemon')
console.log(pokemon)

function detailPokemon () {
    return `
        <h1> OI </h1>
    `
}

const pokeDetail = document.getElementById('PokeDetails') 

pokeDetail.innerHTML += detailPokemon()
