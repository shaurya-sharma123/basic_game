const getRandom = max => {
    return Math.floor(Math.random() * max);
}

const getHumanChoice = () => {
    const userChoice = prompt("Please enter your choice: ")
    return userChoice
}

const playRound = (humanChoice, computerChoice) => {
    
    if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        humanScore++
    }

    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        computerScore++;
    }

    else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissor") {
        computerScore++;
    }

    else if (humanChoice.toLowerCase() == "scissor" && computerChoice == "paper") {
        humanScore++;
    }

    else if (humanChoice.toLowerCase() == "scissor" && computerChoice == "rock") {
        computerScore++;
    }

    else if (humanChoice.toLowerCase() == computerChoice) {
        return
    }

    else {
        humanScore++;
    }
}

const playGame = () => {

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You are the winner!")
    }

    else if (computerScore > humanScore) {
        console.log("You lost! Better luck next time!")
    }

    else {
        console.log("It is a draw")
    }
}

const getComputerChoice = () => {
    const choice = getRandom(3)

    if (choice == 0) {
        return "rock"
    }

    else if (choice == 2) {
        return "paper"
    }

    else {
        return "scissor"
    }
}

let humanScore = 0
let computerScore = 0
playGame()