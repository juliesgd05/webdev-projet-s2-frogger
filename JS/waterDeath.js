let frogOnObject = false;
// function waterDeath(){
//     var eau = document.getElementById("water"); 
//     var frog = document.getElementById("frog");
//     var waterRect = eau.getBoundingClientRect();
//     var frogRect = frog.getBoundingClientRect();


//     if (
//         frogRect.left < waterRect.right &&
//         frogRect.right > waterRect.left &&
//         frogRect.top < waterRect.bottom &&
//         frogRect.bottom > waterRect.top
//     ) {
//         console.log("Vous êtes mort noyé !!");
//         resetFrogPosition();
//         decreaseLife()
//     }
//     }
//     setInterval(waterDeath, 100);
// verifie si la grenouille est dans l'eau, j'ai crée une nouvelle div qui prends toute l'eau, possible de mettre la div a part pour chaque rangée ça marcehra aussi



const POM = frog.offsetWidth;
function carAndTruckDeath() {
    if (((c1_1.cordoX >= frog.offsetLeft - POM) && (c1_1.cordoX <= frog.offsetLeft + POM)) && (
        (c1_1.whereY() >= frog.offsetTop - POM) && (c1_1.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 1 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((c2_1.cordoX >= frog.offsetLeft - POM) && (c2_1.cordoX <= frog.offsetLeft + POM)) && (
        (c2_1.whereY() >= frog.offsetTop - POM) && (c2_1.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 2_1 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((c2_2.cordoX >= frog.offsetLeft - POM) && (c2_2.cordoX <= frog.offsetLeft + POM)) && (
        (c2_2.whereY() >= frog.offsetTop - POM) && (c2_2.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 2_2 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((c2_3.cordoX >= frog.offsetLeft - POM) && (c2_3.cordoX <= frog.offsetLeft + POM)) && (
        (c2_3.whereY() >= frog.offsetTop - POM) && (c2_3.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 2_3 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((c3_1.cordoX >= frog.offsetLeft - POM) && (c3_1.cordoX <= frog.offsetLeft + POM)) && (
        (c3_1.whereY() >= frog.offsetTop - POM) && (c3_1.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 3_1 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((c3_2.cordoX >= frog.offsetLeft - POM) && (c3_2.cordoX <= frog.offsetLeft + POM)) && (
        (c3_2.whereY() >= frog.offsetTop - POM) && (c3_2.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 3_2 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((c4_1.cordoX >= frog.offsetLeft - POM) && (c4_1.cordoX <= frog.offsetLeft + POM)) && (
        (c4_1.whereY() >= frog.offsetTop - POM) && (c4_1.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 4_1 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((c4_2.cordoX >= frog.offsetLeft - POM) && (c4_2.cordoX <= frog.offsetLeft + POM)) && (
        (c4_2.whereY() >= frog.offsetTop - POM) && (c4_2.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 4_2 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((c4_3.cordoX >= frog.offsetLeft - POM) && (c4_3.cordoX <= frog.offsetLeft + POM)) && (
        (c4_3.whereY() >= frog.offsetTop - POM) && (c4_3.whereY() <= frog.offsetTop + POM))) {
        console.log("Voiture 4_3 colision");
        resetFrogPosition();
        decreaseLife();
    }



    // ATTENTION COLISION PARTICULIAIRE PUISQUE CAMION
    if (((t1_1.cordoX >= frog.offsetLeft - POM - (t1_1.taille / 1.75)) && ((t1_1.cordoX) <= frog.offsetLeft + POM)) && (
        (t1_1.whereY() >= frog.offsetTop - POM) && (t1_1.whereY() <= frog.offsetTop + POM))) {
        console.log("Camion 1_1 colision");
        resetFrogPosition();
        decreaseLife();
    }
    if (((t1_2.cordoX >= frog.offsetLeft - POM - (t1_1.taille / 1.75)) && (t1_2.cordoX <= frog.offsetLeft + POM)) && (
        (t1_2.whereY() >= frog.offsetTop - POM) && (t1_2.whereY() <= frog.offsetTop + POM))) {
        console.log("Camion 1_2 colision");
        resetFrogPosition();
        decreaseLife();
    }
}
setInterval(carAndTruckDeath, 100);

function colisionWithObjectWater() {
    //Buches premiere ligne :
    if (((buche1_ar.cordoX >= frog.offsetLeft - (buche1_ar.taille / 2)) && (buche1_ar.cordoX <= frog.offsetLeft + (buche1_ar.taille / 2))) && (
        (buche1_ar.whereY() >= frog.offsetTop - POM) && (buche1_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche1_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche1_av.cordoX >= frog.offsetLeft - (buche1_av.taille / 2)) && (buche1_av.cordoX <= frog.offsetLeft + (buche1_av.taille / 2))) && (
        (buche1_av.whereY() >= frog.offsetTop - POM) && (buche1_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche1_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    else if (((buche2_ar.cordoX >= frog.offsetLeft - (buche2_ar.taille / 2)) && (buche2_ar.cordoX <= frog.offsetLeft + (buche2_ar.taille / 2))) && (
        (buche2_ar.whereY() >= frog.offsetTop - POM) && (buche2_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche2_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche2_av.cordoX >= frog.offsetLeft - (buche2_av.taille / 2)) && (buche2_av.cordoX <= frog.offsetLeft + (buche2_av.taille / 2))) && (
        (buche2_av.whereY() >= frog.offsetTop - POM) && (buche2_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche2_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    else if (((buche3_ar.cordoX >= frog.offsetLeft - (buche3_ar.taille / 2)) && (buche3_ar.cordoX <= frog.offsetLeft + (buche3_ar.taille / 2))) && (
        (buche3_ar.whereY() >= frog.offsetTop - POM) && (buche3_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche3_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche3_av.cordoX >= frog.offsetLeft - (buche3_av.taille / 2)) && (buche3_av.cordoX <= frog.offsetLeft + (buche3_av.taille / 2))) && (
        (buche3_av.whereY() >= frog.offsetTop - POM) && (buche3_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche3_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    //Buches Deuxieme ligne

    else if (((buche8_ar.cordoX >= frog.offsetLeft - (buche8_ar.taille / 2)) && (buche8_ar.cordoX <= frog.offsetLeft + (buche8_ar.taille / 2))) && (
        (buche8_ar.whereY() >= frog.offsetTop - POM) && (buche8_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche8_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche8_mi.cordoX >= frog.offsetLeft - (buche8_mi.taille / 2)) && (buche8_mi.cordoX <= frog.offsetLeft + (buche8_mi.taille / 2))) && (
        (buche8_mi.whereY() >= frog.offsetTop - POM) && (buche8_mi.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche8_mi.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche8_mi2.cordoX >= frog.offsetLeft - (buche8_mi2.taille / 2)) && (buche8_mi2.cordoX <= frog.offsetLeft + (buche8_mi2.taille / 2))) && (
        (buche8_mi2.whereY() >= frog.offsetTop - POM) && (buche8_mi2.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche8_mi2.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche8_av.cordoX >= frog.offsetLeft - (buche8_av.taille / 2)) && (buche8_av.cordoX <= frog.offsetLeft + (buche8_av.taille / 2))) && (
        (buche8_av.whereY() >= frog.offsetTop - POM) && (buche8_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche8_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    else if (((buche9_ar.cordoX >= frog.offsetLeft - (buche9_ar.taille / 2)) && (buche9_ar.cordoX <= frog.offsetLeft + (buche9_ar.taille / 2))) && (
        (buche9_ar.whereY() >= frog.offsetTop - POM) && (buche9_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche9_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche9_mi.cordoX >= frog.offsetLeft - (buche9_mi.taille / 2)) && (buche9_mi.cordoX <= frog.offsetLeft + (buche9_mi.taille / 2))) && (
        (buche9_mi.whereY() >= frog.offsetTop - POM) && (buche9_mi.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche9_mi.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche9_mi2.cordoX >= frog.offsetLeft - (buche9_mi2.taille / 2)) && (buche9_mi2.cordoX <= frog.offsetLeft + (buche9_mi2.taille / 2))) && (
        (buche9_mi2.whereY() >= frog.offsetTop - POM) && (buche9_mi2.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche9_mi2.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche9_av.cordoX >= frog.offsetLeft - (buche9_av.taille / 2)) && (buche9_av.cordoX <= frog.offsetLeft + (buche9_av.taille / 2))) && (
        (buche9_av.whereY() >= frog.offsetTop - POM) && (buche9_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche9_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    //Buches Troisieme ligne

    else if (((buche4_ar.cordoX >= frog.offsetLeft - (buche4_ar.taille / 2)) && (buche4_ar.cordoX <= frog.offsetLeft + (buche4_ar.taille / 2))) && (
        (buche4_ar.whereY() >= frog.offsetTop - POM) && (buche4_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche4_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche4_mi.cordoX >= frog.offsetLeft - (buche4_mi.taille / 2)) && (buche4_mi.cordoX <= frog.offsetLeft + (buche4_mi.taille / 2))) && (
        (buche4_mi.whereY() >= frog.offsetTop - POM) && (buche4_mi.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche4_mi.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche4_av.cordoX >= frog.offsetLeft - (buche4_av.taille / 2)) && (buche4_av.cordoX <= frog.offsetLeft + (buche4_av.taille / 2))) && (
        (buche4_av.whereY() >= frog.offsetTop - POM) && (buche4_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche4_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    else if (((buche5_ar.cordoX >= frog.offsetLeft - (buche5_ar.taille / 2)) && (buche5_ar.cordoX <= frog.offsetLeft + (buche5_ar.taille / 2))) && (
        (buche5_ar.whereY() >= frog.offsetTop - POM) && (buche5_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche5_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche5_mi.cordoX >= frog.offsetLeft - (buche5_mi.taille / 2)) && (buche5_mi.cordoX <= frog.offsetLeft + (buche5_mi.taille / 2))) && (
        (buche5_mi.whereY() >= frog.offsetTop - POM) && (buche5_mi.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche5_mi.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche5_av.cordoX >= frog.offsetLeft - (buche5_av.taille / 2)) && (buche5_av.cordoX <= frog.offsetLeft + (buche5_av.taille / 2))) && (
        (buche5_av.whereY() >= frog.offsetTop - POM) && (buche5_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche5_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    else if (((buche6_ar.cordoX >= frog.offsetLeft - (buche6_ar.taille / 2)) && (buche6_ar.cordoX <= frog.offsetLeft + (buche6_ar.taille / 2))) && (
        (buche6_ar.whereY() >= frog.offsetTop - POM) && (buche6_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche6_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche6_mi.cordoX >= frog.offsetLeft - (buche6_mi.taille / 2)) && (buche6_mi.cordoX <= frog.offsetLeft + (buche6_mi.taille / 2))) && (
        (buche6_mi.whereY() >= frog.offsetTop - POM) && (buche6_mi.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche6_mi.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche6_av.cordoX >= frog.offsetLeft - (buche6_av.taille / 2)) && (buche6_av.cordoX <= frog.offsetLeft + (buche6_av.taille / 2))) && (
        (buche6_av.whereY() >= frog.offsetTop - POM) && (buche6_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche6_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    else if (((buche7_ar.cordoX >= frog.offsetLeft - (buche7_ar.taille / 2)) && (buche7_ar.cordoX <= frog.offsetLeft + (buche7_ar.taille / 2))) && (
        (buche7_ar.whereY() >= frog.offsetTop - POM) && (buche7_ar.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche7_ar.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche7_mi.cordoX >= frog.offsetLeft - (buche7_mi.taille / 2)) && (buche7_mi.cordoX <= frog.offsetLeft + (buche7_mi.taille / 2))) && (
        (buche7_mi.whereY() >= frog.offsetTop - POM) && (buche7_mi.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche7_mi.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }
    else if (((buche7_av.cordoX >= frog.offsetLeft - (buche7_av.taille / 2)) && (buche7_av.cordoX <= frog.offsetLeft + (buche7_av.taille / 2))) && (
        (buche7_av.whereY() >= frog.offsetTop - POM) && (buche7_av.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = buche7_av.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Buche colision");
    }

    //Tortue Premiere ligne

    else if (((blocTurtle1_Turtle1.cordoX >= frog.offsetLeft - (blocTurtle1_Turtle1.taille / 2)) && (blocTurtle1_Turtle1.cordoX <= frog.offsetLeft + (blocTurtle1_Turtle1.taille / 2))) && (
        (blocTurtle1_Turtle1.whereY() >= frog.offsetTop - POM) && (blocTurtle1_Turtle1.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle1_Turtle1.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle1_Turtle2.cordoX >= frog.offsetLeft - (blocTurtle1_Turtle2.taille / 2)) && (blocTurtle1_Turtle2.cordoX <= frog.offsetLeft + (blocTurtle1_Turtle2.taille / 2))) && (
        (blocTurtle1_Turtle2.whereY() >= frog.offsetTop - POM) && (blocTurtle1_Turtle2.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle1_Turtle2.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle1_Turtle3.cordoX >= frog.offsetLeft - (blocTurtle1_Turtle3.taille / 2)) && (blocTurtle1_Turtle3.cordoX <= frog.offsetLeft + (blocTurtle1_Turtle3.taille / 2))) && (
        (blocTurtle1_Turtle3.whereY() >= frog.offsetTop - POM) && (blocTurtle1_Turtle3.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle1_Turtle3.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }

    else if (((blocTurtle2_Turtle1.cordoX >= frog.offsetLeft - (blocTurtle2_Turtle1.taille / 2)) && (blocTurtle2_Turtle1.cordoX <= frog.offsetLeft + (blocTurtle2_Turtle1.taille / 2))) && (
        (blocTurtle2_Turtle1.whereY() >= frog.offsetTop - POM) && (blocTurtle2_Turtle1.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle2_Turtle1.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle2_Turtle2.cordoX >= frog.offsetLeft - (blocTurtle2_Turtle2.taille / 2)) && (blocTurtle2_Turtle2.cordoX <= frog.offsetLeft + (blocTurtle2_Turtle2.taille / 2))) && (
        (blocTurtle2_Turtle2.whereY() >= frog.offsetTop - POM) && (blocTurtle2_Turtle2.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle2_Turtle2.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle2_Turtle3.cordoX >= frog.offsetLeft - (blocTurtle2_Turtle3.taille / 2)) && (blocTurtle2_Turtle3.cordoX <= frog.offsetLeft + (blocTurtle2_Turtle3.taille / 2))) && (
        (blocTurtle2_Turtle3.whereY() >= frog.offsetTop - POM) && (blocTurtle2_Turtle3.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle2_Turtle3.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }

    else if (((blocTurtle3_Turtle1.cordoX >= frog.offsetLeft - (blocTurtle3_Turtle1.taille / 2)) && (blocTurtle3_Turtle1.cordoX <= frog.offsetLeft + (blocTurtle3_Turtle1.taille / 2))) && (
        (blocTurtle3_Turtle1.whereY() >= frog.offsetTop - POM) && (blocTurtle3_Turtle1.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle3_Turtle1.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle3_Turtle2.cordoX >= frog.offsetLeft - (blocTurtle3_Turtle2.taille / 2)) && (blocTurtle3_Turtle2.cordoX <= frog.offsetLeft + (blocTurtle3_Turtle2.taille / 2))) && (
        (blocTurtle3_Turtle2.whereY() >= frog.offsetTop - POM) && (blocTurtle3_Turtle2.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle3_Turtle2.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle3_Turtle3.cordoX >= frog.offsetLeft - (blocTurtle3_Turtle3.taille / 2)) && (blocTurtle3_Turtle3.cordoX <= frog.offsetLeft + (blocTurtle3_Turtle3.taille / 2))) && (
        (blocTurtle3_Turtle3.whereY() >= frog.offsetTop - POM) && (blocTurtle3_Turtle3.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle3_Turtle3.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }

    //Turtle Deuxieme ligne

    else if (((blocTurtle4_Turtle1.cordoX >= frog.offsetLeft - (blocTurtle4_Turtle1.taille / 2)) && (blocTurtle4_Turtle1.cordoX <= frog.offsetLeft + (blocTurtle4_Turtle1.taille / 2))) && (
        (blocTurtle4_Turtle1.whereY() >= frog.offsetTop - POM) && (blocTurtle4_Turtle1.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle4_Turtle1.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle4_Turtle2.cordoX >= frog.offsetLeft - (blocTurtle4_Turtle2.taille / 2)) && (blocTurtle4_Turtle2.cordoX <= frog.offsetLeft + (blocTurtle4_Turtle2.taille / 2))) && (
        (blocTurtle4_Turtle2.whereY() >= frog.offsetTop - POM) && (blocTurtle4_Turtle2.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle4_Turtle2.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle4_Turtle3.cordoX >= frog.offsetLeft - (blocTurtle4_Turtle3.taille / 2)) && (blocTurtle4_Turtle3.cordoX <= frog.offsetLeft + (blocTurtle4_Turtle3.taille / 2))) && (
        (blocTurtle4_Turtle3.whereY() >= frog.offsetTop - POM) && (blocTurtle4_Turtle3.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle4_Turtle3.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }

    else if (((blocTurtle5_Turtle1.cordoX >= frog.offsetLeft - (blocTurtle5_Turtle1.taille / 2)) && (blocTurtle5_Turtle1.cordoX <= frog.offsetLeft + (blocTurtle5_Turtle1.taille / 2))) && (
        (blocTurtle5_Turtle1.whereY() >= frog.offsetTop - POM) && (blocTurtle5_Turtle1.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle5_Turtle1.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle5_Turtle2.cordoX >= frog.offsetLeft - (blocTurtle5_Turtle2.taille / 2)) && (blocTurtle5_Turtle2.cordoX <= frog.offsetLeft + (blocTurtle5_Turtle2.taille / 2))) && (
        (blocTurtle5_Turtle2.whereY() >= frog.offsetTop - POM) && (blocTurtle5_Turtle2.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle5_Turtle2.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle5_Turtle3.cordoX >= frog.offsetLeft - (blocTurtle5_Turtle3.taille / 2)) && (blocTurtle5_Turtle3.cordoX <= frog.offsetLeft + (blocTurtle5_Turtle3.taille / 2))) && (
        (blocTurtle5_Turtle3.whereY() >= frog.offsetTop - POM) && (blocTurtle5_Turtle3.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle5_Turtle3.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }

    else if (((blocTurtle6_Turtle1.cordoX >= frog.offsetLeft - (blocTurtle6_Turtle1.taille / 2)) && (blocTurtle6_Turtle1.cordoX <= frog.offsetLeft + (blocTurtle6_Turtle1.taille / 2))) && (
        (blocTurtle6_Turtle1.whereY() >= frog.offsetTop - POM) && (blocTurtle6_Turtle1.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle6_Turtle1.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle6_Turtle2.cordoX >= frog.offsetLeft - (blocTurtle6_Turtle2.taille / 2)) && (blocTurtle6_Turtle2.cordoX <= frog.offsetLeft + (blocTurtle6_Turtle2.taille / 2))) && (
        (blocTurtle6_Turtle2.whereY() >= frog.offsetTop - POM) && (blocTurtle6_Turtle2.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle6_Turtle2.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else if (((blocTurtle6_Turtle3.cordoX >= frog.offsetLeft - (blocTurtle6_Turtle3.taille / 2)) && (blocTurtle6_Turtle3.cordoX <= frog.offsetLeft + (blocTurtle6_Turtle3.taille / 2))) && (
        (blocTurtle6_Turtle3.whereY() >= frog.offsetTop - POM) && (blocTurtle6_Turtle3.whereY() <= frog.offsetTop + POM))) {
        let a = frog.offsetLeft;
        let b = blocTurtle6_Turtle3.cordoX;
        let c = b - a;
        moveFrog(c, 0);
        frogOnObject = true;
        console.log("Tortue colision");
    }
    else {
        frogOnObject = false;
    }

}
setInterval(colisionWithObjectWater, 20);

function waterDeath() {
    var eau = document.getElementById("water");
    var frog = document.getElementById("frog");
    var waterRect = eau.getBoundingClientRect();
    var frogRect = frog.getBoundingClientRect();

    if ((frogRect.left < waterRect.right && frogRect.right > waterRect.left && frogRect.top < waterRect.bottom && frogRect.bottom > waterRect.top) && (frogOnObject === false)) {
        console.log("Vous êtes mort noyé !!");
        resetFrogPosition();
        decreaseLife()
    }
}
setInterval(waterDeath, 20);
