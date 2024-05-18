
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

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
