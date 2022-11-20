// create button elements
const elementRock = document.getElementById("Rock");
const elementPaper = document.getElementById("Paper");
const elementSciss = document.getElementById("Scissors");

let hScore = 0;
let cScore = 0;

// create button event listeners and convert click to integer corresponding to rock/paper/scissors
elementRock.addEventListener("click", RPS);
//elementRock.buttonParam = "Smash";
elementRock.buttonParam = 1;
elementPaper.addEventListener("click", RPS);
//elementPaper.buttonParam = "Rustle";
elementPaper.buttonParam = 2;
elementSciss.addEventListener("click", RPS);
//elementSciss.buttonParam = "Snip-Snip";
elementSciss.buttonParam = 3;

// here comes the business
function RPS(evt) {
  /* https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
  the following function I built using the above link */
  
  let humanChoice = evt.currentTarget.buttonParam;
  // generate compuret choice
  let computerChoice = (Math.floor(Math.random() * 3) + 1);
  
  //choice readout
  document.getElementById("playerChoice").innerHTML = "human chose: " + humanChoice;
  document.getElementById("computerChoice").innerHTML = "computer chose: " + computerChoice;
  //calculate winner
  winnerCalc = humanChoice - computerChoice;
    
  /*https:\/\/eduherminio.github.io\/blog\/rock-paper-scissors
  the following 'if else' logic was built with help from the above link. 
  it makes a decision of who wins, anounces it and increments score
  */
  
  if (humanChoice === computerChoice) {
    document.getElementById("winnerAnn").innerHTML = "draw";
  } else if (winnerCalc === 1 || winnerCalc === -2){
    document.getElementById("winnerAnn").innerHTML = "human wins this round";
    hScore ++
  } else if (winnerCalc === -1 || winnerCalc === 2){
    document.getElementById("winnerAnn").innerHTML = "computer wins this round";
    cScore ++
  } else {
    document.getElementById("winnerAnn").innerHTML = "error";
  }
  
  //total score readout
  document.getElementById("score").innerHTML = "total score   " + hScore + " : " + cScore;
}
