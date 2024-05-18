class Obstacle {


    constructor(x, y, dir, speed, name) {
    	this.name = name;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.speed = speed;
    }
    
    // Spawn the obstacle as a child of the rectangle where it will live
    // The element will have his type in the class name in order to render it with CSS
    spawnObstacle(spawnPlace) {
        this.target = document.createElement("div");
        document.getElementById(spawnPlace).appendChild(this.target);
        this.target.className += this.name;
    }
   
    // TODO redo the deplacement so it scales better to different screen sizes and resolutions
    moveObstacle() {
        this.x += this.speed;
        this.target.style.left = (this.x + "px");
        this.target.style.top = (this.y + "%");
    }
    
    removeObstacle() {
        this.target.remove();
    }

}

// For all the following classes :
// - x, y are the spawn coordinates of the obstacle
// - speed is the distance the obstacles move between each frame
// - rank is used when the same type of obstacle need to be on different rows,
// 	it specifies on which one the obstacle need to spawn

class Log extends Obstacle {

    constructor(x, y, speed, rank) {
	super(x, y, "r", speed, "log");
	if(! (rank == 1 || rank == 3 || rank == 5)){ rank = 1; }
	this.spawnObstacle("water" + rank);
    }
}


class Turtle extends Obstacle {

    constructor(x, y, speed, rank) {
	super(x, y, "l", speed, "turtle");
	if(! (rank == 2 || rank == 4)){ rank = 2; }
	this.spawnObstacle("water" + rank);
    }
}

class Truck extends Obstacle {

    constructor(x, y, speed) {
	super(x, y, "l", speed, "car");
	this.spawnObstacle("ground2");
    }
}

class Car1 extends Obstacle {
    // level 1 : pretty slow, when a car dispawn a second one respawns a bit after
    // level 2 : same as level 1 but the cars are faster and they spawn two by two
    // level 3 : even faster and 3 by 3


    constructor(x, y, speed) {
	super(x, y, "r", speed, "car");
	this.spawnObstacle("ground3");
    }
}


class Obstacles {

    constructor(speed) {
        this.speed = speed;
        this.content = [];
	this.start();
    }

    addElement(obstacle) {
        this.content.unshift(obstacle);
    }

    removeElement() {
        this.content.pop();
    }

    moveElements() {
        for (const obstacle of this.content) {
            obstacle.moveObstacle();
            if (obstacle.x >= getPosition(document.getElementByid("plateauDeJeu")).right) {
                obstacle.removeObstacle();
                this.content.pop();
            }
        }
    }

    
}

/*
var c = new Obstacles(25);
for (let i = 0; i < 5; i++) {
    let a = new Car1(i * 100, 60, 10);
    c.addElement(a);
}
intervalId = setInterval(function () { c.moveElements(); }, c.speed);
*/
document.getElementById("score").innerText = "Score: " + score;

