let gameCount = 1;
let input = prompt(`Round ${gameCount} | Choose your weapon`, "Type Rock, Scissors or Paper")
getUserSelection();

function getUserSelection() {
  let playerSelection = input[0].toUpperCase() + input.slice(1).toLowerCase();
  if (playerSelection === "Rock" || playerSelection === "Scissors" || playerSelection === "Paper") {
    console.log(`You have chosen ${playerSelection}`);
  } else {
    input = prompt(`Sorry ${input} is not a valid weapon. Please choose again`, "Type Rock, Scissors or Paper");
    getUserSelection();
  }
}

function getComputerChoice() {
  const choices = ["Rock", "Scissors", "Paper"];
  let computerSelection = choices[Math.floor(Math.random()*choices.length)];
  return computerSelection;
}

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors" 
      || playerSelection === "Scissors" && computerSelection === "Paper" 
      || playerSelection === "Paper" && computerSelection === "Rock" 
) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    userWins++;
  } else {
    console.log(`Computer Wins! ${computerSelection} beats ${playerSelection}`);
    computerWins++;
  }
}

function game() {
  let gameCount = 0; //might make this a global variable?
  let userWins = 0;
  let computerWins = 0;

  gameRound(getUserChoice(), getComputerChoice());
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

  //at the end of each game, if gameCount <= 5, increment gameCount 
  if (gameCount <= 5) {
    gameCount++;
  } else {
    // compare userWins and computerWins - declare winner and provide report
    console.log(`Scoreboard | YOU: ${userWins} | COMPUTER: ${computerWins}`)
    console.log("Thanks for playing!");
  }

// allow way for user to end game pre-maturely at any stage - if they click cancel on the prompt or type a word like 'cancel', this exit word should be introduced at the start of the game 
// message: see you next time!

//TESTS
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
gameRound("Scissors", "Scissors"); 
// expected: It's a draw!
