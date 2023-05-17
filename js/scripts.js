
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

Object.keys(pokemonList).forEach(function (property) {
    document.write(pokemonList[property]);
    
});

// pokemonList.forEach( item => document.write(name,height,types,));


// document.write('<h3>===forEach LOOP===</h3>');
// pokemonList.forEach(function (currentItem, index) {
//   document.write('<p>' + index + '</p>');
// });


// document.write 
// pokemonList.forEach(function (currentItem) {
//     document.write('<p>' + currentItem + '</p>');
    
    
// });

// for (let i=0; i <pokemonList.length; i++) {
//     document.write('<p class=pokemon>' + pokemonList[i].name + ": Height:" + pokemonList[i].height);
//     if (pokemonList[i].height >10) {
//         document.write(" :Wow that's tall!")
//     }
// }