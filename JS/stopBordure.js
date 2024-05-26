// toutes les tailles qui servent pour les stop bordure 
var tailleEcran = screen.width;
var tailleBordExtraineGauche = tailleEcran * 0.25;
var taillebordextraineDroit = tailleEcran - tailleBordExtraineGauche;
var tailleEcranHauteur = document.getElementById("plateauDeJeu").clientHeight;
// //console.log(tailleEcranHauteur);

function detectionSortiePlateauHauteurbas(frogPositionY, tailleEcranHauteur) {
    if (frogPositionY > tailleEcranHauteur) {
        return false;
    }
    else {
        return true;
    }
}

function detectionSortiePlateauHauteurhaut(frogPositionY, tailleEcranHauteur) {
    if (frogPositionY < 0) {
        return false;
    }
    else {
        return true;
    }
}
