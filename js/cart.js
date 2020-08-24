// Récupération des éléments du DOM

let main = document.querySelector("main");

// Création des nouveaux éléments du DOM

/* panier */

let cartBox = document.createElement("section");
cartBox.classList.add("cartBox");
main.appendChild(cartBox);

let cartTitle = document.createElement("h2");
cartTitle.classList.add("cartTitle");
cartBox.appendChild(cartTitle);
cartTitle.textContent = "Votre panier";

let cartSubtitlesBox = document.createElement("div");
cartSubtitlesBox.classList.add("cartSubtitlesBox");
cartBox.appendChild(cartSubtitlesBox);

let cartSubtitleProduct = document.createElement("p");
cartSubtitleProduct.classList.add("subtitleProduct");
cartSubtitlesBox.appendChild(cartSubtitleProduct);
cartSubtitleProduct.textContent = "Produit";

let cartSubtitleQuantity = document.createElement("p");
cartSubtitleQuantity.classList.add("subtitleQuantity");
cartSubtitlesBox.appendChild(cartSubtitleQuantity);
cartSubtitleQuantity.textContent = "Quantité";

let cartSubtitlePrice = document.createElement("p");
cartSubtitlePrice.classList.add("subtitlePrice");
cartSubtitlesBox.appendChild(cartSubtitlePrice);
cartSubtitlePrice.textContent = "Prix";

/* formulaire */

let formBox = document.createElement("section");
formBox.classList.add("formBox");
main.appendChild(formBox);

let formTitle = document.createElement("h2");
formTitle.classList.add("formTitle");
formBox.appendChild(formTitle);
formTitle.textContent = "Passer commande";

// Récupération des données du localstorage

let teddiesCart = Object.keys(localStorage);
console.log(teddiesCart);

// Affichage du panier

for(let teddy in teddiesCart) {
    teddy = JSON.parse(localStorage.getItem(teddiesCart[teddy]));

    // création des nouveaux éléments du DOM

    let cartRecapProduct = document.createElement("div");
    cartRecapProduct.classList.add("cartRecapProduct");
    cartBox.appendChild(cartRecapProduct);

    let cartProductImage = document.createElement("img");
    cartProductImage.classList.add("cartProductImage");
    cartProductImage.setAttribute("src", teddy.image);
    cartRecapProduct.appendChild(cartProductImage);

    let cartProductName = document.createElement("p");
    cartProductName.classList.add("cartProductName");
    cartRecapProduct.appendChild(cartProductName);
    cartProductName.textContent = teddy.name;

    let cartProductColor = document.createElement("p");
    cartProductColor.classList.add("cartProductColor");
    cartRecapProduct.appendChild(cartProductColor);
    cartProductColor.textContent = teddy.color;

    let cartQuantityBloc = document.createElement("div");
    cartQuantityBloc.classList.add("cartQuantityBloc");
    cartRecapProduct.appendChild(cartQuantityBloc);

    let cartQuantityChamp = document.createElement("button");
    cartQuantityChamp.classList.add("cartQuantityChamp");
    cartQuantityChamp.setAttribute("type", "number");
    cartQuantityChamp.setAttribute("min", "1");
    cartQuantityBloc.appendChild(cartQuantityChamp);
    cartQuantityChamp.textContent = teddy.quantity;

    let cartQuantityButtonBox = document.createElement("div");
    cartQuantityButtonBox.classList.add("cartQuantityButtonBox");
    cartQuantityBloc.appendChild(cartQuantityButtonBox);

    let cartQuantityMore = document.createElement("button");
    cartQuantityMore.classList.add("cartQuantityMore");
    cartQuantityButtonBox.appendChild(cartQuantityMore);
    cartQuantityMore.textContent = " + ";

    let cartQuantityLess = document.createElement("button");
    cartQuantityLess.classList.add("cartQuantityLess");
    cartQuantityButtonBox.appendChild(cartQuantityLess);
    cartQuantityLess.textContent = " - ";

    let cartPrice = document.createElement("button");
    cartPrice.classList.add("cartPrice");
    cartPrice.setAttribute("type", "number");
    cartRecapProduct.appendChild(cartPrice);
    cartPrice.textContent = teddy.price;
}

let cartTotal = document.createElement("div");
cartTotal.classList.add("cartTotal");
cartBox.appendChild(cartTotal);

let cartTotalTitle = document.createElement("p");
cartTotalTitle.classList.add("cartTotalTitle");
cartTotal.appendChild(cartTotalTitle);
cartTotalTitle.textContent = "Total";

let cartTotalChamp = document.createElement("button");
cartTotalChamp.classList.add("cartTotalChamp");
cartTotalChamp.setAttribute("type", "number");
cartTotal.appendChild(cartTotalChamp);






