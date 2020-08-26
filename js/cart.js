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
cartTotalChamp.setAttribute("type", "number");
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
formFirstNameLabel.textContent = "Prénom";

let formFirstNameChamp = document.createElement("input");
formFirstNameChamp.classList.add("formFirstNameChamp", "formChamp");
formFirstNameBox.appendChild(formFirstNameChamp);

let formLastNameBox = document.createElement("div");
formLastNameBox.classList.add("formLastNameBox", "formBox");
formContact.appendChild(formLastNameBox);

let formLastNameLabel = document.createElement("label");
formLastNameLabel.classList.add("formLastNameLabel");
formLastNameBox.appendChild(formLastNameLabel);
formLastNameLabel.textContent = "Nom";

let formLastNameChamp = document.createElement("input");
formLastNameChamp.classList.add("formLastNameChamp", "formChamp");
formLastNameBox.appendChild(formLastNameChamp);

let formAddressBox = document.createElement("div");
formAddressBox.classList.add("formAddressBox", "formBox");
formContact.appendChild(formAddressBox);

let formAddressLabel = document.createElement("label");
formAddressLabel.classList.add("formAddressLabel");
formAddressBox.appendChild(formAddressLabel);
formAddressLabel.textContent = "Adresse";

let formAddressChamp = document.createElement("input");
formAddressChamp.classList.add("formAddressChamp", "formChamp");
formAddressBox.appendChild(formAddressChamp);

let formCityBox = document.createElement("div");
formCityBox.classList.add("formCityBox", "formBox");
formContact.appendChild(formCityBox);

let formCityLabel = document.createElement("label");
formCityLabel.classList.add("formCityLabel");
formCityBox.appendChild(formCityLabel);
formCityLabel.textContent = "Ville";

let formCityChamp = document.createElement("input");
formCityChamp.classList.add("formCityChamp", "formChamp");
formCityBox.appendChild(formCityChamp);

let formEmailBox = document.createElement("div");
formEmailBox.classList.add("formEmailBox", "formBox");
formContact.appendChild(formEmailBox);

let formEmailLabel = document.createElement("label");
formEmailLabel.classList.add("formEmailLabel");
formEmailBox.appendChild(formEmailLabel);
formEmailLabel.textContent = "Email";

let formEmailChamp = document.createElement("input");
formEmailChamp.classList.add("formEmailChamp", "formChamp");
formEmailBox.appendChild(formEmailChamp);

let orderValidation = document.createElement("button");
orderValidation.classList.add("orderValidation");
formBloc.appendChild(orderValidation);
orderValidation.textContent = "Valider votre commande";

// Récupération des données du localstorage

let teddiesCart = Object.keys(localStorage);
console.log(teddiesCart);

// Affichage du panier

for(let teddy in teddiesCart) {
    teddy = JSON.parse(localStorage.getItem(teddiesCart[teddy]));

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
    cartPriceBox.setAttribute("type", "number");
    cartRecap.appendChild(cartPriceBox);
    let recapPrice = parseInt(teddy.price) * teddy.quantity;
    cartPriceBox.textContent = String((recapPrice).toFixed(2)) + " € ";

    function increaseQuantity() {
        let newQuantityMore = cartQuantityChamp.textContent++;
        let newPriceMore = (parseInt(teddy.price) * (newQuantityMore+1));
        cartPriceBox.textContent = String((newPriceMore).toFixed(2)) + " € ";
        console.log(newPriceMore);
    }

    cartQuantityMore.addEventListener("click", increaseQuantity);

    function decreaseQuantity() {
        let newQuantityLess = cartQuantityChamp.textContent--;
        let newPriceLess = (parseInt(teddy.price) * (newQuantityLess-1));
        cartPriceBox.textContent = String((newPriceLess).toFixed(2)) + " € ";
        console.log(newPriceLess);
    }
    cartQuantityLess.addEventListener("click", decreaseQuantity);
}









