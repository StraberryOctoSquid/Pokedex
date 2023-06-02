// container function of iife
let pokemonRepository = (function () {

  // define pokemonLIst as an array
  let pokemonList = [];

  // define apiURL as the pokemon database api https address
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // what does this function do?
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
    
    // adds "list-group-item" class to all list item elements
    $("li").addClass("list-group-item");

    // creates button defined as button with text pokemon.name
    let button = document.createElement('button');
    button.innerText = pokemon.name;

    // adds button-class to buttons
    $("button").addClass("button-class btn btn-primary btn-lg");
    // button.classList.add("button-class");

    // places button as first decendant of listPokemon
    listPokemon.appendChild(button);
    // places listPokemon as first decendant of pokemonList
    pokemonList.appendChild(listPokemon);

    // enacts showDetails
    button.addEventListener('click', () => {
      showDetails(pokemon);
    });

  }

  // show modal function..pokething parameter is a placeholder. pokething.name, pokething.height, pokething.imagUrl. When called, the pokething paremeter is replaced with item
  function showModal(pokething) {
    let modalContainer = document.querySelector("#modal-container");

    // // //clear modal html content 
    modalContainer.innerHTML = "";

    // create div .modal
    let modal = document.createElement("div");
    modal.classList.add("modal");


    // create button, with class, text and event listener, hide modal on click
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    // create h1
    let titleElement = document.createElement("h1");
    titleElement.innerText = pokething.name;

    // create p
    let contentElement = document.createElement("p");
    contentElement.innerText = "Height: " + pokething.height;

    // create img element
    let myImage = document.createElement("img");
    myImage.setAttribute("src", pokething.imageUrl);
    myImage.setAttribute("width", "304");
    myImage.setAttribute("height", "200");


    // nest button, h1, and p,as first children of ".modal" nest modal as first child of".modal-container div"
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    modal.appendChild(myImage);

    // add .is-visible class to modalContainer
    modalContainer.classList.add("is-visible");
    // pokemonimg.classList.add("is-visible");


  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      // is this where the pokemon object in the api is defined as item?
      json.results.forEach(function (item) {
        console.log(item);
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }
  // detailsUrl??? item.name makes sense, item.url makes sense, is detailsUrl defined in line 128? as item.url?
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.height = details.height;
      // item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });

  }

  // logs top level details of the pokemon of the button that is clicked
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      //  everything from 144 is being sent with showModal
      showModal(item);
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

