
let winF = false;
let intervalFly;

function generateFly() {
    var randomCase = randomInt(1,5);

    var caseFin = document.getElementById("caseFin" + randomCase);
    var caseFinGen = document.getElementById("caseFin3"); // Pour verifier que toute les case son remplit 

    var flyImage = document.createElement("img");
    flyImage.src = "../IMAGE/fly.png";
    var caseWidth = caseFin.offsetWidth;
    var caseHeight = caseFin.offsetHeight;

    flyImage.style.width = caseWidth + "px";
    flyImage.style.height = caseHeight + "px";

    if(!caseFin.classList.contains("win")){ // Verif si la case est vide 
        caseFin.appendChild(flyImage);
        setTimeout(function () {
            if(caseFin.contains(flyImage)){ // Avant de supprimer on Verifie si elle existe pour eviter les bug console
                caseFin.removeChild(flyImage);
            }
        }, 5000);
    } else{
        if(caseFinGen.classList.contains("stop_fly")){ // Petite verif pour stopper la generation des mouches
            winF = true;
            clearInterval(intervalFly); // Pour stopper la fonction
        }
        else{
            generateFly(); // Pour que une mouche apapraisse meme si il reste une case, il vient boucler recursivement tant qu'il ne trouve pas de case vide
        }
    }
}

if(!winF){ // Appel l'interval si winF == false
    intervalFly = setInterval(generateFly, 10000);
}