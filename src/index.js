// class Pokemon {
//
//   constructor(name, sprites){
//     this.name = name;
//     this.forwardSprite = sprites.front;
//     this.backwardSprite = sprites.back;
//   }
//
//   changeDirection(e){
//
//
//   }
//
// }

document.addEventListener("DOMContentLoaded", function() {

  const allPokemonContainer = document.getElementById("pokemon-container")
  const searchBar = document.getElementById("pokemon-search-input");

  //EVENT DELEGATION HERE
  allPokemonContainer.addEventListener("click", function(e) {
    if(e.target.dataset.action === "flip-card"){
        const pokemonName = e.target.dataset.pokemonName;
        const currentDirection = e.target.dataset.imageDirection;
        const pokemon = pokeDb.pokemons.find(indivudalPokemon => indivudalPokemon.name === pokemonName)
        const desiredDirection = (currentDirection === "front" ? "back" : "front")
        debugger;
        const imageUrl = pokemon.sprites[`${desiredDirection}`];
        const imgElement = document.querySelector(`img[data-pokemon-name="${pokemon.name}"]`)
        // debugger;
        imgElement.src = imageUrl;
        e.target.dataset.imageDirection = desiredDirection;
    }


  })


  function showPokemon(individualPokemon){
    const pokemonHTML = createHTML(individualPokemon);
    allPokemonContainer.innerHTML += pokemonHTML;
  }

  function showQueryResults(results) {
    allPokemonContainer.innerHTML = ``
    results.forEach(showPokemon)

  }

  searchBar.addEventListener("keyup", function(e){

      if (searchBar.value === ""){
        allPokemonContainer.innerHTML = ``
      } else {
        const currentQuery = searchBar.value;
        const queryResults = pokeDb.pokemons.filter( individualPokemon => individualPokemon.name.includes(currentQuery))
        showQueryResults(queryResults);
      }

  })


  function createHTML (individualPokemon) {
      return `<div class="pokemon-container">
                <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
                  <h1 class="center-text">${individualPokemon.name}</h1>
                  <div style="width:239px;margin:auto">
                    <div style="width:96px;margin:auto">
                      <img data-pokemon-name="${individualPokemon.name}" src="${individualPokemon.sprites.front}">
                    </div>
                  </div>
                  <p data-action="flip-card" data-image-direction="front" data-pokemon-name="${individualPokemon.name}" style="padding:10px;" class="center-text flip-image" data-pokename="${individualPokemon.name}" data-action="flip-image">flip card</p>
                </div>
              </div>`
  }



  //iterate over pokemon database
  //create new div with class .pokemon-container that will house one pokemon each
  //start with h1 headline with class .center-text and name

  // queryResults.forEach(function(individualPokemon){
  //
  //   //create container for individual with instructed class name. Append to allPokemonContainer
  //   let individualPokemonContainer = document.createElement("div");
  //   individualPokemonContainer.className = "pokemon-container";
  //   allPokemonContainer.append(individualPokemonContainer);
  //
  //   //create pokemon frame individual
  //   let pokemonFrame = document.createElement("div")
  //   pokemonFrame.className = "pokemon-frame";
  //   individualPokemonContainer.append(pokemonFrame);
  //
  //   //Add data to the newly created individual containers
  //   let pokemonName = individualPokemon["name"];
  //   let pokemonTitle = document.createElement("h1");
  //
  //   pokemonTitle.innerText = pokemonName;
  //   pokemonTitle.className = "center-text";
  //   pokemonFrame.append(pokemonTitle);
  //
  //   let spriteFrame = document.createElement("div");
  //   spriteFrame.className = "sprite-frame";
  //   pokemonFrame.append(spriteFrame);
  //
  //
  //   let forwardSpriteLink = individualPokemon["sprites"]["front"];
  //   let backwardSpriteLink = individualPokemon["sprites"]["back"];
  //   //start with forward img
  //   spriteFrame.innerHTML = `<img src=${forwardSpriteLink}></a>`
  //   let isSpriteFoward = true;
  //
  //
  //   let toggleDirectionText = document.createElement("p");
  //   toggleDirectionText.innerHTML = `<a href="#">reverse direction</a>`
  //   toggleDirectionText.style.textAlign = "center";
  //   spriteFrame.append(toggleDirectionText);
  //
  //   // event listener to change direction to the opposite
  //   // isSpriteForward argument is boolean. Currently forward === true
  //   toggleDirectionText.addEventListener("click", changeSpriteDirection)
  //
  //
  //
  //       // spriteFrame.append(forwardSprite);
  //
  //
  //   //spriteFrame.innerHTML = `<img src=${backwardSpriteLink}></a>`
  // //  let forwardSpriteImg = ndividualPokemon["sprites"]["front"];
  //
  //
  //   // let backwardSprite = individualPokemon["sprites"]["back"];
  //   // spriteFrame.append(backwardSprite);
  //
  // })

})
//
// function changeSpriteDirection() {
//
//   debugger;
//
//   if (isSpriteFoward){
//     spriteFrame.children[0].innerHTML = `<img src="${backwardSpriteLink}"></a>`
//   }
//
//   else {
//     spriteFrame.innerHTML = `<img src="${forwardSpriteLink}"></a>`
//   }
//
// }
