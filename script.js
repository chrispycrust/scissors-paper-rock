let gameCount = 1;
let userScore = 0;
let computerScore = 0;
game();

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
    // compare userWins and computerWins - declare winner and provide report on number of wins
    console.log(`Scoreboard | YOU: ${userScore} | COMPUTER: ${computerScore}`)
    console.log("Thanks for playing!");
  }
}

// --------- HELPER FUNCTIONS

function getUserSelection(input) {
    let convertedInput = input[0].toUpperCase() + input.slice(1).toLowerCase();
    if (convertedInput === "Rock" || convertedInput === "Scissors" || convertedInput === "Paper") {
      console.log(`You have chosen ${convertedInput}`);
      return(convertedInput);
    } else {
      input = prompt(`Sorry ${input} is not a valid weapon. Please choose again`, "Type Rock, Scissors or Paper");
      getUserSelection(input);
    }
  }

function getComputerChoice() {
  const choices = ["Rock", "Scissors", "Paper"];
  return choices[Math.floor(Math.random()*choices.length)];
}

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors" 
      || playerSelection === "Scissors" && computerSelection === "Paper" 
      || playerSelection === "Paper" && computerSelection === "Rock" 
) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    userScore++;
  } else {
    console.log(`Computer Wins! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
}

function scoreboard() {
    console.log(`Scoreboard | YOU: ${userScore} | COMPUTER: ${computerScore}`);
}


  //advise what number round this is, instructions e.g. 5 games
  // not sure whether to put include in prompt

  //Game MC: 
  if gameCount === 1 {
    console.log("Get ready to play ..."); 
  }
  if gameCount === 5 {
    console.log("Final round, here we go!");
  }

// allow way for user to end game pre-maturely at any stage - if they click cancel on the prompt or type a word like 'cancel', this exit word should be introduced at the start of the game 
// message: see you next time!

// TESTS
gameRound("Rock", "Scissors"); 
// expected: You Win! Rock beats Scissors
gameRound("Scissors", "Paper"); 
// expected: You Win! Scissors beats Paper
gameRound("Paper", "Rock"); 
// expected: You Win! Paper beats Rock
gameRound("Scissors", "Rock"); 
// expected: Computer Wins! Rock beats Scissors
gameRound("Scissors", "Scissors"); 
// expected: It's a draw!