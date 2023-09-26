/**
 * @author Soane Bernon
 * @since 19.09.2023
 */

'use strict';

console.log('Test liaison JS');
/*******************************
 CHANGEMENT ARRIERE PLAN
 ******************************/

// Recuperation du body
const body = document.querySelector("body");
const listeBg = body.querySelector("#bg");
console.log(body, listeBg);

// Change l'arriere-plan
body.style.backgroundImage = `url(./img/backgrounds/${listeBg.value})`;

// Ecoute l'évenement "change"
listeBg.addEventListener("change", function() {
    body.style.backgroundImage = `url(./img/backgrounds/${listeBg.value})`;
});

/*******************************
 ENVOI DU FORMULAIRE
 ******************************/

// Recuperation du formulaire et les champs mot de passe
const formulaire = document.querySelector("form");
const txtPassword = document.querySelector("#pwd");
const txtConfirmPwd = document.querySelector("#confirm");
console.log(formulaire);

formulaire.addEventListener("submit", function(event) {
    // stopper l'envoi
    event.preventDefault();

    if(txtPassword.value.length < 3) {
        alert("Le mot de passe doit contenir au moins 3 caracteres !");
        return;
    }

    if (txtPassword !== txtConfirmPwd) {
        alert("Mots de passe différents");
        return;
    }

    alert("Compte créé avec succès")
    formulaire.submit(); // Envoie le formulaire
})