// Récupération des données du localstorage

let orderId = JSON.parse(localStorage.getItem("orderId"));
let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
let contact = JSON.parse(localStorage.getItem("contact"));

// Remise à 0 du compteur-panier

let cartCounterNumber = document.getElementsByClassName("cartCounterNumber");
for (let i = 0; i < cartCounterNumber.length; i++) {
    cartCounterNumber[i].textContent = "0";
}

// Affichage du résumé de commande : remerciements personnalisés, numéro et montant total de la commande.

let main = document.querySelector("main");

let orderSummaryBox = document.createElement("section");
orderSummaryBox.classList.add("orderSummaryBox");
main.appendChild(orderSummaryBox);

let orderThanks = document.createElement("h2");
orderThanks.classList.add("orderThanks");
orderSummaryBox.appendChild(orderThanks);
orderThanks.textContent = "Merci de votre confiance, " + contact.firstName + " ! ";

let orderSummaryDetails = document.createElement("div");
orderSummaryDetails.classList.add("orderSummaryDetails");
orderSummaryBox.appendChild(orderSummaryDetails);

let orderSummaryNumber = document.createElement("p");
orderSummaryNumber.classList.add("orderSummaryNumber");
orderSummaryDetails.appendChild(orderSummaryNumber);

let orderSummaryNumberTitle = document.createElement("span");
orderSummaryNumberTitle.classList.add("orderSummaryNumberTitle");
orderSummaryNumber.appendChild(orderSummaryNumberTitle);
orderSummaryNumberTitle.textContent = "Numéro de commande : ";

let orderSummaryNumberId = document.createElement("span");
orderSummaryNumberId.classList.add("orderSummaryNumberId");
orderSummaryNumber.appendChild(orderSummaryNumberId);
orderSummaryNumberId.textContent = orderId;

let orderSummaryTotal = document.createElement("p");
orderSummaryTotal.classList.add("orderSummaryTotal");
orderSummaryDetails.appendChild(orderSummaryTotal);

let orderSummaryTotalTitle = document.createElement("span");
orderSummaryTotalTitle.classList.add("orderSummaryTotalTitle");
orderSummaryTotal.appendChild(orderSummaryTotalTitle);
orderSummaryTotalTitle.textContent = "Montant : ";

let orderSummaryTotalPrice = document.createElement("span");
orderSummaryTotalPrice.classList.add("orderSummaryTotalPrice");
orderSummaryTotal.appendChild(orderSummaryTotalPrice);
orderSummaryTotalPrice.textContent = totalPrice;

let orderInformations = document.createElement("p");
orderInformations.classList.add("orderInformations");
orderSummaryBox.appendChild(orderInformations);
orderInformations.textContent = "Votre commande est bien enregistrée. Elle sera traitée dès réception de votre paiement.";

// Suppression des données du localStorage

localStorage.clear();