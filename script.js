function disableButton(){
    if(/^[A-Za-z]{3,}$/.test(e.target.value) !== false){
        document.getElementById("searchPokemon").disabled = false;
    }
}
function testIfError(params) {

    if (params.ok === false) {
        throw new Error("Ce pokémon n'existe pas");
    }

}
async function resultAPI(params){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + params);

            testIfError(response);
            
            return await response.json();
}
function updatePokedex(pokemon){
    document
    .getElementById("image")
    .setAttribute("src", pokemon.sprites.front_default);
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
}

function stringQuery(){
    const isQueryString = window.location.href.indexOf('?'); // (URL)
    
    if (isQueryString === -1){ // faire l'inverse
        
        return "undefined"; // a faire en fonction
    }

    const queryString = window.location.href.substring(isQueryString + 1); //supr ça et balancer directement dans le .get()
        var valuePokemon = new URLSearchParams(queryString).get("value");

        console.log({valuePokemon});

} 

function main() {


    const pokemonNameElement = document.getElementById("requestPokemon");

    document.getElementById("requestPokemon").addEventListener('input', disableButton());
        
    document.getElementById("searchPokemon").addEventListener('click', updatePokedex(resultAPI(pokemonNameElement.value)){
        
});

document.addEventListener("DOMContentLoaded", function(event) {
    stringQuery();
    main();    
});

  