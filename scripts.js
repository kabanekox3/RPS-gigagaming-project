//returns string
function getComputerChoice() {
    let rand = Math.random();
    if (rand <= 0.33) {
        return "Rock"
    } else if (rand <= 0.66) {
       return "Paper"
    } else if (rand <= 1) {
       return "Scissors"
    }
}

//returns string
function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?")
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie!")
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Rock beats paper");
        computerChoice++
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Rock beats paper")
        humanScore++
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats scissors")
        humanScore++
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats scissors")
        computerScore++
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats paper")
        humanScore++
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats paper")
        computerScore++
    }
}

function playGame() {
    for (let i = 0; i <= 5; i++) {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
    }
}

playGame();

function getScore() {
    if (humanScore > computerScore) {
        console.log("You win! :D")
    } else if (humanScore < computerScore) {
        console.log("You lose! D:")
    } else if (humanScore == computerScore) {
        console.log("It's a tie! :S")
    }
}

getScore();