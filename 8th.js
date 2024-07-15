function guessNumberGame() {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Prompt the user to input a guess number
    const userGuess = prompt("Guess a number between 1 and 10:");

    // Convert user input to a number (parseInt to handle string input)
    const guess = parseInt(userGuess);

    // Check if the guess matches the random number
    if (guess === randomNumber) {
        alert("Good Work! You guessed the correct number.");
    } else {
        alert("Not matched. The number was " + randomNumber + ".");
    }
}

// Call the function to start the game
guessNumberGame();
 