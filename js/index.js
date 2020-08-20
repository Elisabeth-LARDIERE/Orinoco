// Récupération de la liste des oursons auprès de l'API

fetch("http://localhost:3000/api/teddies")
    .then(function(response) {
        if(response.ok) {
            response.json()
                .then(function(teddies) {
                    console.log(teddies);
                    displayTeddies(teddies);
                });
        }
    })
    .catch(function() {
        console.log("erreur");
        alert("erreur");
    });

// Récupération des éléments existants du DOM

let main = document.querySelector("main");

// Création des nouveaux éléments du DOM

let introList = document.createElement("h2");
let teddiesList = document.createElement("ul");

// Affichage de la liste des oursons disponibles

function displayTeddies(teddies) {
    for(let teddy of teddies) {

        // création des nouveaux éléments du DOM : liste de conteneurs d'ours avec nom/image/lien produit/prix

        let teddyBox= document.createElement("li");
        let teddyName = document.createElement("h3");
        let teddyImage = document.createElement("img");
        let teddyLink = document.createElement("a");
        let teddyPrice = document.createElement("p");

        // ajout d'attributs aux nouveaux éléments du DOM

        introList.setAttribute("id", "introList");
        teddiesList.classList.add("teddiesList");
        teddyBox.classList.add("teddyBox");
        teddyName.classList.add("teddyName");
        teddyImage.classList.add("teddyImage");
        teddyImage.setAttribute("src", teddy.imageUrl);
        teddyLink.classList.add("teddyLink");
        teddyLink.setAttribute("href", "product.html?" + teddy._id);
        teddyPrice.classList.add("teddyPrice");

        // intégration des nouveaux éléments au DOM

        main.appendChild(introList);
        main.appendChild(teddiesList);
        teddiesList.appendChild(teddyBox);
        teddyBox.appendChild(teddyName);
        teddyBox.appendChild(teddyLink);
        teddyBox.appendChild(teddyPrice);
        teddyLink.appendChild(teddyImage);

        // ajout de contenu

        introList.textContent = "Notre sélection d'ours en peluche";
        teddyName.textContent = teddy.name;
        teddyPrice.textContent = (teddy.price / 100).toFixed(2) + " €";
    }
}
