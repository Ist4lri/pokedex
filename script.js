document
    .querySelector("input[id='requestPokemon']")
    .addEventListener('keypress', function(eventKeyPress){
        var userEntry = eventKeyPress.target.value;
        document
            .getElementById("button")
            .addEventListener('submit', function(){
                fetch("https://pokeapi.co/api/v2/pokemon/" + userEntry)
                .then(function(res){
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(function(value){
                    document
                        .getElementById("name")
                        .innerText = value.name;
                    document
                        .getElementById("type")
                        .innerText = value.types.type.name;
                    document
                        .getElementById("weight")
                        .innerText = value.weight + "g";

                })
                .catch(function(err){
                    document
                        .getElementById("exist")
                        .innerText = "N'existe pas !"
                });
            });
    });