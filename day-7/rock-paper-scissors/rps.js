/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function startRockPaperScissorsGame() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const computersChoise =
    randomNumber === 1
      ? "rock"
      : randomNumber === 2
      ? "paper"
      : randomNumber === 3
      ? "scissor"
      : null;

  const usersChoiseprompt = prompt("Enter one form rock, paper or scissor");
  const usersChoise = usersChoiseprompt.toLocaleLowerCase();

  if (
    (usersChoise === "rock" && computersChoise === "scissor") ||
    (usersChoise === "scissor" && computersChoise === "paper") ||
    (usersChoise === "paper" && computersChoise === "rock")
  ) {
    console.log(`You the user win. `);
  } else if (
    (usersChoise === "rock" && computersChoise === "paper") ||
    (usersChoise === "scissor" && computersChoise === "rock") ||
    (usersChoise === "paper" && computersChoise === "scissor")
  ) {
    console.log(`Oh No.... Computer wins`);
  } else if (usersChoise === computersChoise) {
    console.log("The game has tied");
  } else {
    console.log("please check the input and try agian");
  }

  const playAgainPrompt = prompt("Do you want to play agian? (yes/no)");
  const playAgain = playAgainPrompt.toLocaleLowerCase();
  if (playAgain === "yes") {
    startRockPaperScissorsGame();
  } else {
    console.log("See you again later. Thanks for playing");
  }
}

startRockPaperScissorsGame();
