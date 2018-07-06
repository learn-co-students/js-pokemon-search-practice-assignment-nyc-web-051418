document.addEventListener("DOMContentLoaded", function() {
  const pokemonSearchInput = document.getElementById('pokemon-search-input')
  const pokemonContainer = document.getElementById('pokemon-container')

  pokemonSearchInput.addEventListener('keyup', function(event) {
    if (event.target.value === '') {
      pokemonContainer.innerHTML = '';
    } else {
      pokemonContainer.innerHTML = '';
      const filteredPokemons = filterPokemons(event.target.value)
      filteredPokemons.forEach(pokemon => displayPokemon(pokemon))
    }
  })

  function filterPokemons(string) {
    return data.pokemons.filter(pokemon => {
      return pokemon.name.includes(string);
    })
  }

  function displayPokemon(pokemon) {
    const currentPokemon = generatePokemonHTML(pokemon)
    pokemonContainer.innerHTML += currentPokemon;
    }

  function generatePokemonHTML(pokemon) {
    return `
    <div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.order}.png" data-pokemon-order="${pokemon.order}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
        </div>
      </div>`
  }

  pokemonContainer.addEventListener('click', function(event) {
    if (event.target.dataset.action === 'flip-image') {
      flipPokemon(event.target.parentElement);
    }
  })

  function directionToFlipPokemon(pokemonElement) {
    const pokemonOrder = pokemonElement.querySelector('img').dataset.pokemonOrder
    let imgSrc = pokemonElement.querySelector('img').src
    const front = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonOrder}.png`
    const back = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonOrder}.png`
    if (imgSrc === front) {
      return imgSrc = back;
    } else {
      return imgSrc = front;
    }
    // const front =
    // const back =
  }

  function flipPokemon(pokemonElement) {
    pokemonElement.querySelector('img').src = directionToFlipPokemon(pokemonElement)
  }

})
