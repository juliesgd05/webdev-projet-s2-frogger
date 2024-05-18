// This class represents a single obstacle it contains information about the obstacle as well as a target to the html element
class Obstacle {


	// create the obstacle, speed is useless and will be removed
    constructor(x, y, dir, step, speed) {

        this.x = x;
        this.y = y;
        this.dir = dir;
        this.step = step;
        this.speed = speed;
    }


    spawnObstacle() {
        this.target = document.createElement("div");
		// Create the HTML element representing the obstacle
        document.getElementsByClassName("rectangle")[0].appendChild(this.target);
        this.target.className += this.name;
    }

    moveObstacle() {
        this.x += this.step;
        this.target.style.left = (this.x + "px");
        this.target.style.top = (this.y + "%");
    }

    removeObstacle() {
        this.target.remove();
    }

}

// This class is made to store obstacles, make them appear and disapear
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


