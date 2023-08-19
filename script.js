
    const rock = document.querySelector('.rock1');
    const paper = document.querySelector('.paper1');
    const scissor = document.querySelector('.scissor1');

    function getPlayerChoice(e){
        let playerChoice=e.target.className
        console.log(playerChoice)
    }

    rock.addEventListener('click',getPlayerChoice);
    paper.addEventListener('click',getPlayerChoice);
    scissor.addEventListener('click',getPlayerChoice);


    function getComputerChoice() {
        const compChoice = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * compChoice.length);
        return compChoice[randomIndex];
    }

    function playRound(playerChoice,computerChoice){
        if (playerChoice==computerChoice){
            return 0;
        }
        else if(playerChoice=='rock1' && computerChoice=='paper1' || playerChoice=='scissor1' && computerChoice=='paper1'
        || playerChoice=='paper1' && computerChoice=='rock1'){
            return 1;
        }
        else{
            return -1;
        } 
    }

    function game(){
        for(let i=0;i<5;i++){
            
        }
    }


  
  

    

    




























