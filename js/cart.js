// Récupération des données du localstorage

let teddies = JSON.parse(localStorage.getItem("products"));
let cartCounter = JSON.parse(localStorage.getItem("cartCounter")) || 0;

// Affichage du nombre d'articles dans le panier sur le compteur-panier (header)

loadCartCounter();

// Création des éléments génériques de la page panier / validation de commande

let main = document.querySelector("main");

// panier //

let cartAndFormBox = document.createElement("div");
cartAndFormBox.classList.add("cartAndFormBox");
main.appendChild(cartAndFormBox);

let cartBloc = document.createElement("section");
cartBloc.classList.add("cartBloc");
cartAndFormBox.appendChild(cartBloc);

let cartTitle = document.createElement("h2");
cartTitle.classList.add("cartTitle");
cartBloc.appendChild(cartTitle);
cartTitle.textContent = "Votre panier";

let cartRecapBloc = document.createElement("div");
cartRecapBloc.classList.add("cartRecapBloc");
cartBloc.appendChild(cartRecapBloc);

let cartTotal = document.createElement("div");
cartTotal.classList.add("cartTotal");
cartBloc.appendChild(cartTotal);

let cartTotalTitle = document.createElement("p");
cartTotalTitle.classList.add("cartTotalTitle");
cartTotal.appendChild(cartTotalTitle);
cartTotalTitle.textContent = "Total";

let cartTotalChamp = document.createElement("button");
cartTotalChamp.classList.add("cartTotalChamp", "cartButton");
cartTotalChamp.setAttribute("type", "number");
cartTotal.appendChild(cartTotalChamp);

// formulaire //

let formBloc = document.createElement("section");
formBloc.classList.add("formBloc");
cartAndFormBox.appendChild(formBloc);

let formTitle = document.createElement("h2");
formTitle.classList.add("formTitle");
formBloc.appendChild(formTitle);
formTitle.textContent = "Passer commande";

let formContact = document.createElement("div");
formContact.classList.add("formContact");
formBloc.appendChild(formContact);

let formFirstNameBox = document.createElement("div");
formFirstNameBox.classList.add("formFirstNameBox", "formBox");
formContact.appendChild(formFirstNameBox);

let formFirstNameLabel = document.createElement("label");
formFirstNameLabel.classList.add("formFirstName", "formLabel");
formFirstNameBox.appendChild(formFirstNameLabel);
formFirstNameLabel.setAttribute("for", "firstName");
formFirstNameLabel.textContent = "Prénom";

let formFirstNameChampBox = document.createElement("div");
formFirstNameChampBox.classList.add("formFirstNameChampBox", "formChampBox");
formFirstNameBox.appendChild(formFirstNameChampBox);

let formFirstNameChampInput = document.createElement("input");
formFirstNameChampInput.classList.add("formFirstNameChampInput", "formChampInput");
formFirstNameChampInput.setAttribute("id", "firstName");
formFirstNameChampInput.setAttribute("type", "text");
formFirstNameChampInput.setAttribute("required", "");
formFirstNameChampBox.appendChild(formFirstNameChampInput);

let formFirstNameChampAlert = document.createElement("p");
formFirstNameChampAlert.classList.add("formFirstNameChampAlert", "formChampAlert");
formFirstNameChampBox.appendChild(formFirstNameChampAlert);

let formLastNameBox = document.createElement("div");
formLastNameBox.classList.add("formLastNameBox", "formBox");
formContact.appendChild(formLastNameBox);

let formLastNameLabel = document.createElement("label");
formLastNameLabel.classList.add("formLastNameLabel", "formLabel");
formLastNameBox.appendChild(formLastNameLabel);
formLastNameLabel.setAttribute("for", "lastName");
formLastNameLabel.textContent = "Nom";

let formLastNameChampBox = document.createElement("div");
formLastNameChampBox.classList.add("formLastNameChampBox", "formChampBox");
formLastNameBox.appendChild(formLastNameChampBox);

let formLastNameChampInput = document.createElement("input");
formLastNameChampInput.classList.add("formLastNameChampInput", "formChampInput");
formLastNameChampInput.setAttribute("id", "lastName");
formLastNameChampInput.setAttribute("type", "text");
formLastNameChampInput.setAttribute("required", "");
formLastNameChampBox.appendChild(formLastNameChampInput);

let formLastNameChampAlert = document.createElement("p");
formLastNameChampAlert.classList.add("formLastNameChampAlert", "formChampAlert");
formLastNameChampBox.appendChild(formLastNameChampAlert);

