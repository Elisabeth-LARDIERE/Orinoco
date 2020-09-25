// Affichage du nombre d'articles présents dans le panier sur le compteur-panier (header)

function loadCartCounter() {
    let cartCounterNumber = document.getElementsByClassName("cartCounterNumber");
    for (let i of cartCounterNumber) {
        i.textContent = cartCounter;
    }
}

// Mise à jour du compteur-panier (header) et stockage du nombre d'articles dans le localStorage

function updateCounterCart() {

    let cartCounterNumber = document.getElementsByClassName("cartCounterNumber");

    let teddiesQuantity = [];
    for (let teddy of teddies) {
        teddiesQuantity.push(parseInt(teddy.quantity));
    }

    let teddiesQuantityTotal = 0;
    for (let i = 0; i < teddiesQuantity.length; i++) {
        teddiesQuantityTotal += teddiesQuantity[i];
    }

    for (let i of cartCounterNumber) {
        i.textContent = teddiesQuantityTotal;
    }

    localStorage.setItem("cartCounter", JSON.stringify(teddiesQuantityTotal));
}