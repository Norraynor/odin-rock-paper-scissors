const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const computerChoice = getComputerChoice();
let playerSelection;
let roundNumber = 1;
let playerScore=0;
let computerScore = 0;
const MAX_SCORE = 5;
let playable = true;

const result = document.querySelector(".result-text");
const score = document.querySelector(".score");

const gameButtons = document.querySelectorAll('button');
gameButtons.forEach((button) => button.addEventListener('click', function (e) {
    let playerChoice = getPlayerChoice(e.target.dataset.value);  
    if (playable) {
        printResult(playRound(playerChoice, getComputerChoice()));        
    }

    if (playerScore < MAX_SCORE && computerScore < MAX_SCORE) {  
        //go next round
        playable = true;
    } else {
        //declare winner
        playable = false;
        if (playerScore > computerScore) {            
            score.textContent = `You win! ${playerScore}:${computerScore}`;
        } else {
            score.textContent = `You lose! ${playerScore}:${computerScore}`;
            
        }
    }
}))

function printResult(roundResult) {
    if (roundResult === null) {
        return;
    }
    result.textContent = roundResult + `\n Score is ${playerScore}:${computerScore} `;
    score.textContent = `Score is ${playerScore}:${computerScore}`;
}

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)+1;
    return computerChoice;
}

function getPlayerChoice(value){
    playerSelection = value;
    let returnValue;
    if (playerSelection===null) {        
        return console.log("no input");
    }else{
        playerSelection=playerSelection.toLowerCase();
    }
    switch (playerSelection[0]) {
        case ("r"):
            returnValue = ROCK;
            break;
        case ("p"):
            returnValue = PAPER;
            break;
        case ("s"):
            returnValue = SCISSORS;
            break;
        default:
            returnValue = "something is wrong";
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