let formAddressBox = document.createElement("div");
formAddressBox.classList.add("formAddressBox", "formBox");
formContact.appendChild(formAddressBox);

let formAddressLabel = document.createElement("label");
formAddressLabel.classList.add("formAddressLabel", "formLabel");
formAddressBox.setAttribute("for", "address");
formAddressBox.appendChild(formAddressLabel);
formAddressLabel.textContent = "Adresse";

let formAddressChampBox = document.createElement("div");
formAddressChampBox.classList.add("formAddressChampBox", "formChampBox");
formAddressBox.appendChild(formAddressChampBox);

let formAddressChampInput = document.createElement("input");
formAddressChampInput.classList.add("formAddressChampInput", "formChampInput");
formAddressChampInput.setAttribute("id", "address");
formAddressChampInput.setAttribute("required", "");
formAddressChampBox.appendChild(formAddressChampInput);

let formAddressChampAlert = document.createElement("p");
formAddressChampAlert.classList.add("formAddressChampAlert", "formChampAlert");
formAddressChampBox.appendChild(formAddressChampAlert);

let formCityBox = document.createElement("div");
formCityBox.classList.add("formCityBox", "formBox");
formContact.appendChild(formCityBox);

let formCityLabel = document.createElement("label");
formCityLabel.classList.add("formCityLabel", "formLabel");
formCityLabel.setAttribute("for", "city");
formCityBox.appendChild(formCityLabel);
formCityLabel.textContent = "Ville";

let formCityChampBox = document.createElement("div");
formCityChampBox.classList.add("formCityChampBox", "formChampBox");
formCityBox.appendChild(formCityChampBox);

let formCityChampInput = document.createElement("input");
formCityChampInput.classList.add("formCityChampInput", "formChampInput");
formCityChampInput.setAttribute("id", "city");
formCityChampInput.setAttribute("required", "");
formCityChampBox.appendChild(formCityChampInput);

let formCityChampAlert = document.createElement("p");
formCityChampAlert.classList.add("formCityChampAlert", "formChampAlert");
formCityChampBox.appendChild(formCityChampAlert);

let formEmailBox = document.createElement("div");
formEmailBox.classList.add("formEmailBox", "formBox");
formContact.appendChild(formEmailBox);

let formEmailLabel = document.createElement("label");
formEmailLabel.classList.add("formEmailLabel", "formLabel");
formEmailBox.setAttribute("for", "email");
formEmailBox.appendChild(formEmailLabel);
formEmailLabel.textContent = "Email";

let formEmailChampBox = document.createElement("div");
formEmailChampBox.classList.add("formEmailChampBox", "formChampBox");
formEmailBox.appendChild(formEmailChampBox);

let formEmailChampInput = document.createElement("input");
formEmailChampInput.classList.add("formEmailChampInput", "formChampInput");
formEmailChampInput.setAttribute("id", "email");
formEmailChampInput.setAttribute("required", "");
formEmailChampBox.appendChild(formEmailChampInput);

let formEmailChampAlert = document.createElement("p");
formEmailChampAlert.classList.add("formCityChampAlert", "formChampAlert");
formEmailChampBox.appendChild(formEmailChampAlert);

let contactValidation = document.createElement("button");
contactValidation.classList.add("contactValidation");
formContact.appendChild(contactValidation);
contactValidation.textContent = "Enregistrer vos coordonnées";

let orderValidation = document.createElement("input");
orderValidation.classList.add("orderValidation");
orderValidation.setAttribute("type", "submit");
orderValidation.setAttribute("value", "Valider votre commande");
orderValidation.setAttribute("disabled", "disabled");
main.appendChild(orderValidation);

// Si panier est vide : changement titre, suppression champ Total, désactivation champs de formulaire et boutons de validation

if (cartCounter === 0) {
    cartTitle.textContent = "Votre panier est vide !";
    cartTotal.textContent = "";
    let formChampInput = document.getElementsByClassName("formChampInput");
    for (let i of formChampInput) {
        i.setAttribute("disabled", "disabled");
    }
    contactValidation.setAttribute("disabled", "disabled");
}

// Affichage du panier personnalisé

customCart();

