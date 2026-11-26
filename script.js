const listeMot = ["Cachalot", "Pétunia", "Serviette"];
let score = 0
let i =0;

const motARecopier=document.getElementById("motARecopier");
const reponse=document.getElementById("reponse");
const confirmer=document.getElementById("confirmer");
const feedback=document.getElementById("feedback");
const resultat=document.getElementById("resultat");

motARecopier.textContent = "Entrez le mot : " + listeMot[i];

confirmer.addEventListener("click", function() {

    if (reponse.value === listeMot[i]) {
        score++;

        feedback.textContent = "Sans faute !";
        feedback.className = "succes";
    } else {
        feedback.textContent = "Faute de frappe !";
        feedback.className = "erreur";
    }

    i++;

    if (i < listeMot.length) {
        motARecopier.textContent = "Entrez le mot : " + listeMot[i];
        reponse.value = "";
    } else {
        motARecopier.textContent = "Jeu terminé !";
        resultat.textContent = "Votre score est de " + score + " sur " + listeMot.length;

        reponse.disabled = true;
        confirmer.disabled = true;
    }

})
