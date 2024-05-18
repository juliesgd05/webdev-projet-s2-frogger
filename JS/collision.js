function collision(xfrog, yfrog, tab_obstacle) {
    for (let i = 0; i < 5; i++) {
        //console.log("tr" + i + ":" + tab_obstacle[i].x + " / " + tab_obstacle[i].y);
        if (xfrog > tab_obstacle[i].x && xfrog < tab_obstacle[i].x + 107) {
            if (yfrog > tab_obstacle[i].y && yfrog < tab_obstacle[i].y + 45) {
                //return true;
            }
        } /*else {
            return false;
        }*/
    }
    //console.log(" ");
    return false;
}
