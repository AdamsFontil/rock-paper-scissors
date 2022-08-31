

console.log("Hello")

randomNum = Math.floor(Math.random() * 3);
   console.log(randomNum)



let cPick; // this is for declaring the cPick variable. The choice that computer goes with //

function getComputerChoice() {  // this function will let the computer pick at random rock, paper or scissors.//
    randomNum = Math.floor(Math.random() * 3); // this is done by first picking a random number from 0 to 2//
    if (randomNum === 0) { //after the number is chosen, the results will be assigned a choice//
        cPick = "Rock"
        console.log("Rock")
    } else if (randomNum === 1) {
        cPick = "Paper"
        console.log("Paper")
    } else if (randomNum === 2) {
        cPick = "Scissors"
        console.log("Scissors")
    }
    return cPick // this what this function ultimately returns, one choice rock, paper, or scissors.
}

getComputerChoice();
