function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return ["It's a Tie!", "tie"];
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        return ["You Lose! Paper beats Rock", "loss"];
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ["You Win! Rock beats Scissors", "win"];
    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
        return ["You Lose! Scissors beats Paper", "loss"];
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return ["You Win! Paper beats Rock", "win"];
    }

    if (playerSelection == "scissors" && computerSelection == "rock") {
        return ["You Lose! Rock beats Scissors", "loss"];
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ["You Win! Scissors beats Paper", "win"];
    }
}

function game() {
    const numRounds = 5;
    let playerSelection;
    let computerSelection;
    let outcome;
    let numPlayerWins = 0;
    let numComputerWins = 0;

    for (let i = 0; i < numRounds; i++) {
        while (true) {
            playerSelection = prompt("Please type your choice (rock, paper or scissors):").toLowerCase();
            if (["rock", "paper", "scissors"].includes(playerSelection)) {
                break;
            }
            console.log("Invalid choice!");
        }
        computerSelection = getComputerChoice();
        console.log("You chose: " + playerSelection);
        console.log("The computer chose: " + computerSelection);
        outcome = playRound(playerSelection, computerSelection);
        if (outcome[1] == "tie") {
            numPlayerWins += 1;
            numComputerWins += 1;
            console.log(outcome[0]);
        }
        else if (outcome[1] == "loss") {
            numComputerWins += 1;
            console.log(outcome[0]);
        }
        else {
            numPlayerWins += 1;
            console.log(outcome[0]);
        }
    }

    console.log(String(numRounds) + " rounds were played")
    console.log("You won " + String(numPlayerWins) + " rounds")
    console.log("Computer won " + String(numComputerWins) + " rounds")
}

game();