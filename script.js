var frog = document.getElementById("frog");
var scoreDisplay = document.getElementById("score");
var frog_image = document.getElementById("frogger_image");
var frogPositionX = 0;
var frogPositionY = window.innerHeight - frog.clientHeight;
var score = 0;
var compteur = 0;

frog.style.left = frogPositionX + "px";
frog.style.top = frogPositionY + "px";

function moveFrog(directionX, directionY) {
    frogPositionX += directionX;
    frogPositionY += directionY;
    frog.style.left = frogPositionX + "px";
    frog.style.top = frogPositionY + "px";
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowLeft":
            moveFrog(-20, 0);
            frog.style.transform = "rotate(" + (-90) + "deg)";
            break; 
        case "ArrowUp":
            compteur += 10;
            score += 10; 
            if (score == compteur) {
                scoreDisplay.innerText = "Score: " + score;
            } else {
                score = score - 10;
            }
            moveFrog(0, -20);
            frog.style.transform = "rotate(" + (0) + "deg)"; 
            break;
        case "ArrowRight":
            moveFrog(20, 0);
            frog.style.transform = "rotate(" + (90) + "deg)";
            break;
        case "ArrowDown":
            compteur = compteur - 10;
            moveFrog(0, 20);
            frog.style.transform = "rotate(" + (180) + "deg)";
            break;
    }
});

function checkWin() {
    var frogRect = frog.getBoundingClientRect();

    // CaseFin 1
    var caseFin1 = document.querySelector(".caseFin1");
    var caseFinRect1 = caseFin1.getBoundingClientRect();
    if (
        frogRect.left < caseFinRect1.right &&
        frogRect.right > caseFinRect1.left &&
        frogRect.top < caseFinRect1.bottom &&
        frogRect.bottom > caseFinRect1.top
    ) {
        caseFin1.innerHTML = "<img src='victory.png' style='width: 100%; height: 100%;'>";
        resetFrogPosition();
    }

    // CaseFin 2
    var caseFin2 = document.querySelector(".caseFin2");
    var caseFinRect2 = caseFin2.getBoundingClientRect();
    if (
        frogRect.left < caseFinRect2.right &&
        frogRect.right > caseFinRect2.left &&
        frogRect.top < caseFinRect2.bottom &&
        frogRect.bottom > caseFinRect2.top
    ) {
        caseFin2.innerHTML = "<img src='victory.png' style='width: 100%; height: 100%;'>";
        resetFrogPosition();
    }
    var caseFin3 = document.querySelector(".caseFin3");
    var caseFinRect3 = caseFin3.getBoundingClientRect();
    if (
        frogRect.left < caseFinRect3.right &&
        frogRect.right > caseFinRect3.left &&
        frogRect.top < caseFinRect3.bottom &&
        frogRect.bottom > caseFinRect3.top
    ) {
        caseFin3.innerHTML = "<img src='victory.png' style='width: 100%; height: 100%;'>";
        resetFrogPosition();
    }
    var caseFin4 = document.querySelector(".caseFin4");
    var caseFinRect4 = caseFin4.getBoundingClientRect();
    if (
        frogRect.left < caseFinRect4.right &&
        frogRect.right > caseFinRect4.left &&
        frogRect.top < caseFinRect4.bottom &&
        frogRect.bottom > caseFinRect4.top
    ) {
        caseFin4.innerHTML = "<img src='victory.png' style='width: 100%; height: 100%;'>";
        resetFrogPosition();
    }
    var caseFin5 = document.querySelector(".caseFin5");
    var caseFinRect5 = caseFin5.getBoundingClientRect();
    if (
        frogRect.left < caseFinRect5.right &&
        frogRect.right > caseFinRect5.left &&
        frogRect.top < caseFinRect5.bottom &&
        frogRect.bottom > caseFinRect5.top
    ) {
        caseFin5.innerHTML = "<img src='victory.png' style='width: 100%; height: 100%;'>";
        resetFrogPosition();
    }

 
    

}
function generateFly() {
    var randomCase = randomInt(1, 5);

    var caseFin = document.querySelector(".caseFin" + randomCase);

    var flyImage = document.createElement("img");
    flyImage.src = "fly.png";
    var caseWidth = caseFin.offsetWidth;
    var caseHeight = caseFin.offsetHeight;
    
    flyImage.style.width = caseWidth + "px";
    flyImage.style.height = caseHeight + "px";

    caseFin.appendChild(flyImage);

    setTimeout(function() {
        caseFin.removeChild(flyImage);
    }, 5000);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(generateFly, 10000);

function resetFrogPosition() {
    frogPositionX = 0;
    frogPositionY = window.innerHeight - frog.clientHeight;
    frog.style.left = frogPositionX + "px";
    frog.style.top = frogPositionY + "px";
}

setInterval(checkWin, 100);


class Obstacle {

    step = 1;
    name = "obstacle";
    image = "Obstacle.png";
  
    constructor(x, y, dir, step, speed) {
      this.x = x;
      this.y = y;
      this.dir = dir;
      this.step = step;
      this.speed = speed;
      this.target = document.createElement("div");
      document.getElementsByClassName("rectangle")[0].appendChild(this.target);
      this.target.className = this.name;
    }
  
    moveObstacle(){
        this.x += this.step;
        this.target.style.left = (this.x + "px");
        this.target.style.top = (this.y + "px");
    }
  
    removeObstacle(){
        this.target.remove();
    }
  
  }
  
  class Obstacles {
  
      constructor(speed) {
          this.speed = speed;
          this.content = [];
      }
  
      addElement(obstacle){
          this.content.push(obstacle);
      }
  
      removeElement(){
          this.content.pop();
      }
  
      moveElements(){
          for (const obstacle of this.content){
              obstacle.moveObstacle();
              if(obstacle.x >= (screen.width)*0.75){
                  obstacle.removeObstacle();
                  this.content.pop();
              }
          }
      }
  }
  
  
  let c = new Obstacles(25);
  for(let i =0; i < 5;i++){
      let a = new Obstacle(i*100, 0, "left", 1, 25);
      c.addElement(a);
  }
  intervalId = setInterval(function(){c.moveElements();}, c.speed);
  
  document.getElementById("score").innerText = "Score: " + score;

