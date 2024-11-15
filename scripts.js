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
    let playerChoice = Rock;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
})

buttonTwo.addEventListener("click", () => {
    let playerChoice = Paper;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
})

buttonThree.addEventListener("click", () => {
    let playerChoice = Scissors;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
})

main.appendChild(container);
container.appendChild(buttonOne);
container.appendChild(buttonTwo);
container.appendChild(buttonThree);
//playGame();

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