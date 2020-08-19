// Récupération des oursons individuels auprès de l'API

let idTeddy = location.search.slice(1);
console.log(idTeddy);

fetch("http://localhost:3000/api/teddies/" +idTeddy)
    .then(function(response) {
        if(response.ok) {
            response.json()
                .then(function(teddy) {
                    console.log(teddy);
                    displayCard(teddy);
                })
        }
    })
    .catch(function() {
        console.log("erreur");
        alert("erreur");
    })

// Récupération des éléments du DOM

let main = document.querySelector("main");

// Ajout d'attributs aux éléments du DOM

main.classList.add("main_product");

// Création des nouveaux éléments du DOM

let teddyCard = document.createElement("section");
let teddyView = document.createElement("div");
let teddyNameCard = document.createElement("h3");
let teddyImageCard = document.createElement("img");
let teddyDescription = document.createElement("p");
let teddyOrderBox = document.createElement("section");
let teddyOrderCall = document.createElement("h4");
let teddyOrderButton = document.createElement("button");

// Affichage de l'ourson sélectionné

function displayCard(teddy) {
    for(let param in teddy) {

// Ajout des attributs aux nouveaux éléments du DOM

        teddyCard.classList.add("teddyCard");
        teddyView.classList.add("teddyView");
        teddyNameCard.classList.add("teddyNameCard");
        teddyImageCard.classList.add("teddyImageCard");
        teddyImageCard.setAttribute("src", teddy.imageUrl);
        teddyDescription.classList.add("teddyDescription");
        teddyOrderBox.classList.add("teddyOrderBox");
        teddyOrderCall.classList.add("teddyOrderCall");
        teddyOrderButton.classList.add("teddyOrderButton");

// Intégration des nouveaux éléments au DOM

        main.appendChild(teddyCard);
        teddyCard.appendChild(teddyView);
        teddyView.appendChild(teddyNameCard);
        teddyView.appendChild(teddyImageCard);
        teddyCard.appendChild(teddyDescription);
        main.appendChild(teddyOrderBox);
        teddyOrderBox.appendChild(teddyOrderCall);
        teddyOrderBox.appendChild(teddyOrderButton);

// Ajout du contenu pour chaque carte d'ourson

        teddyNameCard.textContent = teddy.name;
        teddyDescription.textContent = teddy.description;
        teddyOrderCall.textContent = "Commander" + " " + teddy.name;
    }
}




