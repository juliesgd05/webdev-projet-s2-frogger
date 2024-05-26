
let winC = false;
let intervalCheck;

function checkWin() {
    var frogRect = frog.getBoundingClientRect();

    // CaseFin 1
    var caseFin1 = document.getElementById("caseFin1");
    var caseFinRect1 = caseFin1.getBoundingClientRect();
    // CaseFin 2
    var caseFin2 = document.getElementById("caseFin2");
    var caseFinRect2 = caseFin2.getBoundingClientRect();
    // CaseFin 3
    var caseFin3 = document.getElementById("caseFin3");
    var caseFinRect3 = caseFin3.getBoundingClientRect();
    // CaseFin 4
    var caseFin4 = document.getElementById("caseFin4");
    var caseFinRect4 = caseFin4.getBoundingClientRect();

    // CaseFin 5
    var caseFin5 = document.getElementById("caseFin5");
    var caseFinRect5 = caseFin5.getBoundingClientRect();

    // CaseFin 1

    if (
        frogRect.left < caseFinRect1.right &&
        frogRect.right > caseFinRect1.left &&
        frogRect.top < caseFinRect1.bottom &&
        frogRect.bottom > caseFinRect1.top
    ) {
        if (caseFin1.classList.contains("win")) {
            decreaseLife();
            resetFrogPosition();
            console.log("deja grenouille")
        }
        else {
            caseFin1.innerHTML = "<img src='../IMAGE/victory.png' style='width: 100%; height: 100%;'>";
            caseFin1.classList.add("win"); //on lui met la class win
            resetFrogPosition();
        }

    }

    // CaseFin 2
    if (
        frogRect.left < caseFinRect2.right &&
        frogRect.right > caseFinRect2.left &&
        frogRect.top < caseFinRect2.bottom &&
        frogRect.bottom > caseFinRect2.top
    ) {
        if (caseFin2.classList.contains("win")) {
            decreaseLife();
            resetFrogPosition();
            console.log("deja grenouille")
        }
        else {
            caseFin2.innerHTML = "<img src='../IMAGE/victory.png' style='width: 100%; height: 100%;'>";
            caseFin2.classList.add("win"); //on lui met la class win
            resetFrogPosition();
        }
    }

    // CaseFin 3
    if (
        frogRect.left < caseFinRect3.right &&
        frogRect.right > caseFinRect3.left &&
        frogRect.top < caseFinRect3.bottom &&
        frogRect.bottom > caseFinRect3.top
    ) {
        if (caseFin3.classList.contains("win")) {
            decreaseLife();
            resetFrogPosition();
            console.log("deja grenouille")
        }
        else {
            caseFin3.innerHTML = "<img src='../IMAGE/victory.png' style='width: 100%; height: 100%;'>";
            caseFin3.classList.add("win"); //on lui met la class win
            resetFrogPosition();
        }
    }

    // CaseFin 4
    if (
        frogRect.left < caseFinRect4.right &&
        frogRect.right > caseFinRect4.left &&
        frogRect.top < caseFinRect4.bottom &&
        frogRect.bottom > caseFinRect4.top
    ) {
        if (caseFin4.classList.contains("win")) {
            decreaseLife();
            resetFrogPosition();
            console.log("deja grenouille")
        }
        else {
            caseFin4.innerHTML = "<img src='../IMAGE/victory.png' style='width: 100%; height: 100%;'>";
            caseFin4.classList.add("win"); //on lui met la class win
            resetFrogPosition();
        }
    }

    // CaseFin 5
    if (
        frogRect.left < caseFinRect5.right &&
        frogRect.right > caseFinRect5.left &&
        frogRect.top < caseFinRect5.bottom &&
        frogRect.bottom > caseFinRect5.top
    ) {
        if (caseFin5.classList.contains("win")) {
            decreaseLife();
            resetFrogPosition();
            console.log("deja grenouille")
        }
        else {
            caseFin5.innerHTML = "<img src='../IMAGE/victory.png' style='width: 100%; height: 100%;'>";
            caseFin5.classList.add("win"); //on lui met la class win
            resetFrogPosition();
        }
    }



    //Verification pour le changement de niveau
    if (caseFin1.classList.contains("win") && caseFin2.classList.contains("win") && caseFin3.classList.contains("win") && caseFin4.classList.contains("win") && caseFin5.classList.contains("win")) { //On Verifie si les cases contienne la class = win si ou alors on viens dire que on a gagner
        document.location.href = "victoire.html";
        console.log("victoie")
        caseFin3.classList.add("stop_fly");
        winC = true; // On lui passe en true comme ça, ça se stop
        clearInterval(intervalCheck); // stop l'interval
        console.log("Changement de Niveau !");
        

    }

}

if (!winC) { // appel l'interval si winC == false
    intervalCheck = setInterval(checkWin, 100);
}
