var frog = document.getElementById("frog");

var frogPositionX = 0;
var frogPositionY = window.innerHeight - frog.clientHeight; 

frog.style.left = frogPositionX + "px";
frog.style.top = frogPositionY + "px";
var score = 0; 
var compteur = 0

var col = false;

function moveFrog(directionX, directionY) {
    frogPositionX += directionX;
    frogPositionY += directionY;
    frog.style.left = frogPositionX + "px";
    frog.style.top = frogPositionY + "px";
    console.log(frogPositionX + " / " + frogPositionY);
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
            if (score==compteur){
            document.getElementById("score").innerText = "Score: " + score;}
            else{score = score-10;}
            moveFrog(0, -20);
            frog.style.transform = "rotate(" + (0) + "deg)";
            break;
        case "ArrowRight":
            moveFrog(20, 0);
            frog.style.transform = "rotate(" + (90) + "deg)";
            break;
        case "ArrowDown":
            compteur = compteur -10;
            moveFrog(0, 20);
            frog.style.transform = "rotate(" + (180) + "deg)";
            break;
    }
});

function collision(xfrog, yfrog, tab_obstacle) {
    for (let i=0; i<5; i++){
        //console.log("tr" + i + ":" + tab_obstacle[i].x + " / " + tab_obstacle[i].y);
        if (xfrog > tab_obstacle[i].x && xfrog < tab_obstacle[i].x + 107){
            if (yfrog > tab_obstacle[i].y && yfrog < tab_obstacle[i].y + 45){
                //return true;
            }
        } /*else {
            return false;
        }*/
    }
    //console.log(" ");
    return false;
}



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

col = setInterval(function(){collision(frogPositionX, frogPositionY, c.content);}, c.speed);

if (col == true){
    alert("You lose");
}
