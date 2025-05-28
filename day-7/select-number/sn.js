/**
 * Let us play a number guessing game.
 * You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You also need to show the number of attempts made by users to rach to this right guess.
 */

// max number
// min number

// secret number is a random number between the min and max

// get the prommpt from the user as a guess

// Create a variable to store the number of attempts

// Write the logic to check if the guess and the secret number are same. If not continue a loop to ask again.

// Inside loop check if the guess is less than the secret or greater than, accordingly tell if the guess it low or high

// Give the option to play again

const maxNumber = 10;
const minNumber = 1;

function startSecretNumberGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guess = null;

  console.log("Welcome to the Number Guessing Game!");
  console.log("Try to guess a number between 1 and 10.");

  while (guess !== secretNumber) {
    guessingPrompt = prompt("Enter a number between 1 to 10");
    guess = parseInt(guessingPrompt);
    if (isNaN(guess) || guess > 10 || guess < 1) {
      console.log(`Invalid Input! Please enter a number between 1 to 10`);
      continue;
    }

    attempts++;

    if (guess > secretNumber) {
      console.log("The number is too high");
    } else if (guess < secretNumber) {
      console.log("The number is too low");
    } else {
      console.log(`Congrates You Guessed the number in ${attempts} attempts`);
      break;
    }
  }

  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt.toLocaleLowerCase();
  if (playAgain === "yes") {
    startSecretNumberGame();
  } else {
    console.log("Thanks for playing!. See you next time.");
  }
}

startSecretNumberGame();
