
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Mewtwo',
      height: 5,
      types: ['psychic'],
      category: "genetic"
    },
    {
      name: 'Charizard',
      height: 15,
      types: ['fire'],
      category: "flame"
    },
    {
      name: 'Wortle',
      height: 5,
      types: ['water', 'grass'],
      category: "turtle"
    },

  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // How would I use the add function to push another pokemon into the array?
  // Why doesn't the below code work?



  function getAll() {
    return pokemonList;
  }


  
  return {
    add: add,
    getAll: getAll
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
  document.write(
    "<p></P>" +
    pokemon.name +
    "-" +
    " " +
    "height" +
    ":" +
    pokemon.height +
    "," +
    " " +
    "type" +
    ":" +
    pokemon.types +
    "," +
    " " +
    "category" +
    ":" +
    pokemon.category +
    " "
  );
});