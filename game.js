const elementRock = document.getElementById("Rock");
const elementPaper = document.getElementById("Paper");
const elementSciss = document.getElementById("Scissors");

elementRock.addEventListener("click", myFunction(R));
elementPaper.addEventListener("click", myFunctionP);
elementSciss.addEventListener("click", myFunctionS);

      function myFunctionR() {
        document.getElementById("demo").innerHTML = "Smash";
      }

      function myFunctionP() {
        document.getElementById("demo").innerHTML = "Rustle";
      }

      function myFunctionS() {
        document.getElementById("demo").innerHTML = "Snip-Snip";
      }


/*set a variable to message (smash or rustle or snip-snip)

function RPS(hand it down message variable) {
  document.getElementByID("demo").innerHTML = "message variable";
*/


}
