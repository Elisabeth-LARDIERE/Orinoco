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

// Récupération des éléments existants du DOM

let main = document.querySelector("main");

// Création des nouveaux éléments du DOM

// section vue détaillée et description de l'ours

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
teddyOrderButton.appendChild(teddyOrderButtonLogo);

// Affichage de l'ourson sélectionné et des options choisies (couleurs / quantité) et ajout au panier

function displayCard(teddy) {

    for (let param in teddy) {

        // section vue détaillée et description de l'ours

        teddyNameCard.textContent = teddy.name;

        teddyImageCard.setAttribute("src", teddy.imageUrl);

        teddyText.textContent = teddy.description;

        teddyPriceCard.textContent = (teddy.price / 100).toFixed(2) + " €";

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

        let teddies = JSON.parse(localStorage.getItem("products")) || [];

        let newTeddy = {
            id: idTeddy,
            name: teddy.name,
            image: teddy.imageUrl,
            price: (teddy.price / 100).toFixed(2) + " €",
            quantity: teddyQuantityButton.value,
            color: teddyColorButton.value
        };

        if (teddies.length === 0) {
            teddies.push(newTeddy);
            localStorage.setItem("products", JSON.stringify(teddies));
        } else if (teddies.length > 0) {
            for (let i of teddies) {
                if (i.name !== newTeddy.name) {
                    teddies.push(newTeddy);
                    localStorage.setItem("products", JSON.stringify(teddies));
                } else if (i.name === newTeddy.name) {
                    i.quantity = i.quantity.replace(i.quantity, newTeddy.quantity);
                    localStorage.setItem("products", JSON.stringify(teddies));
                }
            }
        }
    }
    teddyOrderButton.addEventListener("click", addToCart);
}




