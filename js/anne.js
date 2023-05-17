let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Mewtwo',
      height: 5,
      types: ['psychic']
    },
    {
      name: 'Charizard',
      height: 15,
      types: ['fire']
    },
    {
      name: 'Wortle',
      height: 5,
      types: ['water', 'grass']
    },

  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  // add()
  // {
  //   name: 'Wortle',
  //     height: 5,
  //       types: ['water', 'grass']
  // };

  function getAll() {
    return pokemonList;
  }



  return {
    add: add,
    getAll: getAll
  };
})();




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
    pokemon.type +
    "," +
    " " +
    "category" +
    ":" +
    pokemon.category +
    " "
  );
});