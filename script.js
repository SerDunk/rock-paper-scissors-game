function getComputerChoice() {
    const compChoice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * compChoice.length);
    return compChoice[randomIndex];
}

