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
            if ( ( obstacle.x >= (screen.width) * 0.4) /*|| ( obstacle.x < 20 ) */) {
                obstacle.removeObstacle();
                this.content.shift();
            }
        }
    }
	
	length() {
		let n=0;
		for (const obstacle of this.content) {
				n++;
		}
		return(n);
	}
}

function checkForNewObstacle() {
	for (let i = 0; i < 5; i++) {
		checkForRow(i);
	}
}

function checkForRow(idx) {
	if ( c[idx].length() < maxObstacle ) {
		
		rec=Math.floor(Math.random() * 100) + rnd;
        /* fait un petit rendu aléatoire, mais augmente une valeur à chaque boucle pour s'assurer qu'un nouvel obstacle est créé après quelques temps */
		if ( rec > 98 ) {
			rnd=0;
			if ( (idx % 2) == 0 ) {
				let a = new Obstacle( 1, (idx * 5)+20 , "left", step[idx], 100);
				c[idx].addElement(a);
			} else {
				let a = new Obstacle( 1, (idx * 5)+20 , "left", step[idx], 100);
				c[idx].addElement(a);
			}
		}
	}
		
	c[idx].moveElements();	
}
			
nObstacle=0;
maxObstacle=20;
rnd=0;
let c = [];
let step = [];
for (let i = 0; i < 5; i++) {
	c[i] = new Obstacles(maxObstacle);
	step[i] = (Math.floor(Math.random() * (3-1+1))) + 1;
    console.log(step[i]);
}

intervalId = setInterval( checkForNewObstacle , 30);

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