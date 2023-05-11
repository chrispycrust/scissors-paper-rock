# scissors-paper-rock

code for the odin project's beginner js project: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

## remaining issues

✅ ISSUE 1
If player makes an in an invalid input at first before finalising the right answer, this invalid input transfers into the final report as 'undefined' - the program doesn't record the input that's actually accepted

```
You have chosen Paper
Computer has chosen Scissors
Computer Wins! Scissors beats undefined
Scoreboard | YOU: 2 | COMPUTER: 2
```

Chrome debugger shows if a valid input is finally given after an invalid input, the function doesn't terminate at "return" but makes an extra step and evaluates the entire function - the value of which is "undefined." This is the last return value. 

If a valid input is given from the get go, the function goes through the conditional then terminates at return inside the positive case as expected.

This must have something to do with the else statement where I'm getting the function to call itself again. ... I'm not sure if this is recursive function - apparently an advanced topic.

**SOLUTION**
Visited MDN doc on returning a function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

The article gives this example - it's possible to return a function 
```
function magic() {
  return function calc(x) {
    return x * 42;
  };
}

const answer = magic();
answer(1337); // 56154
```

Added return to the else statement where I call the function again - now program works as expected.

⬜️ ISSUE 5
I wonder if i can do this another way other than getting the function to call itself?

✅ ISSUE 2
scoreboard() function may be unnecessary, doesn't concatenate as expected
```Computer is the winner!` + scoreboard())```

**SOLUTION** 
Interesting ```typeof((`Scoreboard | YOU: ${userScore} | COMPUTER: ${computerScore}`))``` returns `undefined` so added `String()` method to result

⬜️ ISSUE 6 
Explore why ```typeof((`Scoreboard | YOU: ${userScore} | COMPUTER: ${computerScore}`))``` returns `undefined` ... I expected it to be a string even with variables

⬜️ ISSUE 3
way to make `Thanks for playing!` message less redundant? If I put it outside `if..else` it prints 5 times

⬜️ ISSUE 4
i think i still don't get when to specify parameters and `return`??

## extra stuff 
⬜️ would be cool to have something like a game MC lol
```
  if gameCount === 1 {
    alert("Get ready to play ..."); 
  }
  if gameCount === 5 {
    alert("Final round, here we go!");
  }
```

⬜️ input an alert or some kind of response if player decides to end game pre-maturely i.e. if they click cancel on the prompt
// message: see you next time!
