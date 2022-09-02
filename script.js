let computerPick; // this is for declaring the cPick variable. The choice that computer goes with //

function getComputerChoice() {  // this function will let the computer pick at random rock, paper or scissors.//
    randomNum = Math.floor(Math.random() * 3); // this is done by first picking a random number from 0 to 2//
    if (randomNum === 0) { //after the number is chosen, the results will be assigned a choice//
        computerPick = "Rock"

    } else if (randomNum === 1) {
        computerPick = "Paper"

    } else if (randomNum === 2) {
        computerPick = "Scissors"

    }

    return computerPick  // this what this function ultimately returns, one choice rock, paper, or scissors.

}

let userPick = "Rock" // setting userpick to const for now to control program
let cPick = getComputerChoice()

function playRound(userPick, getComputerChoice) { // I want to put the userpick (rock), and computerPick(random) against each other
    if ( cPick === "Rock" && userPick === "Rock") {
        return ("It's a draw!")
    } else if (cPick === "Paper" && userPick === "Rock") {
        return("You lost! Paper beats rock!")
    } else if ( cPick === "Scissors" && userPick === "Rock") {
        return ("You won! Rock beats scissors!")
    }
    } // program finally works with 2 inputs, where it checks for two conditions before returning the result.



    console.log(userPick)
    console.log(cPick)
    console.log(playRound(userPick, getComputerChoice)) //the problem I had was that I didn't put my arguements into the function, now I know :) #very happy.
