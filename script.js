function buttonDisable(condition){
    document
        .getElementById('searchPokemon')
        .disabled = condition;
}

function main() {

    buttonDisable(true);

    const pokemonNameElement = document.getElementById("requestPokemon");

    document.getElementById("requestPokemon").addEventListener('keypress', buttonDisable(false));

   document
        .getElementById("searchPokemon")
        .addEventListener('click', async function(event){

            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNameElement.value);
           
            if(response.ok === false) {

                document
                    .getElementById("exist")
                    .innerHTML = "<strong>Ce pokémon n'existe pas. Ou il est écrit en français...</strong>";
            }

            const pokemon = await response.json();
            
            document
                .getElementById("name")
                .innerText = "Nom : " + pokemon.name;
            document
                .getElementById("weight")
                .innerText = "Il fait " + pokemon.weight + "g";
            document
                .getElementById("type")
                .innerText = "Il est de type(s) " + pokemon.types.map((singleType) => singleType.type.name + " ")
        
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    main();    
});

  