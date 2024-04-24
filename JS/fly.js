function generateFly() {
    var randomCase = randomInt(1, 5);

    var caseFin = document.querySelector(".caseFin" + randomCase);

    var flyImage = document.createElement("img");
    flyImage.src = "../IMAGE/fly.png";
    var caseWidth = caseFin.offsetWidth;
    var caseHeight = caseFin.offsetHeight;

    flyImage.style.width = caseWidth + "px";
    flyImage.style.height = caseHeight + "px";

    caseFin.appendChild(flyImage);

    setTimeout(function () {
        caseFin.removeChild(flyImage);
    }, 5000);
}

setInterval(generateFly, 10000);