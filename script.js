function main() {

    const pokemonNameElement = document.getElementById("requestPokemon");

    const bla = document.getElementById("name");

    const selectorButton = document.getElementById("searchPokemon");

    selectorButton.addEventListener('click', async function(event){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonNameElement.value);
        if(response.ok === false) {
            // handle errors here
            throw new Error("Ce pokémon n'existe pas");
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
            .innerText = "Il est de type(s) " + pokemon.types[0].type.name;

        pokemon.types.map((oneType) => {
            console.log(`${pokemon.name} est de type ${oneType.type.name}`);
        })
        
        console.log({pokemon});
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    try {
        main();
    } catch(e) {
        document
              .getElementById("weight")
             .innerText = "Oula y'a un soucis !"
    }
});

  