function waterDeath(){
    var eau = document.getElementById("water"); 
    var frog = document.getElementById("frog");
    var waterRect = eau.getBoundingClientRect();
    var frogRect = frog.getBoundingClientRect();
    
    
    if (
        frogRect.left < waterRect.right &&
        frogRect.right > waterRect.left &&
        frogRect.top < waterRect.bottom &&
        frogRect.bottom > waterRect.top
    ) {
        console.log("Vous êtes mort noyé !");
        resetFrogPosition();
        decreaseLife()
    }
    }
    setInterval(waterDeath, 100);
    // verifie si la grenouille est dans l'eau, j'ai crée une nouvelle div qui prends toute l'eau, possible de mettre la div a part pour chaque rangée ça marcehra aussi