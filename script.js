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

function game() {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 1; i <= 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        const roundResult = playRound(playerChoice, computerChoice);

        if (roundResult === 1) {
            console.log("You WIN!!");
            playerCount++;
        } else if (roundResult === -1) {
            console.log("You LOSE!!");
            computerCount++;
        } else {
            console.log("It's a DRAW!!");
        }
    }

    console.log("Final Score:");
    console.log(`You: ${playerCount}`);
    console.log(`Computer: ${computerCount}`);
}


game();


