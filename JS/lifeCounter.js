var life = document.getElementById("vie");
var lives = 3;
function decreaseLife(){
    lives--;
    updateLifeDisplay();
    alive()
}
function alive(){
    if(lives==0){
        console.log("GAME OVER");
        document.location.href="gameOver.html"; 
    }
}


function updateLifeDisplay() {
    
    life.innerHTML = "";

    for (var i = 0; i < lives; i++) {
        
        var img = document.createElement("img");
        img.src = "../IMAGE/victory.png";
        img.style.width = "30px"; 
        img.style.height = "30px"; 
        life.appendChild(img);
    }
}

updateLifeDisplay();
