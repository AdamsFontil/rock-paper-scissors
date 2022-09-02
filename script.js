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

let userPick = prompt ("Take a pick") // setting userpick to const for now to control program
let cPick = getComputerChoice()
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

    // program finally works with 2 inputs, where it checks for two conditions before returning the result.





    function game() { // loop for 5 rounds, increase count only in win/lose outcomes, after a score of 5 is reached announce winner.
        let i = 0
        let cPoints = 0
        let uPoints = 0
        while (i < 5) {
            userPick
            playRound(userPick, getComputerChoice)
            console.log(playRound(userPick, cPick))
            console.log(userPick)
            if (result === "winner") {
                uPoints ++
            } else if (result === "loser") {
                cPoints ++
            }
            i ++
            console.log(uPoints)
            console.log(cPoints)

            if (cPoints === 5) {
                console.log ("Computer Wins, sorry :(")
            } else if (uPoints === 5) {
                console.log ("You win, congrats homey!")
            }


        }
    }

    game ()
