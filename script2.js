function getComputerChoice() {  // this function will let the computer pick at random rock, paper or scissors.//
    randomNum = Math.floor(Math.random() * 3); // this is done by first picking a random number from 0 to 2//
    if (randomNum === 0) { //after the number is chosen, the results will be assigned a choice//
        cPick = "Rock"

    } else if (randomNum === 1) {
        cPick = "Paper"

    } else if (randomNum === 2) {
        cPick = "Scissors"

    }

    return cPick  // this what this function ultimately returns, one choice rock, paper, or scissors.

}
let result;

function playRound(userPick, cPick) { // I want to put the userpick (rock), and computerPick(random) against each other

    if ( cPick === userPick ) {
        return ("It's a draw!")
// seperation made intentionally to differentiate between winning, losing and draw sections.


    } else if (cPick === "Paper" && userPick === "Rock") {
        result = ("loser")
        return("You lost! Paper beats Rock!")
    } else if (cPick === "Rock" && userPick === "Scissors") {
        result = ("loser")
        return("You lost! Rock beats Scissors")
    } else if (cPick === "Scissors" && userPick === "Paper") {
        result = ("loser")
        return("You lost! Scissors beats Paper!")
// seperation made intentionally to differentiate between winning, losing and draw sections.

    } else if ( cPick === "Scissors" && userPick === "Rock") {
        result = ("winner")
        return ("You won! Rock beats scissors!")

    } else if ( cPick === "Paper" && userPick === "Scissors") {
        result = ("winner")
        return ("You won! Scissors beats Paper!")

    } else if ( cPick === "Rock" && userPick === "Paper") {
        result = ("winner")
        return ("You won! Paper beats Rock!")
    }
    console.log(result)
}

let uPoints = 0
let cPoints = 0

while ( cPoints < 5 && uPoints < 5) { //I want the game to end when cPoints or uPoints === 5
    userPick = prompt("RPS")
    console.log(userPick)
    getComputerChoice()
    console.log(getComputerChoice())
    console.log(cPick)
    playRound(userPick, cPick)
    console.log(playRound(userPick, cPick))
    if (result === "winner") {
        uPoints ++
    } else if (result === "loser") {
        cPoints ++
    }




 }
if (cPoints > uPoints) {
    console.log ("Sorry, the computer beat you")
} else if (uPoints > cPoints) {
    console.log ("You did it! You beat the computer at RPS")
}

console.log(cPoints)
console.log(uPoints) //game complete :)
