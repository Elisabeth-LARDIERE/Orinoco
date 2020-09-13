// Récupération des oursons individuels auprès de l'API

let idTeddy = location.search.slice(1);

fetch("http://localhost:3000/api/teddies/" + idTeddy)
    .then(function (response) {
        if (response.ok) {
            response.json()
                .then(function (teddy) {
                    displayCard(teddy);
                })
        }
    })
    .catch(function () {
        alert("erreur");
    })

// Récupération des données du localstorage

let teddies = JSON.parse(localStorage.getItem("products")) || []
let cartCounter = JSON.parse(localStorage.getItem("cartCounter")) || 0;

//// Affichage du nombre d'articles présents dans le panier sur le compteur-panier (header)

loadCartCounter();

// Création des éléments génériques de la fiche individuelle-ourson

let main = document.querySelector("main");

// section vue détaillée et description

let teddyCard = document.createElement("section");
teddyCard.classList.add("teddyCard");
main.appendChild(teddyCard);

let teddyView = document.createElement("div");
teddyView.classList.add("teddyView");
teddyCard.appendChild(teddyView);

let teddyNameCard = document.createElement("h3");
teddyNameCard.classList.add("teddyNameCard");
teddyView.appendChild(teddyNameCard);

let teddyImageCard = document.createElement("img");
teddyImageCard.classList.add("teddyImageCard");
teddyView.appendChild(teddyImageCard);

let teddyDescription = document.createElement("div");
teddyDescription.classList.add("teddyDescription");
teddyCard.appendChild(teddyDescription);

let teddyText = document.createElement("p");
teddyText.classList.add("teddyText");
teddyDescription.appendChild(teddyText);

let teddyPriceCard = document.createElement("p");
teddyPriceCard.classList.add("teddyPriceCard");
teddyPriceCard.setAttribute("type", "number");
teddyDescription.appendChild(teddyPriceCard);

// section options et ajout au panier

let teddyOrderBox = document.createElement("section");
teddyOrderBox.classList.add("teddyOrderBox");
main.appendChild(teddyOrderBox);

let teddyChoiceBox = document.createElement("div");
teddyChoiceBox.classList.add("teddyChoiceBox");
teddyOrderBox.appendChild(teddyChoiceBox);

let teddyColor = document.createElement("div");
teddyColor.classList.add("teddyColor");
teddyChoiceBox.appendChild(teddyColor);

let teddyColorTitle = document.createElement("label");
teddyColorTitle.classList.add("teddyColorTitle", "title");
teddyColorTitle.setAttribute("for", "color");
teddyColor.appendChild(teddyColorTitle);
teddyColorTitle.textContent = "Couleur";

let teddyColorButton = document.createElement("select");
teddyColorButton.classList.add("teddyColorButton", "button");
teddyColorButton.setAttribute("id", "color");
teddyColor.appendChild(teddyColorButton);

let teddyQuantity = document.createElement("div");
teddyQuantity.classList.add("teddyQuantity");
teddyChoiceBox.appendChild(teddyQuantity);

let teddyQuantityTitle = document.createElement("label");
teddyQuantityTitle.classList.add("teddyQuantityTitle", "title");
teddyQuantity.appendChild(teddyQuantityTitle);
teddyQuantityTitle.textContent = "Quantité";

let teddyQuantityButton = document.createElement("input");
teddyQuantityButton.classList.add("teddyQuantityButton", "button");
teddyQuantityButton.setAttribute("type", "number");
teddyQuantityButton.setAttribute("min", "1");
teddyQuantity.appendChild(teddyQuantityButton);
teddyQuantityButton.value = "1";

let teddyOrderButton = document.createElement("button");
teddyOrderButton.classList.add("teddyOrderButton");
teddyOrderBox.appendChild(teddyOrderButton);

let teddyOrderButtonLogo = document.createElement("i");
teddyOrderButtonLogo.classList.add("fas", "fa-shopping-cart");
teddyOrderButtonLogo.setAttribute("alt", "icône panier");
teddyOrderButton.appendChild(teddyOrderButtonLogo);

// Affichage des caractéristiques personnelles de l'ourson sélectionné

function displayCard(teddy) {

    for (let param in teddy) {

        teddyNameCard.textContent = teddy.name;

        teddyImageCard.setAttribute("src", teddy.imageUrl);
        teddyImageCard.setAttribute("alt", String(teddy.name) + " en photo");

        teddyText.textContent = teddy.description;

        teddyPriceCard.textContent = (teddy.price / 100).toFixed(2) + " €";

    }

    // choix de la couleur

    for (let color of teddy.colors) {
        let teddyColorButtonOptions = document.createElement("option");
        teddyColorButtonOptions.classList.add("teddyColorButtonOptions");
        teddyColorButton.appendChild(teddyColorButtonOptions);
        teddyColorButtonOptions.textContent = color;
    }

    // ajout au panier et  stockage des données dans le localstorage

    function addToCart() {

        let newTeddy = {
            id: idTeddy,
            name: teddy.name,
            image: teddy.imageUrl,
            price: (teddy.price / 100).toFixed(2) + " €",
            quantity: teddyQuantityButton.value,
        };

        let found = false;
        for (let i = 0; i < teddies.length && found === false; i++) {
            if (teddies[i].name === newTeddy.name) {
                found = true;
                let newQuantity = parseInt(newTeddy.quantity) + parseInt(teddies[i].quantity);
                teddies[i].quantity = teddies[i].quantity.replace(teddies[i].quantity, String(newQuantity));
            }
        }

        if (found === false) {
            teddies.push(newTeddy);
        }

        localStorage.setItem("products", JSON.stringify(teddies));
        updateCounterCart();
    }

teddyOrderButton.addEventListener("click", addToCart);
}




