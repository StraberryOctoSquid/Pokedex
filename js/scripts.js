
//sets up a variable of an array of pokemon with name, height and type attributes
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


for (let i=0; i <pokemonList.length; i++) {
    document.write('<p class=pokemon>' + pokemonList[i].name + ": Height:" + pokemonList[i].height);
    if (pokemonList[i].height >10) {
        document.write(" :Wow that's tall!")
    }
}