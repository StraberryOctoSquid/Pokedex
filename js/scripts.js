// container function of iife
let pokemonRepository = (function () {
  
  // define pokemonLIst as an array
  let pokemonList = [];

  // define apiURL as the pokemon database api https address
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // what does this function do? is it a promise?
  // if the pokemon is an object and has a name it will then be pushed to pokemonList, else console.log "...."?
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  
  // create getAll function that returns pokemonList array
  function getAll() {
    return pokemonList;
  }

  //creates button with text of pokemon.name, and click event listner
  function addListItem(pokemon) {
    
    // defines pokemonList as ul.pokemon-list
    let pokemonList = document.querySelector(".pokemon-list");

    // creates list item defined as listPokemon
    let listPokemon = document.createElement('li');
    
    // creates button defined as button with text pokemon.name
    let button = document.createElement('button');
    button.innerText = pokemon.name;

    // is this attaching a "class" to the buttons? Can css and js access buttons using .button-class?
    button.classList.add("button-class");
    
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    // event listner that ennacts showDetails function
    // enacts showDetails and showModal functions
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
      showModal(title, text);
    })


  }
 
  // 
  

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

   // logs the name of the pokemon of the button that is clicked
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };

})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

