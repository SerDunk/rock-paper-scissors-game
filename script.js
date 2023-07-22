function getComputerChoice() {
    const compChoice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomIndex];
}
function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();
    
    return playerChoice;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        return -1;
    } else {
        return 1;
    }
}



