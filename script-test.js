
// finding out why entering invalid response at first returns undefined

function getUserSelection(input) {
    let convertedInput = input[0].toUpperCase() + input.slice(1).toLowerCase();
    if (convertedInput === "Rock" || convertedInput === "Scissors" || convertedInput === "Paper") {
      alert (`You have chosen ${convertedInput}`);
      return convertedInput;
    } else {
      input = prompt(`Sorry ${input} is not a valid weapon. Please choose again`, "Type Rock, Scissors or Paper");
      return getUserSelection(input);
    }
  }
  
  let value = getUserSelection('asd');
  console.log(value);
  // returns undefined
  
//let value2 = getUserSelection('rock');
    //console.log(value2);
  // returns rock