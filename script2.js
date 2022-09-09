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

function game () {
    if (result === "winner") { // if playRound returns winner the user's points increases
    uPoints ++
    console.log(`your points : ${uPoints}`)
} else if (result === "loser") { // if the playRound function returns loser than the computer's points increases
    cPoints ++
    console.log(`pc points : ${cPoints}`)
}
if ( cPoints === 5 && cPoints > uPoints) { //if after the loop stops cPoints if higher than the computer has won the game.
        console.log ("Sorry, the computer beat you")
        cPoints = 0;
        uPoints = 0;
    } else if (uPoints === 5 && uPoints > cPoints) { // if after the loop stops and uPoints is higher than the user has won.
        console.log ("You did it! You beat the computer at RPS")
        cPoints = 0;
        uPoints = 0;
    }
}


let userPick;
let counter = 0;
let counter2 = 0;
let counter3 = 0;
let uPoints = 0;
let cPoints = 0;


const rock = document.querySelector(".rock");
rock.addEventListener('click', () => {
  counter ++
//   console.log(`rock: ${counter}`)
  userPick = "Rock"
  getComputerChoice()
  console.log(userPick)
  console.log(getComputerChoice())
  playRound(userPick,cPick);
//   console.log(playRound(userPick,cPick));
    game()
});
const paper = document.querySelector(".paper");
paper.addEventListener('click', () => {
  counter2 ++
  userPick = "Paper"
  getComputerChoice()
//   console.log(`paper: ${counter2}`)
  console.log(userPick)
  console.log(getComputerChoice())
  playRound(userPick,cPick);
//   console.log(playRound(userPick,cPick));
    game()
});

const scis = document.querySelector(".scis");
scis.addEventListener('click', () => {
  counter3 ++
  userPick = "Scissors"
  getComputerChoice()
//   console.log(getComputerChoice())
//   console.log(`Scissors: ${counter3}`)
//   console.log(userPick)
  playRound(userPick,cPick);
  console.log(playRound(userPick,cPick));
    console.log(result)
    game()

});
