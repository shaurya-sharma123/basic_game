let playerScore = 0
let computerScore = 0 
const winnerScore = 5  

const resultsContainer = document.createElement('div')

const roundResults = document.createElement('p')
const scoreText = document.createElement('p')
const finalWinner = document.createElement('h3')

resultsContainer.appendChild(roundResults)
resultsContainer.appendChild(scoreText)
resultsContainer.appendChild(finalWinner)

document.querySelector('#container').appendChild(resultsContainer)

const getRandom = max => {
    return Math.floor(Math.random() * max);
}

const playRound = (humanChoice) => {

    if (playerScore >= winnerScore || computerScore >= winnerScore) {
        return
    }

    const computerChoice = getComputerChoice()

    if (humanChoice === computerChoice) {
        roundResults.textContent = 'This is a Tie!'
    }

    else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        computerScore++
        roundResults.textContent = "The computer has won this round"
        
    }

    else {
        playerScore++
        roundResults.textContent = 'You have Won this Round'
    }

    scoreText.textContent = `Computer: ${computerScore} | Human: ${playerScore}`

    if (playerScore === winnerScore) {
        finalWinner.textContent = 'Congratulations! You have Won the Game!!'
        disableButtons()
    }

    else if (computerScore === winnerScore) {
        finalWinner.textContent = 'Game Over! The Computer Won. Better Luck Next Time!!'
        disableButtons()
    }
}

const getComputerChoice = () => {
    const choice = getRandom(3)

    if (choice === 0) {
        return "rock"
    }

    else if (choice === 2) {
        return "paper"
    }

    else {
        return "scissors"
    }
}

const disableButtons = () => {
    document.querySelectorAll('button').forEach(btn => btn.disabled = true)
}

document.querySelector("#rock").addEventListener('click', () => playRound('rock'))
document.querySelector("#paper").addEventListener('click', () => playRound('paper'))
document.querySelector("#scissors").addEventListener('click', () => playRound('scissors'))