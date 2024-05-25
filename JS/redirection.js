function RedirectionPourNiveaux(){
  document.location.href="MenuNiveaux.html"; 
}

function RedirectionPourGameOver(){
  document.location.href="gameOver.html"; 
}

function RedirectionPourRecommencer(){
  document.location.href="pageAcceuil.html"; 
}

function RedirectionPourRegleJeu(){
  document.location.href="regleDuJeu.html"; 
}

let Niv = 0;
function RedirectionNiv1(){
  document.location.href="index.html";
  sessionStorage.setItem('Niv', 1);
  console.log(Niv);
}

function RedirectionNiv2(){
  document.location.href="index.html";
  sessionStorage.setItem('Niv', 2);
}

function RedirectionNiv3(){
  document.location.href="index.html";
  sessionStorage.setItem('Niv', 3);
}