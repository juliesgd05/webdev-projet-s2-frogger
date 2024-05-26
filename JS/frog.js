// variable qui servent pour la possition de dépard de la grenouille mais aussi pour la faire bouger 
var frog = document.getElementById("frog");
var frogPositionX = 0;
var frogPositionY = window.innerHeight - frog.clientHeight;

frog.style.left = frogPositionX + "px";
frog.style.top = frogPositionY + "px";

// variable qui servent pour l'affichage du score 
var scoreDisplay = document.getElementById("score");
var score = 0;
var compteur = 0

// faire bouger la grenouille en fonction des paramettre qu'on lui donne 
function moveFrog(directionX, directionY) {
    frogPositionX += directionX;
    frogPositionY += directionY;
    frog.style.left = frogPositionX + "px";
    frog.style.top = frogPositionY + "px";
    //console.log(frogPositionX + " / " + frogPositionY);
}
function moveFrogOnObject(directionX, directionY){
    frogPositionX = directionX;
    frogPositionY += directionY;
    frog.style.left = directionX + "px";
    frog.style.top = directionY + "px";
}

//45px Pour que les colision fonctione bien ! 
const d = 44;

// bouger la grenouille avec les stop bordure 
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowLeft":
            if (detectionSortiePlateauLargeur(frogPositionX - 20) == true) {
                //console.log("coordonée : " + frogPositionX + " , " + frogPositionY + "; ArrowLeft = True");
                moveFrog(-d, 0);
                frog.style.transform = "rotate(" + (-90) + "deg)";
            }
            break;
        case "ArrowUp":
            if (detectionSortiePlateauHauteurhaut(frogPositionY - 20, -tailleEcranHauteur) == true) {
                //console.log("coordonée : " + frogPositionX + " , " + frogPositionY + "; ArrowUp = True");
                compteur += 10;
                score += 10;
                if (score == compteur) {
                    document.getElementById("score").innerText = score;
                }
                else { score = score - 10; }
                moveFrog(0, -d);
                frog.style.transform = "rotate(" + (0) + "deg)";
            }
            break;
        case "ArrowRight":
            if (detectionSortiePlateauLargeur(frogPositionX + 20) == true) {
                //console.log("coordonée : " + frogPositionX + " , " + frogPositionY + "; ArrowRight = True");
                moveFrog(d, 0);
                frog.style.transform = "rotate(" + (90) + "deg)";
            }
            break;
        case "ArrowDown":
            if (detectionSortiePlateauHauteurbas(frogPositionY + 20, tailleEcranHauteur) == true) {
                //console.log("coordonée : " + frogPositionX + " , " + frogPositionY + "; ArrowDown = True");
                compteur = compteur - 10;
                moveFrog(0, d);
                frog.style.transform = "rotate(" + (180) + "deg)";
            }
            break;
    }
	// collision(frog, c);	
});


function resetFrogPosition() {
    frogPositionX = 0;
    frogPositionY = window.innerHeight - frog.clientHeight;
    frog.style.left = frogPositionX + "px";
    frog.style.top = frogPositionY + "px";
}
