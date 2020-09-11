// Récupération de la liste des oursons auprès de l'API

fetch("http://localhost:3000/api/teddies")
    .then(function(response) {
        if(response.ok) {
            response.json()
                .then(function(teddies) {
                    displayTeddies(teddies);
                    loadCartCounter();
                });
        }
    })
    .catch(function() {
        alert("erreur");
    });

// Récupération des données du localstorage

let cartCounter = JSON.parse(localStorage.getItem("cartCounter")) || 0;

// Affichage du nombre d'articles dans le panier sur le compteur-panier (header)

let cartCounterNumber = document.getElementsByClassName("cartCounterNumber");

function loadCartCounter() {

    for (let i of cartCounterNumber) {
        i.textContent = cartCounter;
    }
}

// Affichage de la liste des oursons avec le nom, l'image, le lien vers la fiche individuelle et le prix pour chacun

let main = document.querySelector("main");

let introList = document.createElement("h2");
let teddiesList = document.createElement("ul");


function displayTeddies(teddies) {

    for(let teddy of teddies) {

        let teddyBox= document.createElement("li");
        let teddyName = document.createElement("h3");
        let teddyImage = document.createElement("img");
        let teddyLink = document.createElement("a");
        let teddyPrice = document.createElement("p");


        introList.classList.add("introList");
        teddiesList.classList.add("teddiesList");
        teddyBox.classList.add("teddyBox");
        teddyName.classList.add("teddyName");
        teddyImage.classList.add("teddyImage");
        teddyImage.setAttribute("src", teddy.imageUrl);
        teddyLink.classList.add("teddyLink");
        teddyLink.setAttribute("href", "product.html?" + teddy._id);
        teddyPrice.classList.add("teddyPrice");


        main.appendChild(introList);
        main.appendChild(teddiesList);
        teddiesList.appendChild(teddyBox);
        teddyBox.appendChild(teddyName);
        teddyBox.appendChild(teddyLink);
        teddyBox.appendChild(teddyPrice);
        teddyLink.appendChild(teddyImage);

        introList.textContent = "Notre sélection d'ours en peluche faits à la main";
        teddyName.textContent = teddy.name;
        teddyPrice.textContent = (teddy.price / 100).toFixed(2) + " €";
    }
}
