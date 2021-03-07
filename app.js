function computerPlay() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    const playerInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerInput = computerPlay().toLowerCase();

    if (playerInput == computerInput) {
        console.log(`Computer played: ${computerInput}, tie Game!`)
        return 'tie'
    } else if (playerInput == 'rock' && computerInput == 'paper') {
        console.log(`Computer played: ${computerInput}, you lose! Paper beats rock!`)
        return 'lose'
    } else if (playerInput == 'paper' && computerInput == 'scissors') {
        console.log(`Computer played: ${computerInput}, you lose! Scissors beats paper!`)
        return 'lose'
    } else if (playerInput == 'scissors' && computerInput == 'rock') {
        console.log(`Computer played: ${computerInput}, you lose! Rock beats scissors!`)
        return 'lose'
    } else if (playerInput == 'rock' && computerInput == 'scissors') {
        console.log(`Computer played: ${computerInput}, you win! Rock beats scissors!`)
        return 'win'
    } else if (playerInput == 'paper' && computerInput == 'rock') {
        console.log(`Computer played: ${computerInput}, you win! Paper beats rock!`)
        return 'win'
    } else if (playerInput == 'scissors' && computerInput == 'paper') {
        console.log(`Computer played: ${computerInput}, you win! Scissors beats paper!`)
        return 'win'
    } else {
        return 'Invalid input!'
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let result = playRound();
        if (result == 'win') {
            playerScore++
        } else if (result == 'lose') {
            computerScore++
        }
        console.log(`Player: ${playerScore}, Computer: ${computerScore}.`)
    }
    if (playerScore > computerScore) {
        console.log(`Congrats! You beat the computer ${playerScore} to ${computerScore}!`)
    } else if (playerScore < computerScore) {
        console.log(`Sorry, you lost to the computer ${computerScore} to ${playerScore}. Better luck next time!`)
    } else {
        console.log(`Wow you tied the computer ${playerScore} to ${computerScore}!`)
    }
}