function customCart() {

    let total = 0;

// une ligne-produit résumé par ourson au panier

    for (let teddy of teddies) {

        let cartRecap = document.createElement("div");
        cartRecap.classList.add("cartRecap");
        cartRecapBloc.appendChild(cartRecap);

        let cartProductBox = document.createElement("div");
        cartProductBox.classList.add("cartProductBox");
        cartRecap.appendChild(cartProductBox);

        let cartProductImage = document.createElement("img");
        cartProductImage.classList.add("cartProductImage");
        cartProductImage.setAttribute("src", teddy.image);
        cartProductImage.setAttribute("alt", String(teddy.name) + " en photo");
        cartProductBox.appendChild(cartProductImage);

        let cartProductName = document.createElement("p");
        cartProductName.classList.add("cartProductName");
        cartProductBox.appendChild(cartProductName);
        cartProductName.textContent = teddy.name;

        let cartQuantityBox = document.createElement("div");
        cartQuantityBox.classList.add("cartQuantityBox", "cartButton");
        cartRecap.appendChild(cartQuantityBox);

        let cartQuantityLess = document.createElement("button");
        cartQuantityLess.classList.add("cartQuantityLess", "cartButton");
        cartQuantityBox.appendChild(cartQuantityLess);
        cartQuantityLess.textContent = " - ";

        let cartQuantityChamp = document.createElement("button");
        cartQuantityChamp.classList.add("cartQuantityChamp", "cartButton");
        cartQuantityChamp.setAttribute("type", "number");
        cartQuantityChamp.setAttribute("min", "1");
        cartQuantityBox.appendChild(cartQuantityChamp);
        cartQuantityChamp.textContent = teddy.quantity;

        let cartQuantityMore = document.createElement("button");
        cartQuantityMore.classList.add("cartQuantityMore", "cartButton");
        cartQuantityBox.appendChild(cartQuantityMore);
        cartQuantityMore.textContent = " + ";

        let cartPriceBox = document.createElement("button");
        cartPriceBox.classList.add("cartPriceBox", "cartButton");
        cartPriceBox.setAttribute("type", "number");
        cartRecap.appendChild(cartPriceBox);

        let cartTrashBox = document.createElement("button");
        cartTrashBox.classList.add("cartTrashBox", "cartButton");
        cartRecap.appendChild(cartTrashBox);

        let cartTrashBoxLogo = document.createElement("i");
        cartTrashBoxLogo.classList.add("fas", "fa-trash-alt");
        cartTrashBox.appendChild(cartTrashBoxLogo);

        // affichage du prix pour chaque ligne d'articles

        let recapPrice = parseInt(teddy.price) * teddy.quantity;
        cartPriceBox.textContent = String((recapPrice).toFixed(2)) + " € ";

        // affichage du total

        total += recapPrice;
        cartTotalChamp.textContent = total.toFixed(2) + " € ";

        // affichage et stockage des nouvelles données si augmentation ou diminution de la quantité, ou si suppression d'un produit

        function increaseQuantity() {
            cartQuantityChamp.textContent++;
            teddy.quantity++;
            localStorage.setItem("products", JSON.stringify(teddy));
            recapPrice = parseInt(teddy.price) * teddy.quantity;
            cartPriceBox.textContent = String((recapPrice).toFixed(2)) + " € ";
            total += parseInt(teddy.price);
            cartTotalChamp.textContent = total.toFixed(2) + " € ";
            updateCounterCart();
        }

        cartQuantityMore.addEventListener("click", increaseQuantity);

        function decreaseQuantity() {
            if (cartQuantityChamp.textContent <= 1) {
                cartQuantityChamp.textContent = "1";
            } else {
                cartQuantityChamp.textContent--;
                teddy.quantity--;
                localStorage.setItem("products", JSON.stringify(teddy));
                recapPrice = parseInt(teddy.price) * teddy.quantity;
                cartPriceBox.textContent = String((recapPrice).toFixed(2)) + " € ";
                total -= parseInt(teddy.price);
                cartTotalChamp.textContent = total.toFixed(2) + " € ";
            }
            updateCounterCart();
        }

        cartQuantityLess.addEventListener("click", decreaseQuantity);

        function removeProduct() {
            if (cartRecapBloc.innerHTML !== "") {
                total -= recapPrice;
                cartTotalChamp.textContent = total.toFixed(2) + " € ";
                cartRecap.remove();
                if (cartProductName.textContent === teddy.name) {
                    teddies = teddies.filter(item => item !== teddy);
                }
                if (teddies.length === 0) {
                    cartTotal.textContent = "";
                    cartTitle.textContent = "Votre panier est vide !";
                    let formChampInput = document.getElementsByClassName("formChampInput");
                    for (let i of formChampInput) {
                        i.setAttribute("disabled", "disabled");
                    }
                    contactValidation.setAttribute("disabled", "disabled");
                }
            }
            localStorage.setItem("products", JSON.stringify(teddies));
            updateCounterCart();
        }

        cartTrashBox.addEventListener("click", removeProduct);
    }
}

