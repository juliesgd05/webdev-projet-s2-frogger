var frog = document.getElementById("frog_image");

var frogPositionX = 0;
var scoreDisplay = document.getElementById("score");
// var frog_image = document.getElementById("frogger_image");
// var frogPositionY = window.innerHeight - frog.clientHeight -20;
var frogPositionY = 0;
var tailleEcran = screen.width;
var tailleBordExtraineGauche = tailleEcran * 0.25;
var taillebordextraineDroit = tailleEcran - tailleBordExtraineGauche;

// var premierPlateauDeJeu = document.querySelector(".plateauDeJeu"); // Sélectionnez le premier élément avec la classe "plateauDeJeu"
// var tailleEcranHauteur = premierPlateauDeJeu.clientHeight

var tailleEcranHauteur = document.getElementById("plateauDeJeu").clientHeight;
console.log(tailleEcranHauteur);
// console.log(tailleBordExtraineGauche);
// console.log(taillebordextraineDroit);

frog.style.left = frogPositionX + "px";
frog.style.top = frogPositionY + "px";
var score = 0;
var compteur = 0


function moveFrog(directionX, directionY) {
    frogPositionX += directionX;
    frogPositionY += directionY;
    frog.style.left = frogPositionX + "px";
    frog.style.top = frogPositionY + "px";
}

function detectionSortiePlateauLargeur(frogPositionX) {
    // var bordleft = tailleEcran*0.25;
    // var bordright = tailleEcran-tailleEcran*0.25;
    // console.log("bordleft : "+bordleft+", bordright : "+bordright+", tailleEcran : "+tailleEcran);
    if (frogPositionX < 0) {
        return false;
    }
    else if (frogPositionX > tailleEcran * 0.50-60) {
        return false;
    }
    else {
        return true;
    }

}

function detectionSortiePlateauHauteurbas(frogPositionY, tailleEcranHauteur) {
    // var bordhaut = tailleEcranHauteur*0.25;
    // var bordright = tailleEcran-tailleEcran*0.25;
    // var extrembas = window.innerHeight - frog.clientHeight;
    if (frogPositionY > tailleEcranHauteur) {
        console.log("detectionSortiePlateauHauteur : false1")
        return false;
    }
    // else if (frogPositionY <0) {
    //     console.log("detectionSortiePlateauHauteur : false2")
    //     return false;
    // }
    else {
        console.log("detectionSortiePlateauHauteur : vrai")
        return true;
    }
}

function detectionSortiePlateauHauteurhaut(frogPositionY, tailleEcranHauteur) {
    // var bordhaut = tailleEcranHauteur*0.25;
    // var bordright = tailleEcran-tailleEcran*0.25;
    // var extrembas = window.innerHeight - frog.clientHeight;
    // if (frogPositionY > tailleEcranHauteur) {
    //     console.log("detectionSortiePlateauHauteur : false1")
    //     return false;
    // }
    if (frogPositionY <0) {
        console.log("detectionSortiePlateauHauteur : false2")
        return false;
    }
    else {
        console.log("detectionSortiePlateauHauteur : vrai")
        return true;
    }
}

console.log(frogPositionX, frogPositionY);
console.log(detectionSortiePlateauLargeur(frogPositionX, tailleEcran));

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowLeft":
            if (detectionSortiePlateauLargeur(frogPositionX - 20) == true) {
                console.log("coordonée : "+frogPositionX+" , "+frogPositionY+ "; ArrowLeft = True");
                moveFrog(-20, 0);
                frog.style.transform = "rotate(" + (-90) + "deg)";
                // console.log(frogPositionX);
            }
            break;
        case "ArrowUp":
            if (detectionSortiePlateauHauteurhaut(frogPositionY - 20, -tailleEcranHauteur) == true) {
                console.log("coordonée : "+frogPositionX+" , "+frogPositionY+ "; ArrowUp = True");
                compteur += 10;
                score += 10;
                if (score == compteur) {
                    document.getElementById("score").innerText = "Score: " + score;
                }
                else { score = score - 10; }
                moveFrog(0, -20);
                frog.style.transform = "rotate(" + (0) + "deg)";
            }
            break;
        case "ArrowRight":
            if (detectionSortiePlateauLargeur(frogPositionX + 20) == true) {
                console.log("coordonée : "+frogPositionX+" , "+frogPositionY+ "; ArrowRight = True");
                moveFrog(20, 0);
                frog.style.transform = "rotate(" + (90) + "deg)";
            }
            break;
        case "ArrowDown":
            if (detectionSortiePlateauHauteurbas(frogPositionY + 20, tailleEcranHauteur) == true) {
                console.log("coordonée : "+frogPositionX+" , "+frogPositionY+ "; ArrowDown = True");
                compteur = compteur - 10;
                moveFrog(0, 20);
                frog.style.transform = "rotate(" + (180) + "deg)";
            }
            break;
    }
});

class obstacle {
    constructor(x, y, dir, step, speed) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.step = step;
        this.speed = speed;
    }
}

var Log = document.createElement("div");    //crée une balise div
document.body.appendChild(Log);             //et place la div dans le body du doc html
Log.className = "log";                      //puis ajoute la class "log" à la div pour lier l'image dans le css

var log = new obstacle(0, 0, "right", 1, 25);
var Obstacle = document.getElementsByClassName("log")[0];
var intervalId;


function MoveObstacle() {
    log.x += log.step;
    Obstacle.style.left = (log.x + "px");
    if (log.x == tailleEcran * 0.80) {  //déterminer les coordonnées d'apparition et de disparition
        Log.remove();
    }
}
intervalId = setInterval(MoveObstacle, log.speed);

document.getElementById("score").innerText = "Score: " + score;



