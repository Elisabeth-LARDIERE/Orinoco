// Récupération du localstorage

let teddyCart = JSON.parse(localStorage.getItem(idTeddy));

// Récupération des éléments existants du DOM

let main = document.querySelector("main");

// Création des nouveaux éléments du DOM

let cart = document.createElement("section");
let introCart = document.createElement("h2");
let cartTeddy = document.createElement("div");
let cartTeddyRecap = document.createElement("div");
let cartTeddyQuantity = document.createElement("div");
let cartTeddyQuantityTitle = document.createElement("h4");
let cartTotalBox = document.createElement("div");
let cartTotalTitle = document.createElement("h4");

let form = document.createElement("section");
let introForm = document.createElement("h2");
let firstName = document.createElement("div");
let lastName = document.createElement("div");
let address = document.createElement("div");
let city = document.createElement("div");
let email = document.createElement("div");

// Ajout d'attributs aux nouveaux éléments du DOM

cart.classList.add("cart");
introCart.classList.add("introCart");
cartTeddy.classList.add("cartTeddy");
cartTeddyRecap.classList.add("cartTeddyRecap");
cartTeddyQuantity.classList.add("cartTeddyQuantity");
cartTeddyQuantityTitle.classList.add("cartTeddyQuantityTitle", "title");
cartTotalBox.classList.add("cartTotalBox");
cartTotalTitle.classList.add("cartTotalTitle");

form.classList.add("form");
introForm.classList.add("introForm");
firstName.classList.add("firstName");
lastName.classList.add("lastName");
address.classList.add("address");
city.classList.add("city");
email.classList.add("email")

// Intégration des nouveaux éléments au DOM

main.appendChild(cart);
cart.appendChild(introCart);
cart.appendChild(cartTeddy);
cartTeddy.appendChild(cartTeddyRecap);
cartTeddy.appendChild(cartTeddyQuantity);
cartTeddyQuantity.appendChild(cartTeddyQuantityTitle);
cart.appendChild(cartTotalBox);
cartTotalBox.appendChild(cartTotalTitle);

main.appendChild(form);
form.appendChild(introForm);
form.appendChild(firstName);
form.appendChild(lastName);
form.appendChild(address);
form.appendChild(city);
form.appendChild(email);

// Ajout de contenu

introCart.textContent = "Votre panier";
cartTeddyQuantityTitle.textContent = "Quantité";
cartTotalTitle.textContent = "Total";

introForm.textContent = "Passer votre commande";


for(let article in teddyCart) {

// Création des nouveaux éléments du DOM

    let cartTeddyImage = document.createElement("img");
    let cartTeddyName = document.createElement("p");
    let cartTeddyColor = document.createElement("p");

    let cartTeddyQuantityButton = document.createElement("input");
    let cartTeddyPrice = document.createElement("input");
    let cartTeddyTrash = document.createElement("button");

    let cartTotal = document.createElement("input");


    let firstNameLabel = document.createElement("label");
    let firstNameInput = document.createElement("input");

    let lastNameLabel = document.createElement("label");
    let lastNameInput = document.createElement("input");

    let addressLabel = document.createElement("label");
    let addressInput = document.createElement("input");

    let cityLabel = document.createElement("label");
    let cityInput = document.createElement("input");

    let emailLabel = document.createElement("label");
    let emailInput = document.createElement("input");

    let validation = document.createElement("button");


// Ajout d'attributs aux nouveaux éléments du DOM


    cartTeddyImage.classList.add("cartTeddyImage");
    cartTeddyName.classList.add("cartTeddyName");
    cartTeddyColor.classList.add("cartTeddyColor");

    cartTeddyQuantityButton.classList.add("cartTeddyQuantityButton", "button");
    cartTeddyQuantityButton.setAttribute("type", "number");
    cartTeddyQuantityButton.setAttribute("min", "1");
    cartTeddyPrice.classList.add("cartTeddyPrice");
    cartTeddyTrash.classList.add("cartTeddyTrash");

    cartTotal.classList.add("cartTotal");


    firstNameLabel.classList.add("firstNameLabel");
    firstNameInput.classList.add("firstNameInput");

    lastNameLabel.classList.add("lastNameLabel");
    lastNameInput.classList.add("lastNameInput");

    addressLabel.classList.add("addressLabel");
    addressInput.classList.add("addressInput");

    cityLabel.classList.add("cityLabel");
    cityInput.classList.add("cityInput");

    emailLabel.classList.add("emailLabel");
    emailInput.classList.add("emailInput");
    validation.classList.add("validation");

// Intégration des nouveaux éléments au DOM


    cartTeddyRecap.appendChild(cartTeddyImage);
    cartTeddyRecap.appendChild(cartTeddyName);
    cartTeddyRecap.appendChild(cartTeddyColor);

    cartTeddyQuantity.appendChild(cartTeddyQuantityButton);
    cartTeddy.appendChild(cartTeddyPrice);
    cartTeddy.appendChild(cartTeddyTrash);

    cartTotalBox.appendChild(cartTotal);


    firstName.appendChild(firstNameLabel);
    firstName.appendChild(firstNameInput);
    lastName.appendChild(lastNameLabel);
    lastName.appendChild(lastNameInput);

    address.appendChild(addressLabel);
    address.appendChild(addressInput);

    city.appendChild(cityLabel);
    city.appendChild(cityInput);

    email.appendChild(emailLabel);
    email.appendChild(emailInput);
    form.appendChild(validation);


// Ajout de contenu


    cartTeddyName = localStorage.getItem(name);

    cartTeddyTrash.textContent = "Supprimer";

    firstNameLabel.textContent = "Prénom";
    lastNameLabel.textContent = "Nom";
    addressLabel.textContent = "Adresse";
    cityLabel.textContent = "Ville";
    emailLabel.textContent = "Email";
    validation.textContent = "Valider votre commande";
}






