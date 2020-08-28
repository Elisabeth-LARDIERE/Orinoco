// Récupération des éléments du DOM

let main = document.querySelector("main");

// Création des nouveaux éléments du DOM

/* panier */

let cartBloc = document.createElement("section");
cartBloc.classList.add("cartBloc");
main.appendChild(cartBloc);

let cartTitle = document.createElement("h2");
cartTitle.classList.add("cartTitle");
cartBloc.appendChild(cartTitle);
cartTitle.textContent = "Votre panier";

let cartTotal = document.createElement("div");
cartTotal.classList.add("cartTotal");
cartBloc.appendChild(cartTotal);

let cartTotalTitle = document.createElement("p");
cartTotalTitle.classList.add("cartTotalTitle");
cartTotal.appendChild(cartTotalTitle);
cartTotalTitle.textContent = "Total";

let cartTotalChamp = document.createElement("button");
cartTotalChamp.classList.add("cartTotalChamp");
cartTotal.appendChild(cartTotalChamp);

/* formulaire */

let formBloc = document.createElement("section");
formBloc.classList.add("formBloc");
main.appendChild(formBloc);

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
formFirstNameLabel.classList.add("formFirstName");
formFirstNameBox.appendChild(formFirstNameLabel);
formFirstNameLabel.setAttribute("for", "firstName");
formFirstNameLabel.textContent = "Prénom";

let formFirstNameChamp = document.createElement("input");
formFirstNameChamp.classList.add("formFirstNameChamp", "formChamp");
formFirstNameChamp.setAttribute("id", "firstName");
formFirstNameChamp.setAttribute("required", "required");
formFirstNameBox.appendChild(formFirstNameChamp);

let formLastNameBox = document.createElement("div");
formLastNameBox.classList.add("formLastNameBox", "formBox");
formContact.appendChild(formLastNameBox);

let formLastNameLabel = document.createElement("label");
formLastNameLabel.classList.add("formLastNameLabel");
formLastNameBox.appendChild(formLastNameLabel);
formLastNameLabel.setAttribute("for", "lastName");
formLastNameLabel.textContent = "Nom";

let formLastNameChamp = document.createElement("input");
formLastNameChamp.classList.add("formLastNameChamp", "formChamp");
formLastNameChamp.setAttribute("id", "lastName");
formLastNameChamp.setAttribute("required", "required");
formLastNameBox.appendChild(formLastNameChamp);

let formAddressBox = document.createElement("div");
formAddressBox.classList.add("formAddressBox", "formBox");
formContact.appendChild(formAddressBox);

let formAddressLabel = document.createElement("label");
formAddressLabel.classList.add("formAddressLabel");
formAddressBox.appendChild(formAddressLabel);
formAddressBox.setAttribute("for", "address");
formAddressLabel.textContent = "Adresse";

let formAddressChamp = document.createElement("input");
formAddressChamp.classList.add("formAddressChamp", "formChamp");
formAddressChamp.setAttribute("id", "address");
formAddressChamp.setAttribute("required", "required");
formAddressBox.appendChild(formAddressChamp);

let formCityBox = document.createElement("div");
formCityBox.classList.add("formCityBox", "formBox");
formContact.appendChild(formCityBox);

let formCityLabel = document.createElement("label");
formCityLabel.classList.add("formCityLabel");
formCityLabel.setAttribute("for", "city");
formCityBox.appendChild(formCityLabel);
formCityLabel.textContent = "Ville";

let formCityChamp = document.createElement("input");
formCityChamp.classList.add("formCityChamp", "formChamp");
formCityChamp.setAttribute("id", "city");
formCityChamp.setAttribute("required", "required");
formCityBox.appendChild(formCityChamp);

let formEmailBox = document.createElement("div");
formEmailBox.classList.add("formEmailBox", "formBox");
formContact.appendChild(formEmailBox);

let formEmailLabel = document.createElement("label");
formEmailLabel.classList.add("formEmailLabel");
formEmailBox.setAttribute("for", "email");
formEmailBox.appendChild(formEmailLabel);
formEmailLabel.textContent = "Email";

let formEmailChamp = document.createElement("input");
formEmailChamp.classList.add("formEmailChamp", "formChamp");
formEmailChamp.setAttribute("id", "email");
formEmailChamp.setAttribute("type", "email");
formEmailChamp.setAttribute("required", "required");
formEmailBox.appendChild(formEmailChamp);

