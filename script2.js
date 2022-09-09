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
        result = ("Draw")
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
}

let userPick;

function getUserChoice() {
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
//   console.log(userPick)
    getComputerChoice();
  playRound(userPick,cPick);
  const results = document.querySelector('.results');

    const roundResult = document.createElement('div');
    roundResult.classList.add('roundResult');
    roundResult.textContent = playRound(userPick,cPick);
    results.appendChild(roundResult);


});
const paper = document.querySelector(".paper");
paper.addEventListener('click', () => {
  counter2 ++
  userPick = "Paper"
//   console.log(`paper: ${counter2}`)
//   console.log(userPick)
    getComputerChoice()
  playRound(userPick,cPick);
  const results = document.querySelector('.results');

    const roundResult = document.createElement('div');
    roundResult.classList.add('roundResult');
    roundResult.textContent = playRound(userPick,cPick);
    results.appendChild(roundResult);

});
const scis = document.querySelector(".scis");
scis.addEventListener('click', () => {
  counter3 ++
  userPick = "Scissors"
  getComputerChoice()
  playRound(userPick,cPick);
  if (result === "winner") { // if playRound returns winner the user's points increases
            uPoints ++
            const results = document.querySelector('.results')
            const uScore = document.createElement('p')
            uScore.textContent = (`Your score: ${uPoints}`)
            results.appendChild(uScore)

        } else if (result === "loser") { // if the playRound function returns loser than the computer's points increases
            cPoints ++
            const results = document.querySelector('.results')
            const uScore = document.createElement('p')
            uScore.textContent = (`Computer's score: ${cPoints}`)
            results.appendChild(uScore)
        }
        if (cPoints > uPoints && cPoints >= 5) { //if after the loop stops cPoints if higher than the computer has won the game.
            const results = document.querySelector('.results')
            const uLost = document.createElement('p')
            uLost.textContent = ("Sorry, the computer beat you")
            results.appendChild(uLost)
} else if (uPoints > cPoints && uPoints >= 5) { // if after the loop stops and uPoints is higher than the user has won.
            const results = document.querySelector('.results')
            const uWon = document.createElement('p')
            uWon.textContent = ("You did it! You beat the computer at RPS")
            results.appendChild(uWon)

}

  const results = document.querySelector('.results');
    const roundResult = document.createElement('div');
    roundResult.classList.add('roundResult');
    roundResult.textContent = playRound(userPick,cPick);
    results.appendChild(roundResult);

});
}

getUserChoice()






// function game () {
// let uPoints = 0
// let cPoints = 0
// let c = 0;

// while ( c < 5) { //I want the game to end when cPoints or uPoints === 5
//     c++

//     getComputerChoice() // runs this function to return cPick
//     getUserChoice() // this function this the userPick and the computer's pick (cPick) to run. This function returns winner, or loser.
//      // displays winner of the round.
//     if (result === "winner") { // if playRound returns winner the user's points increases
//         uPoints ++
//     } else if (result === "loser") { // if the playRound function returns loser than the computer's points increases
//         cPoints ++
//     }
//  }
//  // after either the computer or user reach 5 points the loop stops.

// if (cPoints > uPoints) { //if after the loop stops cPoints if higher than the computer has won the game.
//     console.log ("Sorry, the computer beat you")
// } else if (uPoints > cPoints) { // if after the loop stops and uPoints is higher than the user has won.
//     console.log ("You did it! You beat the computer at RPS")
// }



// //game complete :)
// }

// game ()
