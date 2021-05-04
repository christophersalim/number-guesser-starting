let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:

// Function for creating random integer for the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);

// Check if the input is integer
const checkIfInteger = (humanGuess) => Number.isInteger(humanGuess) ? 1 : 0;

// Calculating absolute distance between guesses and the target number
const getAbsoluteDistance = (guess, targetNumber) => 
Math.abs(guess - targetNumber);

// Comparing between human and computer guess
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (getAbsoluteDistance(humanGuess, targetNumber) <= 
    getAbsoluteDistance(computerGuess, targetNumber)) {
        return true;
    } else if (getAbsoluteDistance(humanGuess, targetNumber) > 
    getAbsoluteDistance(computerGuess, targetNumber)) {
        return false;
    }
}

// Function for increasing the winner's score after each round.
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// Update the round number after each round
const advanceRound = () => currentRoundNumber += 1;
