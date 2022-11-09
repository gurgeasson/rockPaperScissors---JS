const elementRock = document.getElementById("Rock");
const elementPaper = document.getElementById("Paper");
const elementSciss = document.getElementById("Scissors");

elementRock.addEventListener("click", RPS);
elementRock.buttonParam = "Smash"
elementPaper.addEventListener("click", RPS);
elementPaper.buttonParam = "Rustle"
elementSciss.addEventListener("click", RPS);
elementSciss.buttonParam = "Snip-Snip"

/* https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
the following function I built using the above link */

function RPS(evt) {
  document.getElementById("playerChoice").innerHTML = evt.currentTarget.buttonParam;
  document.getElementById("computerChoice").innerHTML = (Math.floor(Math.random() * 3) + 1);
}

https://eduherminio.github.io/blog/rock-paper-scissors/
