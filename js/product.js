// Récupération des oursons individuels auprès de l'API

let idTeddy = location.search.slice(1); // essayer avec URLSearchParams
console.log(idTeddy);

fetch("http://localhost:3000/api/teddies/" + idTeddy)
    .then(function (response) {
        if (response.ok) {
            response.json()
                .then(function (teddy) {
                    console.log(teddy);
                    displayCard(teddy);
                })
        }
    })
    .catch(function () {
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
let teddyDescription = document.createElement("div");
let teddyText = document.createElement("p");
let teddyPriceCard = document.createElement("p");


let teddyOrderBox = document.createElement("section"); /* section options et ajout au panier */
let teddyChoiceBox = document.createElement("div");
let teddyColor = document.createElement("div");
let teddyColorTitle = document.createElement("label");
let teddyColorButton = document.createElement("select");
let teddyQuantity = document.createElement("div");
let teddyQuantityTitle = document.createElement("label");
let teddyQuantityButton = document.createElement("input");
let teddyOrderButton = document.createElement("button");
let teddyOrderButtonLogo = document.createElement("i");

// Affichage de l'ourson sélectionné et des options : couleurs / quantité / ajout au panier

function displayCard(teddy) {

    for (let param in teddy) {

        // ajout des attributs aux nouveaux éléments du DOM

        teddyCard.classList.add("teddyCard"); /* section vue détaillée et description ours */
        teddyView.classList.add("teddyView");
        teddyNameCard.classList.add("teddyNameCard");
        teddyImageCard.classList.add("teddyImageCard");
        teddyImageCard.setAttribute("src", teddy.imageUrl);
        teddyDescription.classList.add("teddyDescription");
        teddyText.classList.add("teddyText");
        teddyPriceCard.classList.add("teddyPriceCard");

        teddyOrderBox.classList.add("teddyOrderBox"); /* section options et ajout au panier */
        teddyChoiceBox.classList.add("teddyChoiceBox");
        teddyColor.classList.add("teddyColor");
        teddyColorTitle.classList.add("teddyColorTitle", "title");
        teddyColorTitle.setAttribute("for", "color");
        teddyColorButton.classList.add("teddyColorButton", "button");
        teddyColorButton.setAttribute("id", "color");
        teddyQuantity.classList.add("teddyQuantity");
        teddyQuantityTitle.classList.add("teddyQuantityTitle", "title");
        teddyQuantityButton.classList.add("teddyQuantityButton", "button");
        teddyQuantityButton.setAttribute("type", "number");
        teddyQuantityButton.setAttribute("min", "1");
        teddyQuantityButton.setAttribute("value", "1");

        teddyOrderButton.classList.add("teddyOrderButton");
        teddyOrderButtonLogo.classList.add("fas", "fa-shopping-cart");

        // intégration des nouveaux éléments au DOM

        main.appendChild(teddyCard); /* section vue détaillée et description ours */
        teddyCard.appendChild(teddyView);
        teddyView.appendChild(teddyNameCard);
        teddyView.appendChild(teddyImageCard);
        teddyCard.appendChild(teddyDescription);
        teddyDescription.appendChild(teddyText);
        teddyDescription.appendChild(teddyPriceCard);

        main.appendChild(teddyOrderBox); /* section options et ajout au panier */
        teddyOrderBox.appendChild(teddyChoiceBox);
        teddyChoiceBox.appendChild(teddyColor);
        teddyColor.appendChild(teddyColorTitle);
        teddyColor.appendChild(teddyColorButton);
        teddyChoiceBox.appendChild(teddyQuantity);
        teddyQuantity.appendChild(teddyQuantityTitle);
        teddyQuantity.appendChild(teddyQuantityButton);
        teddyOrderBox.appendChild(teddyOrderButton);
        teddyOrderButton.appendChild(teddyOrderButtonLogo);

        // ajout de contenu

        teddyNameCard.textContent = teddy.name; /* section vue détaillée et description ours */
        teddyText.textContent = teddy.description;
        teddyPriceCard.textContent = (teddy.price / 100).toFixed(2) + " €";

        teddyColorTitle.textContent = "Couleur"; /* section options et ajout au panier */
        teddyQuantityTitle.textContent = "Quantité";
    }

    // choix de la couleur

    for (let color of teddy.colors) {
        let teddyColorButtonOptions = document.createElement("option");
        teddyColorButtonOptions.classList.add("teddyColorButtonOptions");
        teddyColorButtonOptions.setAttribute("value", color);
        teddyColorButton.appendChild(teddyColorButtonOptions);
        teddyColorButtonOptions.textContent = color;
    }

    // stockage des données dans le localstorage

    function addToCart() {
        let teddyFeatures = {
            name: teddy.name,
            image: teddy.imageUrl,
            price: (teddy.price / 100).toFixed(2) + " €",
            quantity: teddyQuantityButton.value,
            color: teddyColorButton.value
        }

        let teddyFeatures_json = JSON.stringify(teddyFeatures);
        localStorage.setItem(idTeddy, teddyFeatures_json);
    }

    teddyOrderButton.addEventListener("click", addToCart);

}





