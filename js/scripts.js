let pokemonRepository = (function () {
    const pokemonList = []
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (typeof pokemon === 'object') {
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon input is not correct');
        }
    }

    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        const visibleList = document.querySelector('.pokemon-list');
        const listItem = document.createElement('li');
        const button = document.createElement('button');

        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#modal-container');
        button.innerText = pokemon.name;
        button.classList.add(
            'button-class',
            'show-modal',
            'btn',
            'btn-outline-info'
        );

        listItem.classList.add('col');
        const pokemonImage = document.createElement('img');
        pokemonImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png";
        button.appendChild(pokemonImage);
        listItem.appendChild(button);

        visibleList.appendChild(listItem);
        button.addEventListener('click', () => {
            showDetails(pokemon);

        });
    }

    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    const pokemon = {
                        name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
                        detailsUrl: item.url,
                        id: item.url.split('/')[6],
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function loadDetails(pokemon) {
        const url = pokemon.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                pokemon.height = details.height;
                pokemon.types = details.types;
                pokemon.sprite = details.sprites.front_default;
                pokemon.sprite2 = details.sprites.back_default;
                pokemon.weight = details.weight;
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            showModal(item);
        });
    }

    function showModal(pokemon) {
        $('.modal-title').html(pokemon.name);
        $('.modal-text').html('<p>' + ' ' + '</p>');

        // loop through types and set names in a comma separated string
        const types = pokemon.types.map(function (pokemon) {
            return pokemon.type.name;
        }).join(', ');

        $('.modal-text').html("<p>" + "Height: " + pokemon.height / 10 + "m" + "</p>" +
        "<p>" + "Weight: " + pokemon.weight + "kg" + "</p>"+
        "<p>" + "Types: " + types+ "</p>"        
        + "<img src=" + '"' + "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + pokemon.id + ".gif" + '"' + "/>"
        + "<img src=" + '"' + pokemon.sprite2 + '"' + "/>"
        
        // why doesn't this work?
        // + "<img src=" + '"' + pokemon.sprites.versions.generation-v.black-white.animated.front_default + '"' + "/>"       
        );
    }


    return {
        getAll: getAll,
        loadList: loadList,
        addListItem: addListItem,
        loadDetails: loadDetails,
    };
})();


pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon, index) {
        pokemonRepository.addListItem(pokemon, index);
    });
});