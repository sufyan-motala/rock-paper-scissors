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

function roundResult(playerSelection, computerSelection) {
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

function isGameOver(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        return true;
    }
    return false;
}

let canGameContinue = true;

const main = document.querySelector('main');

const gameResult = document.createElement('h4');

const playAgain = document.createElement('button');

const makeYourChoice = document.getElementById('makeYourChoice');
const firstToWin = document.getElementById('firstToWin');

const playerSign = document.getElementById('playerSign');
const playerScore = document.getElementById('playerScore');

const computerSign = document.getElementById('computerSign');
const computerScore = document.getElementById('computerScore');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


function resetGame() {
    makeYourChoice.textContent = "Make your choice";
    firstToWin.textContent = "First to win 5 points wins the game";
    playerSign.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path></svg>';
    playerScore.textContent = "0";
    computerSign.innerHTML = playerSign.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path></svg>';
    computerScore.textContent = "0";
    main.removeChild(gameResult);
    main.removeChild(playAgain);
    canGameContinue = true;
}

function setPlayerSign(playerSelection) {
    if (playerSelection == "rock") {
        playerSign.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M408.864 79.052c-22.401-33.898-66.108-42.273-98.813-23.588-29.474-31.469-79.145-31.093-108.334-.022-47.16-27.02-108.71 5.055-110.671 60.806C44.846 105.407 0 140.001 0 187.429v56.953c0 32.741 14.28 63.954 39.18 85.634l97.71 85.081c4.252 3.702 3.11 5.573 3.11 32.903 0 17.673 14.327 32 32 32h252c17.673 0 32-14.327 32-32 0-23.513-1.015-30.745 3.982-42.37l42.835-99.656c6.094-14.177 9.183-29.172 9.183-44.568V146.963c0-52.839-54.314-88.662-103.136-67.911zM464 261.406a64.505 64.505 0 0 1-5.282 25.613l-42.835 99.655c-5.23 12.171-7.883 25.04-7.883 38.25V432H188v-10.286c0-16.37-7.14-31.977-19.59-42.817l-97.71-85.08C56.274 281.255 48 263.236 48 244.381v-56.953c0-33.208 52-33.537 52 .677v41.228a16 16 0 0 0 5.493 12.067l7 6.095A16 16 0 0 0 139 235.429V118.857c0-33.097 52-33.725 52 .677v26.751c0 8.836 7.164 16 16 16h7c8.836 0 16-7.164 16-16v-41.143c0-33.134 52-33.675 52 .677v40.466c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16v-27.429c0-33.03 52-33.78 52 .677v26.751c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16 0-33.146 52-33.613 52 .677v114.445z"></path></svg>'
    }
    else if (playerSelection = "paper") {
        playerSign.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z"></path></svg>'
    }
    else if (playerSelection = "scissors") {
        playerSign.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M187.125 19.53c-.733-.008-1.454.004-2.188.032-3.91.152-7.823.84-11.656 2.157-15.33 5.26-25.474 19.04-29.843 35.218-4.368 16.177-3.47 35.265 3.125 54.25 1.056 3.038 2.25 5.988 3.532 8.843l9.72 28.22 54.686 18.844c2.874-.326 5.74-.97 8.563-1.938 15.33-5.262 25.475-19.04 29.843-35.22 4.368-16.176 3.47-35.264-3.125-54.25-6.595-18.983-17.755-34.555-31.218-44.592-9.465-7.058-20.435-11.42-31.437-11.563zm-1.28 18.657c6.724-.256 14.112 2.322 21.56 7.876 9.933 7.404 19.25 20.007 24.72 35.75 5.47 15.742 5.93 31.353 2.72 43.25-3.213 11.896-9.573 19.556-17.876 22.406-8.303 2.848-18.1.716-28.032-6.69-3.308-2.464-6.543-5.523-9.594-9.06l-16.125-29.69c-4.522-14.7-4.756-29.12-1.75-40.25 3.21-11.895 9.57-19.524 17.874-22.374 2.076-.712 4.258-1.133 6.5-1.218zm-111.595 106c-6.73.138-13.183 1.02-19.25 2.657-16.178 4.368-29.957 14.544-35.22 29.875-5.26 15.33-.66 31.786 9.376 45.25 10.037 13.46 25.61 24.653 44.594 31.25 18.985 6.595 38.072 7.46 54.25 3.093 13.807-3.73 25.866-11.66 32.375-23.438l.063.063 14.343-25.72 6.595 3.563c.026.076.036.082.063.157l57.937 31.344.03.032 251.19 136.344c14.236-41.16-36.206-109.062-143.626-146.22l-228.814-78.905c-2.875-1.29-5.845-2.498-8.906-3.56-11.865-4.124-23.785-6.01-35-5.782zm.344 18.72c1.773-.035 3.597-.006 5.437.093 6.374.345 13.134 1.512 19.94 3.594l29.81 16.187c3.54 3.057 6.598 6.288 9.064 9.595 7.405 9.932 9.537 19.73 6.687 28.03-2.85 8.304-10.51 14.664-22.405 17.876-11.896 3.213-27.507 2.752-43.25-2.718-15.743-5.47-28.345-14.818-35.75-24.75-7.405-9.93-9.506-19.728-6.656-28.03 2.85-8.304 10.478-14.664 22.374-17.876 4.46-1.204 9.43-1.896 14.75-2zm115.844 74.187c12.42 36.016 25.524 74.023 38.593 111.812 37.156 107.42 105.06 157.862 146.22 143.625L255.75 272.44l-65.313-35.344z"></path></svg>'
    }
}

