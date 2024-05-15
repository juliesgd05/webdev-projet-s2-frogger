/// Returns the real top, bottom, left and right position of a target
function getPosition(target){
	let left = target.getBoundingClientRect().left;
	let right = target.getBoundingClientRect().right;
	let bottom = target.getBoundingClientRect().bottom;
	let top = target.getBoundingClientRect().top;
	return { "left" : left, "right" : right, "bottom" : bottom, "top" : top };
}

/// Returns the real widht and height of a target
function getSize(target){
	let width = target.getBoundingClientRect().width;
	let height = target.getBoundingClientRect().height;
	return { "width" : width, "height" : height };
}


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
	let posFrog = {"x" : posFrogFull.right + sizeFrog.width/2, "y" : posFrogFull.top + sizeFrog.height/2};
	for (let i = 0; i < 5; i++) {
		let pos = getPosition(obstacles.content[i].target);
		if(
		  posFrog.y < pos.bottom && 
		  posFrog.y > pos.top &&
		  posFrog.x > pos.left &&
		  posFrog.x < pos.right
		){
       			return {"col" : true, "touched" : obstacles.content[i]};     
        	}
    }
    return {"col" : false};
}
