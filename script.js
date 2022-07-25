function disableButton(){
    console.log("+1");
    if(/^[A-Za-z]{3,}$/.test(document.getElementById("requestPokemon")) !== false){
        document.getElementById("searchPokemon").disableButton = true;
    }
}

async function fetchPokemon(pokemonNameOrId){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNameOrId);
    if (response.ok === false) { 
        throw new Error("Ce pokémon n'existe pas");
    }
    var pokemon = await response.json();

    return pokemon;
}

function updatePokedex(pokemon){
document
    .getElementById("name")
    .innerText = "Nom : " + pokemon.name;
document
    .getElementById("weight")
    .innerText = "Il fait " + pokemon.weight + "g";
document
    .getElementById("type")
    .innerText = "Il est de type(s) " + pokemon.types.map((singleType) => singleType.type.name + " ")
document
    .getElementById("pokeId")
    .innerText = "ID du pokémon : " + pokemon.id;
document
    .getElementById("image")
    .setAttribute("src", pokemon.sprites.front_default);
}

function stringQuery(){
    const isQueryString = window.location.href.indexOf('?'); // (URL)
    
    if (isQueryString === -1){
        return undefined;
    }

    const queryString = window.location.href.substring(isQueryString + 1); //supr ça et balancer directement dans le .get()
    var valuePokemon = new URLSearchParams(queryString).get("value");

        console.log({valuePokemon});

} 

function main() {
    const pokemonNameElement = document.getElementById("requestPokemon");
    document.getElementById("requestPokemon").addEventListener('keypress', (event) => disableButton());
    document.getElementById("searchPokemon").addEventListener('click', async (event) => {
        const pokemon = await fetchPokemon(pokemonNameElement.value);
        updatePokedex(pokemon);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    stringQuery();
    main();    
});

  