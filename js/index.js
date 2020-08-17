// Récupération de la liste des oursons auprès de l'API
fetch('http://localhost:3000/api/teddies')
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

// Récupération des éléments du DOM
let main = document.querySelector("main");

// Création des nouveaux éléments du DOM : liste
let teddiesList = document.createElement("ul");

// Affichage de la liste des oursons disponibles
function displayTeddies(teddies) {
    for(let teddy of teddies) {

// Création des nouveaux éléments du DOM : conteneurs individuels d'oursons avec nom/image/lien vers le produit/prix
        let teddyBox= document.createElement("li");
        let teddyName = document.createElement("h2");
        let teddyImage = document.createElement("img");
        let teddyLink = document.createElement("a");
        let teddyPrice = document.createElement("p");

// Ajout des attributs aux nouveaux éléments du DOM
        teddiesList.classList.add("teddiesList");
        teddyBox.classList.add("teddyBox");
        teddyName.classList.add("teddyName");
        teddyImage.classList.add("teddyImage");
        teddyImage.setAttribute("src", teddy.imageUrl);
        teddyLink.classList.add("teddyLink");
        teddyPrice.classList.add("teddyPrice");

// Intégration des nouveaux éléments au DOM
        main.appendChild(teddiesList);
        teddiesList.appendChild(teddyBox);
        teddyBox.appendChild(teddyName);
        teddyBox.appendChild(teddyImage);
        teddyBox.appendChild(teddyPrice);
        teddyImage.appendChild(teddyLink);

// Ajout du contenu pour chaque ourson
        teddyName.innerHTML = teddy.name;
        teddyPrice.innerHTML = teddy.price;
    }
}
