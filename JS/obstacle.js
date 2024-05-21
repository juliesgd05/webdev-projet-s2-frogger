

class Obstacle {
// This class is the basic representation of any type of obstacle
// Every other type of obstacle are daughter classes of this one
// Attributes :
//  - name : name of the obstacle, HTML class in order to apply CSS
//  - x, y : the position of the obstacle relative to his parent
//  - dir : the direction taken by the obstacle "l" for left or "r" for right
//  - boardPos : the coordinates of the game board shouldn't be an attribute but simplifies the code
//  - speed : the pourcentage of the board the obstacle travels every second 
    
    // Create an instance of Obstacle, see attributes
    constructor(dir, speed, refreshRate, name, deadly) {
    	this.name = name;
        this.x = 0;
        this.y = 0;
	if(dir == "l" || dir == "r"){
	    this.dir = dir;
	}else{
	    this.dir = "r";
	}
	this.boardPos = getPosition(document.getElementById("plateauDeJeu"));
	// Convert the speed from a pourcentage of the board to a number of pixels
        this.speed = ((this.boardPos.right - this.boardPos.left)*(speed/100))/refreshRate;
	this.deadly = deadly ? true : false;
    }
    
    // Spawn the obstacle as a child of the rectangle where it will live
    // The element will have his type in the class name in order to render it with CSS
    spawn(spawnPlace) {
        this.target = document.createElement("div");
        let spawnDiv = document.getElementById(spawnPlace);
	spawnDiv.appendChild(this.target);
        this.target.className += this.name;
	this.target.className += " obstacle";
	this.y = getPosition(spawnDiv).top;
        this.target.style.top = (this.y + "px");
	if(this.dir == "l"){
	    this.x = getSize(document.getElementById("plateauDeJeu")).width;
	    this.target.style.left = (this.x + "px");
	}
	else{
	    // Makes the obstacle spawn outside of the board so it looks like it slides in
	    this.x = - (getSize(this.target).width); 
	    this.target.style.left = (this.x + "px");
	}
	this.target.style.height += getSize(spawnDiv).height + "px";

    }
  
    // Moves the obstacle according to its speed (previously calculated to be in pixels) and its direction
    move() {	
	if(this.dir == "l"){
	    this.x -= this.speed;
	}
	else{
	    this.x += this.speed;
	}
        this.target.style.left = (this.x + "px");
    }
    
    // Deletes the obstacle from the DOM
    remove() {
        this.target.remove();
    }

}

// For all the following classes :
// - x, y are the spawn coordinates of the obstacle
// - speed is the distance the obstacles move between each frame
// - rank is used when the same type of obstacle need to be on different rows,
// 	it specifies on which one the obstacle need to spawn

class Log extends Obstacle {

    constructor(speed, refreshRate, rank) {
	super("r", speed, refreshRate, "log", false);
	if(! (rank == 1 || rank == 3 || rank == 5)){ rank = 1; }
	this.spawn("water" + rank);
    }
}


class Turtle extends Obstacle {

    constructor(speed, refreshRate, rank) {
	super("l", speed, refreshRate, "turtle", false);
	if(! (rank == 2 || rank == 4)){ rank = 2; }
	this.spawn("water" + rank);
    }
}

class Truck extends Obstacle {

    constructor(speed, refreshRate) {
	super("l", speed, refreshRate, "truck", true);
	this.spawn("ground1");
    }
}

class Car1 extends Obstacle {

    constructor(speed, refreshRate) {
	super("r", speed, refreshRate, "car1", true);
	this.spawn("ground2");
    }
}

class Car2 extends Obstacle {

    constructor(speed, refreshRate) {
	super("l", speed, refreshRate, "car2", true);
	this.spawn("ground3");
    }
}

class Car3 extends Obstacle {

    constructor(speed, refreshRate) {
	super("r", speed, refreshRate, "car3", true);
	this.spawn("ground4");
    }
}

class Car4 extends Obstacle {

    constructor(speed, refreshRate) {
	super("l", speed, refreshRate, "car4", true);
	this.spawn("ground5");
    }
}

// End of the classes mentionned by the previous comment


class Obstacles {
    // This class is used to spawn, dispawn and move the obstacles
    // Attributes :
    //	- obstacleCount : number of obstacles 
    //	- content : an object containing one array for every row of the board
    //	- refreshRate : the refresh rate of the game, can be adjusted without any effect on the game present to be able to easily make the game fluid without lag
    //	- itCounter : iteration counter to know when to spawn an obstacle
    //	- intervalId : the id returned by the setInterval to be able to stop and change level


