const elementRock = document.getElementById("Rock");
const elementPaper = document.getElementById("Paper");
const elementSciss = document.getElementById("Scissors");

elementRock.addEventListener("click", RPS);
//elementRock.buttonParam = "Smash";
elementRock.buttonParam = 1;
elementPaper.addEventListener("click", RPS);
//elementPaper.buttonParam = "Rustle";
elementPaper.buttonParam = 2;
elementSciss.addEventListener("click", RPS);
//elementSciss.buttonParam = "Snip-Snip";
elementSciss.buttonParam = 3;

/* https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
the following function I built using the above link */

function RPS(evt) {
  var humanChoice = evt.currentTarget.buttonParam;
  var computerChoice = (Math.floor(Math.random() * 3) + 1);
  
  document.getElementById("playerChoice").innerHTML = humanChoice;
  document.getElementById("computerChoice").innerHTML = computerChoice;
  
  winnerOperator = humanChoice - computerChoice;
  document.getElementById("winnerOperator").innerHTML = winnerOperator;
  
  if (humanChoice === computerChoice) {
    document.getElementById("winnerAnn").innerHTML = "draw";
  } else if (winnerOperator === 1 || winnerOperator === -2){
    document.getElementById("winnerAnn").innerHTML = "human wins";
  } else if (winnerOperator === -1 || winnerOperator === 2){
    document.getElementById("winnerAnn").innerHTML = "computer wins";
  } else {
    document.getElementById("winnerAnn").innerHTML = "error";
  }
}

/*https://eduherminio.github.io/blog/rock-paper-scissors/
Rock = 1
Papper = 2
Scissors = 3
1 beats 3
2 beats 1
3 beats 2
if playerChoice - computerChoice = 1 or -2 than playerScore++
if playerChoice - computerChoice = -1 or 2 than computerScore++
if playerChoice - computerChoice = 0 than draw
*/
