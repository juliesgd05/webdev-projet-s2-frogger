
/// Computes if there is any collision when called
/// Args :
/// - frog : a target to the frog
/// - obstacles : an instance of the Obstacles class storing the obstacles on the field
/// Return :
/// An object {"col" : false} if there is no colision or {"col" : true, "touched" : the_collided_obstacle} otherwise
function collision(frog, obstacles) {
    let posFrogFull = getPosition(frog);
    let sizeFrog = getSize(frog);
    // Computes the x, y position of the center of the frog
    let posFrog = {"x" : posFrogFull.left + sizeFrog.width/2, "y" : posFrogFull.top + sizeFrog.height/2};
    let content = obstacles.getContent();
    for (let i = 0; i < obstacles.obstacleCount; i++) {
	let pos = getPosition(content[i].target);
	if(
	  posFrog.y < pos.bottom && 
	  posFrog.y > pos.top &&
	  posFrog.x > pos.left &&
	  posFrog.x < pos.right
	){
		console.log(posFrog, pos);
       		return {"col" : true, "touched" : content[i]};     
        }
    }
    return {"col" : false};
}

function waterCollision(frog){
    let posFrogFull = getPosition(frog);
    let sizeFrog = getSize(frog);
    // Computes the x, y position of the center of the frog
    let posFrog = {"x" : posFrogFull.right + sizeFrog.width/2, "y" : posFrogFull.top + sizeFrog.height/2};
    let posWater = getPosition(document.getElementById("water"));
    if(
        posFrog.x < posWater.right &&
        posFrog.x > posWater.left &&
        posFrog.y < posWater.bottom &&
        posFrog.y > posWater.top
    ){
	return true;
    }
    return false;
}
