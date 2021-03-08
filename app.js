const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const totalScore = document.querySelector('#totalScore');
const results = document.querySelector('#results');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

// Rock-Paper-Scissors Game Logic

function computerPoint() {
    computerScore.innerText = parseInt(computerScore.innerText) + 1
}
function playerPoint() {
    playerScore.innerText = parseInt(playerScore.innerText) + 1
}
function gameResult(gameOutput) {
    let gameResult = document.createElement('li')
    gameResult.innerText = gameOutput;
    results.appendChild(gameResult)
}

function computerPlay() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerInput) {
    computerInput = computerPlay().toLowerCase();

    if (playerInput == computerInput) {
        let gameOutput = (`Computer played: ${computerInput}, tie game!`)
        gameResult(gameOutput)
    } else if (playerInput == 'rock' && computerInput == 'paper') {
        let gameOutput = (`Computer played: ${computerInput}, you lose! Paper beats rock!`)
        computerPoint();
        gameResult(gameOutput)
    } else if (playerInput == 'paper' && computerInput == 'scissors') {
        let gameOutput = (`Computer played: ${computerInput}, you lose! Scissors beats paper!`)
        computerPoint();
        gameResult(gameOutput)
    } else if (playerInput == 'scissors' && computerInput == 'rock') {
        let gameOutput = (`Computer played: ${computerInput}, you lose! Rock beats scissors!`)
        computerPoint();
        gameResult(gameOutput)
    } else if (playerInput == 'rock' && computerInput == 'scissors') {
        let gameOutput = (`Computer played: ${computerInput}, you win! Rock beats scissors!`)
        playerPoint();
        gameResult(gameOutput)
    } else if (playerInput == 'paper' && computerInput == 'rock') {
        let gameOutput = (`Computer played: ${computerInput}, you win! Paper beats rock!`)
        playerPoint();
        gameResult(gameOutput)
    } else if (playerInput == 'scissors' && computerInput == 'paper') {
        let gameOutput = (`Computer played: ${computerInput}, you win! Scissors beats paper!`)
        playerPoint();
        gameResult(gameOutput)
    } else {
        return 'Invalid input!'
    }
}

// User Interaction

function checkScore() {
    if (playerScore.innerText == 5) {
        alert('Player wins, first to 5!');
    } else if (computerScore.innerText == 5) {
        alert('Computer wins, first to 5!');
    }
}

btnRock.addEventListener('click', function () {
    playRound('rock')
    checkScore();
})
btnPaper.addEventListener('click', function () {
    playRound('paper')
    checkScore();
})
btnScissors.addEventListener('click', function () {
    playRound('scissors')
    checkScore();
})




// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 1; i <= 5; i++) {
//         let result = playRound();
//         if (result == 'win') {
//             playerScore++
//         } else if (result == 'lose') {
//             computerScore++
//         }
//         console.log(`Player: ${playerScore}, Computer: ${computerScore}.`)
//     }
//     if (playerScore > computerScore) {
//         console.log(`Congrats! You beat the computer ${playerScore} to ${computerScore}!`)
//     } else if (playerScore < computerScore) {
//         console.log(`Sorry, you lost to the computer ${computerScore} to ${playerScore}. Better luck next time!`)
//     } else {
//         console.log(`Wow you tied the computer ${playerScore} to ${computerScore}!`)
//     }
// }