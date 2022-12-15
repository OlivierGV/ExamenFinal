// Déclaration des variables
let valeurDeSelect = 20; // Le d20 est sélectionné par défaut

const listeDes = document.querySelectorAll('.de'); 
const choixNbJet = document.querySelector('#choix-nombre-jet');
valeurNbJet = choixNbJet.value;
const texteTypeDe = document.querySelector('.texte-type-de');
const texteNbJet = document.querySelector('.texte-nombre-jet');
const boutonJet = document.querySelector('.bouton-jet');
const zoneResulat = document.querySelector('.resultats');
const datathing = document.querySelectorAll('.selected')


//Trouver la value de chaque dé
datathing.forEach( e => {
    const data = (e.dataset.de);
    console.log(data);
    texteTypeDe.innerHTML = "d"+ data;



    /*maximum = data;

    forEach(datathing in listeDes)
    //chaque dé qui contient "dé" et "selected"
    
    {
    function nombreAleatoire(minimum, maximum)
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; 
    }

    console.log(nombreAleatoire(0,data));*/
    //Ici, on met le minimum à 0 et le maximum du dé sélectionné
    

});




//Code emprunté sur l'examen formatif numéro 2
choixNbJet.addEventListener('input', () => {
    let nbr = choixNbJet.value;
    texteNbJet.textContent = nbr + "x";
});



function creerElementResultat(resultat) {
    let elementResultat = document.createElement('div');
    // La classe de-resultat existe déjà dans le fichier style.css et met en forme le texte du résultat
    elementResultat.classList.add('de-resultat');
    elementResultat.innerHTML = resultat;

    return elementResultat;
}

// Pour chaque dé, branche la fonction selectionDe sur l'événement click
listeDes.forEach( (de) => {
    de.addEventListener('click', selectionDe);
})


boutonJet.addEventListener('click', selectionDe)
function selectionDe(e) {
    // Enlève la classe sélection à tous les dés
    listeDes.forEach( (de) => de.classList.remove('selected'));
    // Applique la classe au dé cliqué qui va afficher qu'il est sélectionné
    e.target.classList.add('selected');
    // Peut être plus de code ici?
    
}



