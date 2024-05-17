class Obstacle {


    constructor(x, y, dir, step, speed, name, image) {
    	this.name = name;
    	this.image = image;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.step = step;
        this.speed = speed;
    }


    spawnObstacle() {
        this.target = document.createElement("div");
        document.getElementsByClassName("rectangle")[0].appendChild(this.target);
        this.target.className += this.name;
    }
   
    // TODO redo the deplacement so it scales better to different screen sizes and resolutions
    moveObstacle() {
        this.x += this.step;
        this.target.style.left = (this.x + "px");
        this.target.style.top = (this.y + "%");
    }
    
    removeObstacle() {
        this.target.remove();
    }

}

class Log extends Obstacle {

    constructor(x, y, step) {
	super(x, y, "l", step, 0, "log", "foo");
	this.spawnObstacle()
    }
}

class Car extends Obstacle {

    constructor(x, y, step) {
	super(x, y, "l", step, 0, "car", "foo");
	this.spawnObstacle()
    }
}

class Obstacles {

    constructor(speed) {
        this.speed = speed;
        this.content = [];
    }

    addElement(obstacle) {
        this.content.push(obstacle);
    }

    removeElement() {
        this.content.pop();
    }

    moveElements() {
        for (const obstacle of this.content) {
            obstacle.moveObstacle();
            if (obstacle.x >= (screen.width) * 0.75) {
                obstacle.removeObstacle();
                this.content.pop();
            }
        }
    }
}


var c = new Obstacles(25);
for (let i = 0; i < 5; i++) {
    //let a = new Obstacle(i * 100, 60, "left", 1, 25);
    let a = new Car(i * 100, 60, 0);
    c.addElement(a);
}
intervalId = setInterval(function () { c.moveElements(); }, c.speed);

document.getElementById("score").innerText = "Score: " + score;


