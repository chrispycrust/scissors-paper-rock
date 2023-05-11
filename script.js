alert("Open the console to play");

let gameCount = 1;
let userScore = 0;
let computerScore = 0;
game();

// ------ FUNCTIONS

function game() {
    let input = prompt(`Round ${gameCount} | Choose your weapon`, "Type Rock, Scissors or Paper");
    let playerSelection = getUserSelection(input);
  
    let computerSelection = getComputerChoice();
    console.log(`Computer has chosen ${computerSelection}`);
  
    gameRound(playerSelection, computerSelection);
    scoreboard();
  
    if (gameCount < 5) {
      gameCount++;
      game();
    } else {
      if (computerScore > userScore) {
        console.log(scoreboard(userScore, computerScore) + " Computer is the winner!");
        console.log("Thanks for playing!");
      } else if (computerScore === userScore) {
        console.log(scoreboard(userScore, computerScore) + " You're both winners!");
        console.log("Thanks for playing!");
      } else {
        console.log(scoreboard(userScore, computerScore) + " You're the winner!");
        console.log("Thanks for playing!");
      }
    }
}

function getUserSelection(input) {
    let convertedInput = input[0].toUpperCase() + input.slice(1).toLowerCase();
    if (convertedInput === "Rock" || convertedInput === "Scissors" || convertedInput === "Paper") {
      console.log(`You have chosen ${convertedInput}`);
      return(convertedInput);
    } else {
      input = prompt(`Sorry ${input} is not a valid weapon. Please choose again`, "Type Rock, Scissors or Paper");
      return getUserSelection(input);
    }
  }

function getComputerChoice() {
  const choices = ["Scissors", "Paper", "Rock"];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Round ${gameCount} | It's a draw!`);
  } else if (playerSelection === "Rock" && computerSelection === "Scissors" 
      || playerSelection === "Scissors" && computerSelection === "Paper" 
      || playerSelection === "Paper" && computerSelection === "Rock" 
) {
    console.log(`Round ${gameCount} | You Win! ${playerSelection} beats ${computerSelection}`);
    userScore++;
  } else {
    console.log(`Round ${gameCount} | Computer Wins! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
}

function scoreboard(userScore, computerScore) {
    return String((`Scoreboard | YOU: ${userScore} | COMPUTER: ${computerScore}`));
}
