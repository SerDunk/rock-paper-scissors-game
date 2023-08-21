const rock = document.querySelector('.rock1');
const paper = document.querySelector('.paper1');
const scissor = document.querySelector('.scissor1');
const screen=document.querySelector('.output');

function getPlayerChoice(e) {
    let playerChoice = e.target.className;
    
    return playerChoice;
}

rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissor.addEventListener('click', playGame);

function getComputerChoice() {
    const compChoice = ["rock1", "paper1", "scissor1"];
    const randomIndex = Math.floor(Math.random() * compChoice.length);
    
    return compChoice[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        
        return 0;
    } else if (
        (playerChoice === 'rock1' && computerChoice === 'paper1') ||
        (playerChoice === 'scissor1' && computerChoice === 'rock1') ||
        (playerChoice === 'paper1' && computerChoice === 'scissor1')
    ) {
        return -1; 
    } else {
        return 1; 
    }
}
const userScore=document.querySelector('.userscore')
const compScore=document.querySelector('.compscore')
let playerScore=0;
let computerScore=0;

function playGame(e) {
    if (playerScore>=3 || computerScore>=3){
        screen.textContent="OVER"
        return;
    }
        
    const playerChoice = getPlayerChoice(e);
    console.log(playerChoice)
    const compChoice = getComputerChoice();
    console.log(compChoice)
    const result = playRound(playerChoice, compChoice);

   

    if (result === 0) {
        screen.textContent="DRAW";
    } else if (result === 1) {
        screen.textContent="YOU WIN";
       
        playerScore++;
        userScore.textContent=playerScore;
    } else {
        screen.textContent="YOU LOSE";
        
        computerScore++;
        compScore.textContent=computerScore;
    }

    
}


