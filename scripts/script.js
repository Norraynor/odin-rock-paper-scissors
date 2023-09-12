console.log("hello world");

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const computerChoice = getComputerChoice();
let playerSelection;
let roundNumber = 1;
let playerScore=0;
let computerScore=0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)+1;
    return computerChoice;
}

function getPlayerChoice(){
    playerSelection = prompt("Choose (R)ock (P)aper (S)cissors round "+roundNumber+" ");
    let returnValue;
    if (playerSelection===null) {        
        return console.log("no input");
    }else{
        playerSelection=playerSelection.toLowerCase();
    }
    switch (playerSelection) {
        case ("r" || "rock"):
            returnValue = ROCK;
            break;
        case ("p" || "paper"):
            returnValue = PAPER;
            break;
        case ("s" || "scissors"):
            returnValue = SCISSORS;
            break;
    }
    return returnValue;
}

function playRound(player,computer){
    let result;

    if(player === computer){
        result = "draw";
    }

    if(player === ROCK && computer ===PAPER){
        result = "you lose! PAPER beats ROCK"
        computerScore++;
    }
    if(player === ROCK && computer ===SCISSORS){
        result = "you win! ROCK beats SCISSORS"
        playerScore++;
    }
    if(player === PAPER && computer ===SCISSORS){
        result = "you lose! SCISSORS beats PAPER"
        computerScore++;
    }
    if(player === PAPER && computer ===ROCK){
        result = "you win! PAPER beats ROCK"
        playerScore++;
    }
    if(player === SCISSORS && computer ===ROCK){
        result = "you lose! ROCK beats SCISSORS"
        computerScore++;
    }
    if(player === SCISSORS && computer ===PAPER){
        result = "you win! SCISSORS beats PAPER"
        playerScore++;
    }

    return result;
}

function game(){
    while(roundNumber<5){
        console.log(playRound(getPlayerChoice(),getComputerChoice()));
        roundNumber++;
    }
    if (playerScore === computerScore) {
        console.log("it's a draw");
    }
    else if (playerScore>computerScore) {
        console.log("you win!!!" + playerScore+ " to " + computerScore);
    } else {
        console.log("you lose :(" + computerScore + " to " + playerScore);
    }
    roundNumber = 0;
    playerScore = 0;
    computerScore = 0;
}
game();