// toutes les tailles qui servent pour les stop bordure 
var tailleEcran = screen.width;
var tailleBordExtraineGauche = tailleEcran * 0.25;
var taillebordextraineDroit = tailleEcran - tailleBordExtraineGauche;
var tailleEcranHauteur = document.getElementById("plateauDeJeu").clientHeight;
// //console.log(tailleEcranHauteur);

function detectionSortiePlateauHauteurbas(frogPositionY, tailleEcranHauteur) {
    if (frogPositionY > tailleEcranHauteur) {
        //console.log("detectionSortiePlateauHauteur : false1")
        return false;
    }
    else {
        //console.log("detectionSortiePlateauHauteur : vrai")
        return true;
    }
}

function detectionSortiePlateauHauteurhaut(frogPositionY, tailleEcranHauteur) {
    if (frogPositionY < 0) {
        //console.log("detectionSortiePlateauHauteur : false2")
        return false;
    }
    else {
        //console.log("detectionSortiePlateauHauteur : vrai")
        return true;
    }
}

//console.log(frogPositionX, frogPositionY);
//console.log(detectionSortiePlateauLargeur(frogPositionX, tailleEcran));
