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

// Récupération des éléments existants du DOM

let main = document.querySelector("main");

// Création des nouveaux éléments du DOM

let teddyCard = document.createElement("section"); /* section vue détaillée et description ours */
let teddyView = document.createElement("div");
let teddyNameCard = document.createElement("h3");
let teddyImageCard = document.createElement("img");
let teddyDescription = document.createElement("p");

let teddyOrderBox = document.createElement("section"); /* section options et ajout au panier */
let teddyChoiceBox = document.createElement("div");
let teddyColor = document.createElement("div");
let teddyColorTitle = document.createElement("p");
let teddyColorButton = document.createElement("select");
let teddyQuantity = document.createElement("div");
let teddyQuantityTitle = document.createElement("p");
let teddyQuantityButton = document.createElement("input");
let teddyOrderButton = document.createElement("button");

// Affichage de l'ourson sélectionné et des options : couleurs / quantité / ajout au panier

function displayCard(teddy) {

    for(let param in teddy) {

        // ajout des attributs aux nouveaux éléments du DOM

        teddyCard.classList.add("teddyCard"); /* section vue détaillée et description ours */
        teddyView.classList.add("teddyView");
        teddyNameCard.classList.add("teddyNameCard");
        teddyImageCard.classList.add("teddyImageCard");
        teddyImageCard.setAttribute("src", teddy.imageUrl);
        teddyDescription.classList.add("teddyDescription");

        teddyOrderBox.classList.add("teddyOrderBox"); /* section options et ajout au panier */
        teddyChoiceBox.classList.add("teddyChoiceBox");
        teddyColor.classList.add("teddyColor");
        teddyColorTitle.classList.add("teddyColorTitle", "choiceTitle");
        teddyColorButton.classList.add("teddyColorButton", "choiceButton");
        teddyQuantity.classList.add("teddyQuantity");
        teddyQuantityTitle.classList.add("teddyQuantityTitle", "choiceTitle");
        teddyQuantityButton.classList.add("teddyQuantityButton", "choiceButton");
        teddyQuantityButton.setAttribute("type", "number");
        teddyQuantityButton.setAttribute("min", "1");

        teddyOrderButton.classList.add("teddyOrderButton");

        // intégration des nouveaux éléments au DOM

        main.appendChild(teddyCard); /* section vue détaillée et description ours */
        teddyCard.appendChild(teddyView);
        teddyView.appendChild(teddyNameCard);
        teddyView.appendChild(teddyImageCard);
        teddyCard.appendChild(teddyDescription);

        main.appendChild(teddyOrderBox); /* section options et ajout au panier */
        teddyOrderBox.appendChild(teddyChoiceBox);
        teddyChoiceBox.appendChild(teddyColor);
        teddyColor.appendChild(teddyColorTitle);
        teddyColor.appendChild(teddyColorButton);
        teddyChoiceBox.appendChild(teddyQuantity);
        teddyQuantity.appendChild(teddyQuantityTitle);
        teddyQuantity.appendChild(teddyQuantityButton);
        teddyOrderBox.appendChild(teddyOrderButton);

        // ajout de contenu

        teddyNameCard.textContent = teddy.name; /* section vue détaillée et description ours */
        teddyDescription.textContent = teddy.description;

        teddyColorTitle.textContent = "Couleur"; /* section options et ajout au panier */
        teddyQuantityTitle.textContent = "Quantité";

    }

    // création de la liste d'options déroulante

    for(let color of teddy.colors) {
        let teddyColorButtonOptions = document.createElement("option");
        teddyColorButtonOptions.classList.add("teddyColorButtonOptions");
        teddyColorButton.appendChild(teddyColorButtonOptions);
        teddyColorButtonOptions.textContent = color;
    }
}




