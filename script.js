document
    .querySelector("input[id='requestPokemon']")
    .addEventListener('keypress', function(e){
            var userEntry = e.target.value;
    });


document
.querySelector("input[id='button']")
.addEventListener('submit', function(event){
    event.defaultPrevented();
    document.getElementById("name").innerText = userEntry;
});

fetch("https://pokeapi.co/api/v2/pokemon/" + userEntry)
.then(function(value){
    document
        .getElementById("name")
        .innerText = value.name;
    document
        .getElementById("type")
        .innerText = value.types[0].type.name;
    document
        .getElementById("weight")
        .innerText = value.weight + "g";
})


  