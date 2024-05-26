var life = document.getElementById("vie");
var lives = 3;

// var audioGameOver = document.createElement("audio");
// audioGameOver.src = "../SON/GameOver.mp3";

// myAudio.pause();


function decreaseLife(){
    lives--;
    updateLifeDisplay();
    alive()
}
function alive(){
    if(lives==0){
        console.log("GAME OVER");
        // let audio = new Audio("GameOver.mp3");
        // audio.play();
        document.location.href="gameOver.html"; 
        // audioGameOver.play();
        
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
