
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
  function add(pokemon) {
    pokemonList.push(pokemon);
  }



  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    
    // event listner that ennacts showDetails function
    button.addEventListener('click',function (event) {
      showDetails(pokemon);
    })

  }
  // logs the name of the pokemon of the button that is clicked
  function showDetails(pokemon) {
    console.log(pokemon.name)
    
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };

})();

pokemonRepository.add({
  name: 'Charmander',
  height: 2,
  types: ['fire'],
  category: "lizard"
})


document.write("Pokédex ");

pokemonRepository.getAll().forEach(function (pokemon) {

  pokemonRepository.addListItem(pokemon);

});