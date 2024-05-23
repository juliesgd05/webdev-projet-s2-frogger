class MyObjects {
    constructor(name, speed, direction, taille) {
        this.name = name;
        this.speed = speed;
        switch (direction) {
            case "left":
                this.direction = "left";
                break;
            default:
                this.direction = "right";
                break;
        }
        this.taille = taille;
    }
    printObject() {
        console.log(`${this.name} ${this.speed} ${this.direction} ${this.taille}`);
    }
    placeObject(nameIdOfLigne, x) {
        const plateau = document.getElementById("plateauDeJeu");
        const ligne = document.getElementById(`${nameIdOfLigne}`);
        let objectToPlace = document.createElement("div");
        objectToPlace.classList.add(`${this.name}`);
        objectToPlace.style.width = (this.taille + "px");
        let sizeOfPlateau = plateau.offsetWidth;
        this.startPlaceX = x;
        switch (this.direction) {
            case "left":
                objectToPlace.style.left = ((x) + "px");
                break;
            default:
                objectToPlace.style.left = ((sizeOfPlateau - x) + "px");
                break;
        }
        ligne.appendChild(objectToPlace);
        this.objectToPlace = objectToPlace;
    }


    defilementObject(x) {
        const plateau = document.getElementById("plateauDeJeu");
        const objectToPlace = this.objectToPlace;
        const sizeOfPlateau = plateau.offsetWidth;
        const speed = this.speed;
        const direction = this.direction;
        const taille = this.taille;
        this.startDefX = x;
        
        setInterval(() => {
            x = x + (speed / 20);
            if (direction === "left") {
                objectToPlace.style.transform = `translateX(${x}px)`;
                this.cordoX = x;

                if (x > (sizeOfPlateau + taille*2)) {
                    x = -150;
                }
            } else if (direction === "right") {
                objectToPlace.style.transform = `translateX(${-x}px)`;
                this.cordoX = sizeOfPlateau - x;
                if (x > (sizeOfPlateau + taille)) {
                    x = 0;
                }
            }
        }, 20);
    
    }
    whereY(){
        const rectangle = this.objectToPlace.offsetParent;
        return rectangle.offsetTop;
    }
}



// if (x >= 960) {
//     clearInterval(intervalId);
//     const ligne = document.getElementById(nameIdOfLigne);
//     ligne.removeChild(objectToPlace);
//     return;
// }