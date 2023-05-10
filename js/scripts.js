let pokemonList = [ 
    {
        name: "Mewtwo", height:5, types: ["psychic"]
     },
     {
        name:"Charizard", height: 15, types: ["fire"]
    },
    {
        name:"Wartortle", height:5,types: ["water", "grass"]
    }

];

console.log(pokemonList);

for (let i=0; i <pokemonList.length; i++) {
    document.write('<p class=pokemon>' + pokemonList[i].name + ": Height:" + pokemonList[i].height);
}