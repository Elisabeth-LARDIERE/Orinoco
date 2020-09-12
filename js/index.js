// Récupération de la liste des oursons auprès de l'API

fetch("http://localhost:3000/api/teddies")
    .then(function(response) {
        if(response.ok) {
            response.json()
                .then(function(teddies) {
                    displayTeddies(teddies);
                });
        }
    })
    .catch(function() {
        alert("erreur");
    });

// Récupération des données du localstorage

let cartCounter = JSON.parse(localStorage.getItem("cartCounter")) || 0;

// Affichage du nombre d'articles présents dans le panier sur le compteur-panier (header)

loadCartCounter();

// Affichage de la liste des oursons

let main = document.querySelector("main");

let introList = document.createElement("h2");
introList.classList.add("introList");
main.appendChild(introList);
introList.textContent = "Notre sélection d'ours en peluche faits à la main";

let teddiesList = document.createElement("ul");
teddiesList.classList.add("teddiesList");
main.appendChild(teddiesList);

function displayTeddies(teddies) {

    for(let teddy of teddies) {

        // carte de l'ourson
        let teddyBox= document.createElement("li");
        teddyBox.classList.add("teddyBox");
        teddiesList.appendChild(teddyBox);

        // nom de l'ourson
        let teddyName = document.createElement("h3");
        teddyName.classList.add("teddyName");
        teddyName.textContent = teddy.name;
        teddyBox.appendChild(teddyName);

        // lien vers la page individuelle de l'ourson
        let teddyLink = document.createElement("a");
        teddyLink.classList.add("teddyLink");
        teddyLink.setAttribute("href", "product.html?" + teddy._id);
        teddyBox.appendChild(teddyLink);

        // image de l'ourson
        let teddyImage = document.createElement("img");
        teddyImage.classList.add("teddyImage");
        teddyImage.setAttribute("src", teddy.imageUrl);
        teddyLink.appendChild(teddyImage);

        //prix de l'ourson
        let teddyPrice = document.createElement("p");
        teddyPrice.classList.add("teddyPrice");
        teddyBox.appendChild(teddyPrice);
        teddyPrice.textContent = (teddy.price / 100).toFixed(2) + " €";
    }
}
