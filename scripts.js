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
        scoreContainer.textContent = "Tie!";
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        scoreContainer.textContent = "You lose! Paper beats rock";
        computerChoice++
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        scoreContainer.textContent = "You win! Rock beats paper";
        humanScore++
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        scoreContainer.textContent = "You win! Rock beats scissors";
        humanScore++
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        scoreContainer.textContent = "You lose! Rock beats scissors";
        computerScore++
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        scoreContainer.textContent = "You win! Scissors beats paper";
        humanScore++
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        scoreContainer.textContent = "You lose! Scissors beats paper";
        computerScore++
    }
    getScore();
}

let container = document.createElement("div");
container.classList.add("container");

let buttonOne = document.createElement("button");
buttonOne.textContent = "Rock";

let buttonTwo = document.createElement("button");
buttonTwo.textContent = "Paper"

let buttonThree = document.createElement("button");
buttonThree.textContent = "Scissors"

let main = document.querySelector(".main");

buttonOne.addEventListener("click", () => {
    let playerChoice = "Rock";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
})

buttonTwo.addEventListener("click", () => {
    let playerChoice = "Paper";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
})

buttonThree.addEventListener("click", () => {
    let playerChoice = "Scissors";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
})

let scoreContainer = document.createElement("div");
scoreContainer.textContent = "poggers"

let totalScoreContainer = document.createElement("div");

main.appendChild(container);
container.appendChild(buttonOne);
container.appendChild(buttonTwo);
container.appendChild(buttonThree);
main.appendChild(scoreContainer);
main.appendChild(totalScoreContainer);

function getScore() {
    totalScoreContainer.textContent = `Computer: ${computerScore}. Human: ${humanScore}`;
}