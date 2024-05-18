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

    moveObstacle() {
        this.x += this.step;
        this.target.style.left = (this.x + "px");
        this.target.style.top = (this.y + "%");
    }

    removeObstacle() {
        this.target.remove();
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


let c = new Obstacles(25);
for (let i = 0; i < 5; i++) {
    let a = new Obstacle(i * 100, 20, "left", 1, 25);
    c.addElement(a);
}
intervalId = setInterval(function () { c.moveElements(); }, c.speed);

document.getElementById("score").innerText = "Score: " + score;


function detectionSortiePlateauLargeur(frogPositionX) {
    if (frogPositionX < 0) {
        return false;
    }
    else if (frogPositionX > tailleEcran * 0.50 - 60) {
        return false;
    }
    else {
        return true;
    }

}