function getComputerChoice() {
    const compChoice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomIndex];
}
function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();
    
    return playerChoice;
}



