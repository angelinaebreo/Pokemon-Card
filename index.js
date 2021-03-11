// const url = "https://pokeapi.co/api/v2/pokemon/mew"

document.querySelector(".form-search").addEventListener("submit", (e) => {
e.preventDefault()
console.log(e.target.search.value) 
fetchPokemon(e.target.search.value)
})

function fetchPokemon(pokemon) {
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(res => res.json())
.then(pokemon => buildCard(pokemon))
}

function buildCard(pokemon) {
    let name = document.querySelector("#name")
    let img = document.querySelector("#pokemon-img")

    name.textContent = `${pokemon.name} : ${pokemon.id}`
    img.src = pokemon.sprites.front_default

}