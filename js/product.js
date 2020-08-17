// Récupération de la liste des oursons auprès de l'API
fetch("http://localhost:3000/api/teddies")
    .then(function (response) {
        if(response.ok) {
            response.json()
                .then(function (teddies) {
                    console.log(teddies);
                    displayTeddyCard(teddies);
                });
        }
    })

    .catch(function() {
        console.log("erreur");
        alert("erreur");
    })

// Récupération des éléments du DOM
let main = document.querySelector("main");

// Création des nouveaux éléments du Dom


