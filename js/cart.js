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

    let cartRecap = document.createElement("div");
    cartRecap.classList.add("cartRecap");
    cartBox.appendChild(cartRecap);

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







