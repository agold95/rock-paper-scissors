let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choice.length);
    const randomChoice = choice[randomIndex].toUpperCase();
    return randomChoice;
}

function getPlayerChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors...")
    return choice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        computerScore++;
        return "Computer wins the round!";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        playerScore++;
        return "Player wins the round!";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        computerScore++;
        return "Computer wins the round!";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        playerScore++;
        return "Player wins the round!"
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        playerScore++;
        return "Player wins the round!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        computerScore++;
        return "Computer wins the round!";
    } else if (playerSelection === computerSelection) {
        return "This round was a tie!";
    } else if (playerSelection != "ROCK" || playerSelection != "PAPER" || playerSelection != "SCISSORS") {
        return "Input rock, paper, or scissors";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore, computerScore)
    }
    if (playerScore > computerScore) {
        return "You won the game!"
    } else if (playerScore < computerScore) {
        return "The computer won the game!"
    } else {
        return "It was a tie!"
    }
}
console.log(game());