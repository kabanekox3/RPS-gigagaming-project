//returns string
function getComputerChoice() {
    let rand = Math.random();
    console.log(rand)
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