let orderValidation = document.createElement("input");
orderValidation.classList.add("orderValidation");
orderValidation.setAttribute("type", "submit");
formBloc.appendChild(orderValidation);
orderValidation.textContent = "Valider votre commande";

// Récupération des données du localstorage

let teddiesCartId = Object.keys(localStorage);
console.log(teddiesCartId);
let total = 0;


// Affichage du panier

for (let i in teddiesCartId) {
    let teddy = JSON.parse(localStorage.getItem(teddiesCartId[i]));
    console.log(teddiesCartId[i]);

    // création des nouveaux éléments du DOM

    let cartRecap = document.createElement("div");
    cartRecap.classList.add("cartRecap");
    cartBloc.appendChild(cartRecap);

    let cartProductBox = document.createElement("div");
    cartProductBox.classList.add("cartProductBox");
    cartRecap.appendChild(cartProductBox);

    let cartProductImage = document.createElement("img");
    cartProductImage.classList.add("cartProductImage");
    cartProductImage.setAttribute("src", teddy.image);
    cartProductBox.appendChild(cartProductImage);

    let cartProductName = document.createElement("p");
    cartProductName.classList.add("cartProductName");
    cartProductBox.appendChild(cartProductName);
    cartProductName.textContent = teddy.name + " - ";

    let cartProductColor = document.createElement("p");
    cartProductColor.classList.add("cartProductColor");
    cartProductBox.appendChild(cartProductColor);
    cartProductColor.textContent = teddy.color;

    let cartQuantityBox = document.createElement("div");
    cartQuantityBox.classList.add("cartQuantityBox");
    cartRecap.appendChild(cartQuantityBox);

    let cartQuantityLess = document.createElement("button");
    cartQuantityLess.classList.add("cartQuantityLess");
    cartQuantityBox.appendChild(cartQuantityLess);
    cartQuantityLess.textContent = " - ";

    let cartQuantityChamp = document.createElement("button");
    cartQuantityChamp.classList.add("cartQuantityChamp");
    cartQuantityChamp.setAttribute("type", "number");
    cartQuantityChamp.setAttribute("min", "1");
    cartQuantityBox.appendChild(cartQuantityChamp);
    cartQuantityChamp.textContent = teddy.quantity;

    let cartQuantityMore = document.createElement("button");
    cartQuantityMore.classList.add("cartQuantityMore");
    cartQuantityBox.appendChild(cartQuantityMore);
    cartQuantityMore.textContent = " + ";

    let cartPriceBox = document.createElement("button");
    cartPriceBox.classList.add("cartPriceBox");
    cartRecap.appendChild(cartPriceBox);

    // affichage du prix pour chaque ligne d'articles

    let recapPrice = parseInt(teddy.price) * teddy.quantity;
    cartPriceBox.textContent = String((recapPrice).toFixed(2)) + " € ";

    // affichage du total

    total += recapPrice;
    cartTotalChamp.textContent = total.toFixed(2) + " € ";

    // affichage et stockage des nouvelles données si augmentation ou diminution de la quantité

    function increaseQuantity() {
        cartQuantityChamp.textContent++;
        teddy.quantity++;
        localStorage.setItem(teddiesCartId[i], JSON.stringify(teddy));
        recapPrice = parseInt(teddy.price) * teddy.quantity;
        cartPriceBox.textContent = String((recapPrice).toFixed(2)) + " € ";
        total += parseInt(teddy.price);
        cartTotalChamp.textContent = total.toFixed(2) + " € ";

    }

    cartQuantityMore.addEventListener("click", increaseQuantity);

    function decreaseQuantity() {
        if (cartQuantityChamp.textContent <= 1) {
            cartQuantityChamp.textContent = "1";
        } else {
            cartQuantityChamp.textContent--;
            teddy.quantity--;
            localStorage.setItem(teddiesCartId[i], JSON.stringify(teddy));
            recapPrice = parseInt(teddy.price) * teddy.quantity;
            cartPriceBox.textContent = String((recapPrice).toFixed(2)) + " € ";
            total -= parseInt(teddy.price);
            cartTotalChamp.textContent = total.toFixed(2) + " € ";
        }
    }

    cartQuantityLess.addEventListener("click", decreaseQuantity);
}

// Formulaire

function addContact() {
    let contact = {
        firstName: formFirstNameChamp.value,
        lastName: formLastNameChamp.value,
        address: formAddressChamp.value,
        city: formCityChamp.value,
        email: formEmailChamp.value
    }

    let contact_json = JSON.stringify(contact);
    localStorage.setItem("contact", contact_json);
}

orderValidation.addEventListener("click", addContact);




