// Récupération des éléments existants du DOM

let main = document.querySelector("main");

// Création des nouveaux éléments du DOM

let cart = document.createElement("section");
let introCart = document.createElement("h2");
let cartTeddy = document.createElement("div");
let cartTeddyRecap = document.createElement("div");
let cartTeddyImage = document.createElement("img");
let cartTeddyNameAndColor = document.createElement("p");
let cartTeddyQuantity = document.createElement("div");
let cartTeddyQuantityTitle = document.createElement("h4");
let cartTeddyQuantityButton = document.createElement("input");
let cartTeddyPrice = document.createElement("input");
let cartTeddyTrash = document.createElement("button");
let cartTotalBox = document.createElement("div");
let cartTotalTitle = document.createElement("h4");
let cartTotal = document.createElement("input");

let form = document.createElement("section");
let introForm = document.createElement("h2");
let firstName = document.createElement("div");
let firstNameLabel = document.createElement("label");
let firstNameInput = document.createElement("input");
let lastName = document.createElement("div");
let lastNameLabel = document.createElement("label");
let lastNameInput = document.createElement("input");
let address = document.createElement("div");
let addressLabel = document.createElement("label");
let addressInput = document.createElement("input");
let city = document.createElement("div");
let cityLabel = document.createElement("label");
let cityInput = document.createElement("input");
let email = document.createElement("div");
let emailLabel = document.createElement("label");
let emailInput = document.createElement("input");
let validation = document.createElement("button");



// Ajout d'attributs aux nouveaux éléments du DOM

cart.classList.add("cart");
introCart.classList.add("introCart");
cartTeddy.classList.add("cartTeddy");
cartTeddyRecap.classList.add("cartTeddyRecap");
cartTeddyImage.classList.add("cartTeddyImage");
cartTeddyNameAndColor.classList.add("cartTeddyNameAndColor");
cartTeddyQuantity.classList.add("cartTeddyQuantity");
cartTeddyQuantityTitle.classList.add("cartTeddyQuantityTitle");
cartTeddyQuantityButton.classList.add("cartTeddyQuantityButton");
cartTeddyQuantityButton.setAttribute("type", "number");
cartTeddyQuantityButton.setAttribute("min", "1");
cartTeddyPrice.classList.add("cartTeddyPrice");
cartTeddyTrash.classList.add("cartTeddyTrash");
cartTotalBox.classList.add("cartTotalBox");
cartTotalTitle.classList.add("cartTotalTitle");
cartTotal.classList.add("cartTotal");

form.classList.add("form");
introForm.classList.add("introForm");
firstName.classList.add("firstName");
firstNameLabel.classList.add("firstNameLabel");
firstNameInput.classList.add("firstNameInput");
lastName.classList.add("lastName");
lastNameLabel.classList.add("lastNameLabel");
lastNameInput.classList.add("lastNameInput");
address.classList.add("address");
addressLabel.classList.add("addressLabel");
addressInput.classList.add("addressInput");
city.classList.add("city");
cityLabel.classList.add("cityLabel");
cityInput.classList.add("cityInput");
email.classList.add("email");
emailLabel.classList.add("emailLabel");
emailInput.classList.add("emailInput");
validation.classList.add("validation");

// Intégration des nouveaux éléments au DOM

main.appendChild(cart);
cart.appendChild(introCart);
cart.appendChild(cartTeddy);
cartTeddy.appendChild(cartTeddyRecap);
cartTeddyRecap.appendChild(cartTeddyImage);
cartTeddyRecap.appendChild(cartTeddyNameAndColor);
cartTeddy.appendChild(cartTeddyQuantity);
cartTeddyQuantity.appendChild(cartTeddyQuantityTitle);
cartTeddyQuantity.appendChild(cartTeddyQuantityButton);
cartTeddy.appendChild(cartTeddyPrice);
cartTeddy.appendChild(cartTeddyTrash);
cart.appendChild(cartTotalBox);
cartTotalBox.appendChild(cartTotalTitle);
cartTotalBox.appendChild(cartTotal);

main.appendChild(form);
form.appendChild(introForm);
form.appendChild(firstName);
firstName.appendChild(firstNameLabel);
firstName.appendChild(firstNameInput);
form.appendChild(lastName);
lastName.appendChild(lastNameLabel);
lastName.appendChild(lastNameInput);
form.appendChild(address);
address.appendChild(addressLabel);
address.appendChild(addressInput);
form.appendChild(city);
city.appendChild(cityLabel);
city.appendChild(cityInput);
form.appendChild(email);
email.appendChild(emailLabel);
email.appendChild(emailInput);
form.appendChild(validation);


// Ajout de contenu

introCart.textContent = "Votre panier";
cartTeddyQuantityTitle.textContent = "Quantité";
cartTeddyTrash.textContent = "Supprimer";
cartTotalTitle.textContent = "Total";

introForm.textContent = "Passer votre commande";
firstNameLabel.textContent = "Prénom";
lastNameLabel.textContent = "Nom";
addressLabel.textContent = "Adresse";
cityLabel.textContent = "Ville";
emailLabel.textContent = "Email";
validation.textContent = "Valider votre commande";






