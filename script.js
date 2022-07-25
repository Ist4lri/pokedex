function disableButton(option){
    document.getElementById("searchPokemon").disabled = option;
}

async function stringQuery(){
    const isQueryString = window.location.href.indexOf('?');
    
    if (isQueryString !== -1){
        
        const queryString = window.location.href.substring(isQueryString + 1);
        var valuePokemon = new URLSearchParams(queryString).get("value");

        console.log({valuePokemon});
        
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + valuePokemon);
           
            if(response.ok === false) {
                document
                    .getElementById("exist")
                    .innerHTML = "<strong>Ce pokémon n'existe pas. Ou il est écrit en français...</strong>";
            } else {
                document
                    .getElementById("exist")
                    .innerHTML = "";
            }

            const pokemon = await response.json();

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

}

function main() {


    const pokemonNameElement = document.getElementById("requestPokemon");

    document.getElementById("requestPokemon").addEventListener('input', function(e){
        if(/^[A-Za-z]{3,}$/.test(e.target.value) === false){
            disableButton(true);
        } else {
            disableButton(false);
        }
    });
        document
        .getElementById("searchPokemon")
        .addEventListener('click', async function(event){

            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNameElement.value);
           
            if(response.ok === false) {
                document
                    .getElementById("exist")
                    .innerHTML = "<strong>Ce pokémon n'existe pas. Ou il est écrit en français...</strong>";
            } else {
                document
                    .getElementById("exist")
                    .innerHTML = "";
            }

            const pokemon = await response.json();

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
        
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    stringQuery();
    main();    
});

  