// Gestion du formulaire

// création d'un contact

function addContact() {
    let contact = {
        firstName: formFirstNameChampInput.value,
        lastName: formLastNameChampInput.value,
        address: formAddressChampInput.value,
        city: formCityChampInput.value,
        email: formEmailChampInput.value
    }

    let contact_json = JSON.stringify(contact);
    localStorage.setItem("contact", contact_json);
}

// conditions de validation du formulaire de contact

let textValidation = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+[-',\s]?/;
let addressValidation = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+[-',\s]?/;
let emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validForm() {

    formFirstNameChampInput.addEventListener("focus", function () {
        formFirstNameChampAlert.textContent = "";
    });
    if (formFirstNameChampInput.validity.valueMissing) {
        formFirstNameChampAlert.textContent = "Veuillez renseigner votre prénom";

    } else if (textValidation.test(formFirstNameChampInput.value) === false) {
        formFirstNameChampAlert.textContent = "Saisie incorrecte";
    }

    formLastNameChampInput.addEventListener("focus", function () {
        formLastNameChampAlert.textContent = "";
    });
    if (formLastNameChampInput.validity.valueMissing) {
        formLastNameChampAlert.textContent = "Veuillez renseigner votre nom";

    } else if (textValidation.test(formLastNameChampInput.value) === false) {
        formLastNameChampAlert.textContent = "Saisie incorrecte";
    }

    formAddressChampInput.addEventListener("focus", function () {
        formAddressChampAlert.textContent = "";
    });
    if (formAddressChampInput.validity.valueMissing) {
        formAddressChampAlert.textContent = "Veuillez renseigner votre adresse";

    } else if (addressValidation.test(formAddressChampInput.value) === false) {
        formAddressChampAlert.textContent = "Saisie incorrecte";
    }

    formCityChampInput.addEventListener("focus", function () {
        formCityChampAlert.textContent = "";
    });
    if (formCityChampInput.validity.valueMissing) {
        formCityChampAlert.textContent = "Veuillez renseigner votre ville";

    } else if (textValidation.test(formCityChampInput.value) === false) {
        formCityChampAlert.textContent = "Saisie incorrecte";
    }

    formEmailChampInput.addEventListener("focus", function () {
        formEmailChampAlert.textContent = "";
    });
    if (formEmailChampInput.validity.valueMissing) {
        formEmailChampAlert.textContent = "Veuillez renseigner votre email";

    } else if (emailValidation.test(formEmailChampInput.value) === false) {
        formEmailChampAlert.textContent = "Saisie incorrecte";

    } else {
        addContact();
        alert("coordonnées validées !");
        orderValidation.disabled = false;
    }
}

contactValidation.addEventListener("click", validForm);

// Validation et envoi de commande au serveur

function sendOrder() {

    let productsId = [];
    for (let teddy of teddies) {
        let idTeddy = teddy.id;
        productsId.push(idTeddy);
    }
    let productsId_json = JSON.stringify(productsId);
    localStorage.setItem("products", productsId_json);

    let products = JSON.parse(localStorage.getItem("products"));
    let contact = JSON.parse(localStorage.getItem("contact"));

    fetch("http://localhost:3000/api/teddies/order", {
        method: "POST",
        body: JSON.stringify({contact: contact, products: products}),
        headers: {"Content-Type": "application/json"}
    })
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        finalValidation(data);
                    })
            }
        })
        .catch(function () {
            alert("erreur");
        })
}

orderValidation.addEventListener("click", sendOrder);

function finalValidation(data) {

    localStorage.setItem("orderId", JSON.stringify(data.orderId));
    localStorage.setItem("totalPrice", JSON.stringify(cartTotalChamp.textContent));
    localStorage.removeItem("products");
    localStorage.removeItem("cartCounter");
    updateCounterCart();
    let formChampInput = document.getElementsByClassName("formChampInput");
    for (let i of formChampInput) {
        i.value = "";
    }
    let cartRecapBloc = document.getElementsByClassName("cartRecapBloc");
    for (let i = 0; i < cartRecapBloc.length; i++) {
        cartRecapBloc[i].innerHTML = "";
    }
    cartTotal.innerHTML = "";
    location.href = "order.html";
}
