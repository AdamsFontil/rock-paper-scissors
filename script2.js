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
let roundResult;

function playRound(userPick, cPick) { // I want to put the userpick (rock), and computerPick(random) against each other
    if ( cPick === userPick ) {
        return ("It's a draw!")
// seperation made intentionally to differentiate between winning, losing and draw sections.


    } else if (cPick === "Paper" && userPick === "Rock") {
        roundResult = ("loser")
        return("You lost! Paper beats Rock!")
    } else if (cPick === "Rock" && userPick === "Scissors") {
        roundResult = ("loser")
        return("You lost! Rock beats Scissors")
    } else if (cPick === "Scissors" && userPick === "Paper") {
        roundResult = ("loser")
        return("You lost! Scissors beats Paper!")
// seperation made intentionally to differentiate between winning, losing and draw sections.

    } else if ( cPick === "Scissors" && userPick === "Rock") {
        roundResult = ("winner")
        return ("You won! Rock beats scissors!")

    } else if ( cPick === "Paper" && userPick === "Scissors") {
        roundResult = ("winner")
        return ("You won! Scissors beats Paper!")

    } else if ( cPick === "Rock" && userPick === "Paper") {
        roundResult = ("winner")
        return ("You won! Paper beats Rock!")
    }
}

function game () {
    if (roundResult === "winner") { // if playRound returns winner the user's points increases
    uPoints ++
} else if (roundResult === "loser") { // if the playRound function returns loser than the computer's points increases
    cPoints ++
}
if ( cPoints === 5 && cPoints > uPoints) { //if after the loop stops cPoints if higher than the computer has won the game.
        result. textContent = ('Sorry, the computer beat you.')
        cPoints = 0;
        uPoints = 0;
    } else if (uPoints === 5 && uPoints > cPoints) { // if after the loop stops and uPoints is higher than the user has won.
        result. textContent = ('You did it! You beat the computer at RPS.')
        cPoints = 0;
        uPoints = 0;
    }
    const uScore = document.querySelector('.uScore')
    uScore.textContent = (`Your score: ${uPoints}`)
    const cScore = document.querySelector('.cScore')
    cScore.textContent = (`Computer's score: ${cPoints}`)
}


let userPick;
let uPoints = 0;
let cPoints = 0;
const result = document.querySelector('.result')

const rock = document.querySelector(".rock");
rock.addEventListener('click', () => {
  userPick = "Rock"
  getComputerChoice()
  playRound(userPick,cPick);
  result.textContent = (playRound(userPick, cPick))
  game()
});
const paper = document.querySelector(".paper");
paper.addEventListener('click', () => {
  userPick = "Paper"
  getComputerChoice()
  console.log(getComputerChoice())
  playRound(userPick,cPick);
  result.textContent = (playRound(userPick, cPick))
  game()
});
const scis = document.querySelector(".scis");
scis.addEventListener('click', () => {
  userPick = "Scissors"
  getComputerChoice()
  playRound(userPick,cPick);
  result.textContent = (playRound(userPick, cPick))
  game()
});
