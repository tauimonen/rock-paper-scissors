let playerScore = 0;
let computerScore = 0;
let gameInfoText = "Start game by pressing your choice";
let gameOver = false;
const buttons = document.querySelectorAll('.choice-button');
const newGame = document.querySelector('.new-game');

function getComputerChoice() {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if (rndInt === 1) {
        computerChoice = "rock";
    } else if (rndInt === 2) {
        computerChoice = "paper";
    } else if (rndInt === 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false;
    })
}

function setScores() {
    let pScore = document.getElementById('playerScore');
    let cScore = document.getElementById('computerScore');
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;
}

function setGameInfo() {
    let gameInfo = document.querySelector('.game-info');
    gameInfo.innerHTML = gameInfoText;
}

function playRound(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection === computerSelection) {
        gameInfoText = "Tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
        gameInfoText = "Player won!";
        playerScore += 1;
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "rock")) {
        gameInfoText = "Computer won!";            
        computerScore += 1;
    }
   
    setScores();
    setGameInfo();

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {winner = "Player";}
        else if (computerScore === 5) {winner = "Computer";}

        gameInfoText = winner + " won the game!";
        setGameInfo();
        gameOver = true;
        showOrHideNewGameButton();
        disableButtons();
        gameOver = true;
    } 
}

function setNewGame() {
    gameOver = false;
    showOrHideNewGameButton();
    playerScore = 0;
    computerScore = 0;
    gameInfoText = "Start game by pressing your choice";
    setScores();
    setGameInfo();
    enableButtons();
}

function showOrHideNewGameButton() {
    let x = document.querySelector('.new-game');
    if (gameOver) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id, getComputerChoice());
    })
})

newGame.addEventListener('click', function() {
    setNewGame();
});


setNewGame();