    constructor(refreshRate) {
	if(refreshRate == 0){ 
	    console.error("Invalid refresh rate, setting to default (60)");
	    refreshRate = 60;
	}
	this.refreshRate = refreshRate
	this.content = {
	    "water1" : [],
            "water2" : [],
            "water3" : [],
            "water4" : [],
            "water5" : [],
	    "ground1" : [],
            "ground2" : [],
            "ground3" : [],
            "ground4" : [],
            "ground5" : []
	}
	this.obstacleCount = 0;
	this.itCounter = 0;
	this.intervalId = 0;
    }
    
    // The collision computation needs an array of all the obstacles, this method returns one
    getContent() {
	let content = [];
	for(const [key, ar] of Object.entries(this.content)){
	    for(const el of ar){
		content.push(el);
	    }
	}
	return content;
    }
    
    // move all the obstacles and dispawn them if needed
    moveElements() {
	for(const [key, ar] of Object.entries(this.content)){
	    for (const obstacle of ar) {
                obstacle.move();
		// Check if the obstacle is outside of the board, if so dispawn it
                if (
		    obstacle.dir == "r" &&
		    getPosition(obstacle.target).left >= getPosition(document.getElementById("plateauDeJeu")).right ||
		    obstacle.dir == "l" &&
		    getPosition(obstacle.target).right <= getPosition(document.getElementById("plateauDeJeu")).left
		) {
                    obstacle.remove();
                    ar.pop();
		    this.obstacleCount--;
                }
            }
	}
	let collided = collision(frog, this);
	let death = waterCollision(frog);
	if(collided.col){
	    if(collided.touched.deadly){
		death = true;
	    }else{
		death = false;
		moveFrog(collided.touched.speed, 0);	
	    }
	}
	if(death){
	    resetFrogPosition();
	    decreaseLife();
	}
    }

    spawnObstacle(type, speed, rankPlace, rank=0){
	let obstacle;
	if(rank == 0){
	    obstacle = new type(speed, this.refreshRate);
	}
	else{
	    obstacle = new type(speed, this.refreshRate, rank);
	}
	rankPlace.unshift(obstacle);
	this.obstacleCount++;
    }

    spawnLevel1() {
	this.itCounter++;
	if(this.itCounter % (this.refreshRate * 2) == 0){
	//    let log = new Log(10, this.refreshRate,1);
	//    this.content.water1.unshift(log);
        //    this.content.water2.unshift(log);
	//    this.obstacleCount++;
	this.spawnObstacle(Log, 10, this.content.water1, 1);

        let log2 = new Log(8, this.refreshRate,5);
        this.content.water5.unshift(log2);
        this.obstacleCount++;

        let log3 = new Log(12, this.refreshRate,3);
        this.content.water3.unshift(log3);
        this.obstacleCount++;

        

        // let log2 = new Log(10, this.refreshRate,2);
	    // this.content.water2.unshift(log2);
        // this.content.water2.shift(log2);
	    // this.obstacleCount++;

        let truck = new Truck(10, this.refreshRate);
	    this.content.ground1.unshift(truck);
	    this.obstacleCount++;

        let car1 = new Car1(10, this.refreshRate);
	    this.content.ground2.unshift(car1);
	    this.obstacleCount++;

        let car2 = new Car2(10, this.refreshRate);
	    this.content.ground3.unshift(car2);
	    this.obstacleCount++;

        let car3 = new Car3(10, this.refreshRate);
	    this.content.ground4.unshift(car3);
	    this.obstacleCount++;

        let car4 = new Car4(10, this.refreshRate);
	    this.content.ground5.unshift(car4);
	    this.obstacleCount++;

	}
	this.moveElements();
    }

    // start spawning the obstacles for a particular level
    start(levelNumber) {
	let t = this;
	switch(levelNumber){
	    case 1:
		// 1000/refreshRate because we take a number of fps in parameter so we convert it to a number of milliseconds
		this.intervalId = setInterval(function() { t.spawnLevel1(); }, 1000/this.refreshRate);
		break;

	    default:
		this.intervalId = 0;
		console.error("Unknow level number");
	}
    }

    // stop spawning the obstacles and dispawn all obstacles on the board
    stop(){
	if(this.intervalId != 0){
	    clearInterval(this.intervalId);
	    for(let [key, arr] of Object.entries(this.content)){
		for(let obstacle of arr){
		    obstacle.remove();
		}
		arr = [];
	    }
	    this.obstacleCount = 0;
	    this.itCounter = 0;
	    this.intervalId = 0;
	}else{
	    console.error("Cannot stop if not started before");
	}
    }
}

// test code 
var c = new Obstacles(120);
c.start(1);

// TODO move this thing somewhere else
document.getElementById("score").innerText = "Score: " + score;