function setComputerSign(computerSelection) {
    if (computerSelection == "rock") {
        computerSign.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M408.864 79.052c-22.401-33.898-66.108-42.273-98.813-23.588-29.474-31.469-79.145-31.093-108.334-.022-47.16-27.02-108.71 5.055-110.671 60.806C44.846 105.407 0 140.001 0 187.429v56.953c0 32.741 14.28 63.954 39.18 85.634l97.71 85.081c4.252 3.702 3.11 5.573 3.11 32.903 0 17.673 14.327 32 32 32h252c17.673 0 32-14.327 32-32 0-23.513-1.015-30.745 3.982-42.37l42.835-99.656c6.094-14.177 9.183-29.172 9.183-44.568V146.963c0-52.839-54.314-88.662-103.136-67.911zM464 261.406a64.505 64.505 0 0 1-5.282 25.613l-42.835 99.655c-5.23 12.171-7.883 25.04-7.883 38.25V432H188v-10.286c0-16.37-7.14-31.977-19.59-42.817l-97.71-85.08C56.274 281.255 48 263.236 48 244.381v-56.953c0-33.208 52-33.537 52 .677v41.228a16 16 0 0 0 5.493 12.067l7 6.095A16 16 0 0 0 139 235.429V118.857c0-33.097 52-33.725 52 .677v26.751c0 8.836 7.164 16 16 16h7c8.836 0 16-7.164 16-16v-41.143c0-33.134 52-33.675 52 .677v40.466c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16v-27.429c0-33.03 52-33.78 52 .677v26.751c0 8.836 7.163 16 16 16h7c8.837 0 16-7.164 16-16 0-33.146 52-33.613 52 .677v114.445z"></path></svg>';
    }
    else if (computerSelection = "paper") {
        computerSign.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z"></path></svg>';
    }
    else if (computerSelection = "scissors") {
        computerSign.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M256 480l70-.013c5.114 0 10.231-.583 15.203-1.729l118.999-27.427C490.56 443.835 512 417.02 512 386.277V180.575c0-23.845-13.03-45.951-34.005-57.69l-97.999-54.853c-34.409-19.261-67.263-5.824-92.218 24.733L142.85 37.008c-37.887-14.579-80.612 3.727-95.642 41.201-15.098 37.642 3.635 80.37 41.942 95.112L168 192l-94-9.141c-40.804 0-74 32.811-74 73.14 0 40.33 33.196 73.141 74 73.141h87.635c-3.675 26.245 8.692 51.297 30.341 65.006C178.657 436.737 211.044 480 256 480zm0-48.013c-25.16 0-25.12-36.567 0-36.567 8.837 0 16-7.163 16-16v-6.856c0-8.837-7.163-16-16-16h-28c-25.159 0-25.122-36.567 0-36.567h28c8.837 0 16-7.163 16-16v-6.856c0-8.837-7.163-16-16-16H74c-34.43 0-34.375-50.281 0-50.281h182c8.837 0 16-7.163 16-16v-11.632a16 16 0 0 0-10.254-14.933L106.389 128.51c-31.552-12.14-13.432-59.283 19.222-46.717l166.549 64.091a16.001 16.001 0 0 0 18.139-4.812l21.764-26.647c5.82-7.127 16.348-9.064 24.488-4.508l98 54.854c5.828 3.263 9.449 9.318 9.449 15.805v205.701c0 8.491-5.994 15.804-14.576 17.782l-119.001 27.427a19.743 19.743 0 0 1-4.423.502h-70z"></path></svg>';
    }
}

function updateGame(choice) {
    if (canGameContinue == false) {
        return;
    }

    let playerSelection = choice;
    setPlayerSign(playerSelection);
    
    let computerSelection = getComputerChoice();
    setComputerSign(computerSelection);

    let result = roundResult(playerSelection, computerSelection);

    if (result[1] == "win") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        if (isGameOver(parseInt(playerScore.textContent), parseInt(computerScore.textContent))) {
            gameResult.textContent = "You win the game!";
            main.appendChild(gameResult);
            playAgain.textContent = "Play Again";
            main.appendChild(playAgain);
            canGameContinue = false;
        }
    }
    else if (result[1] == "loss") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        if (isGameOver(parseInt(playerScore.textContent), parseInt(computerScore.textContent))) {
            gameResult.textContent = "You lose the game!";
            main.appendChild(gameResult);
            playAgain.textContent = "Play Again";
            main.appendChild(playAgain);
            canGameContinue = false;
        }
    }
}

rock.addEventListener('click', () => {
    updateGame("rock");
});

paper.addEventListener('click', () => {
    updateGame("paper");
} );

scissors.addEventListener('click', () => {
    updateGame("scissors");
} );

playAgain.addEventListener('click', () => {
    resetGame();
} );
