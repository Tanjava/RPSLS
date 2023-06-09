/** 
 * Wait for the DOM to finish loading before running the game
 * Add event listeners to the buttons
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll('.btn');
    for (let button of buttons) {
        button.addEventListener('click', function () {

            let playerChoice = this.getAttribute('data-choice');

            playGame(playerChoice);

            setTimeout(() => {
                showHouseChoice('rock'); // Show computer's choice then reset default image
                showPlayerChoice('rock'); // Show player's choice then reset to default image
            }, 750);

        });
    }
    openGameRules.addEventListener('click', openModal);
    closeGameRules.addEventListener('click', closeModal);
    resetButton.addEventListener('click', resetGame);
});


let gameOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let playerScore = 0;
let houseScore = 0;
// let winner = '';
let round = 0;

let gameResult = document.getElementById('game-result');
let endResult = document.getElementById('end-result');
let modal = document.getElementById('modal');
let openGameRules = document.getElementById('game-rules');
let closeGameRules = document.getElementById('close');
let buttons = document.querySelectorAll('.btn');
let resetButton = document.getElementById('reset-btn');

/**
 * Play the game and
 * determine the winner of each round
 */
function playGame(playerChoice) {

    if (round >= 5) {
        return;
    }

    round++;

    let houseChoice = randomHouse();
    showHouseChoice(houseChoice);
    showPlayerChoice(playerChoice);

    if (playerChoice === houseChoice) {
        gameResult.innerHTML = "It's a tie!";
    } else {
        if (
            (playerChoice === 'Rock' && (houseChoice === 'Scissors' || houseChoice === 'Lizard')) ||
            (playerChoice === 'Paper' && (houseChoice === 'Rock' || houseChoice === 'Spock')) ||
            (playerChoice === 'Scissors' && (houseChoice === 'Paper' || houseChoice === 'Lizard')) ||
            (playerChoice === 'Lizard' && (houseChoice === 'Paper' || houseChoice === 'Spock')) ||
            (playerChoice === 'Spock' && (houseChoice === 'Rock' || houseChoice === 'Scissors'))
        ) {
            // winner = 'player';
            playerScore++;
            document.getElementById('player-score').innerHTML = playerScore;
            gameResult.innerHTML = "You win this round!";
        } else {
            // winner = 'house'
            houseScore++;
            document.getElementById('house-score').innerHTML = houseScore;
            gameResult.innerHTML = "House wins this round!";
        }
        // increaseScore(winner)
    }

    if (round === 5) {
        endGame()
    }
}

/**
 * Determine the final winner at the end of the game
 */
function endGame() {
    if (playerScore > houseScore) {
        endResult.innerHTML = `<h3 id="end-result" style="color: #92AF44">Congrats<br>You win!</h3>`;
    } else if (playerScore < houseScore) {
        endResult.innerHTML = `<h3 id="end-result" style="color: #e74646">Game Over<br>You Lose!</h3>`;
    } else {
        endResult.innerHTML = `<h3 id="end-result" style="color: #f2cd60">Oooops!<br>It's a draw</h3>`;
    }
    hideButtons();
    showResetButton();
}

function resetGame() {
    round = 0;
    playerScore = 0;
    houseScore = 0;
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('house-score').innerHTML = houseScore;
    gameResult.innerHTML = 'Make Your Move!';
    showButtons();
    hideResetButton();
}

/**
 * Get the computer's choice (random)
 */
function randomHouse() {
    let random = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[random];
}

/**
 * Show the computer's choice (big emoji)
 */
function showHouseChoice(houseChoice) {
    let houseSection = document.getElementById('house-section');
    houseSection.innerHTML = `
      <h2 class="score">House: <span id="house-score">${houseScore}</span></h2>
      <img src="assets/images/${houseChoice.toLowerCase()}.png" class="big-emoji-2" alt="${houseChoice} Emoji">
    `;
}

/**
 * Show the player's choice (big emoji)
 */
function showPlayerChoice(playerChoice) {
    let playerSection = document.getElementById('player-section');
    playerSection.innerHTML = `
      <h2 class="score">You: <span id="player-score">${playerScore}</span></h2>
      <img src="assets/images/${playerChoice.toLowerCase()}.png" class="big-emoji" alt="${playerChoice} Emoji">
    `;
}

/**
 * Show and hide the game option buttons
 * and the gameResult text
 */
function showButtons() {
    for (let button of buttons) {
        button.style.display = 'inline-block'
    };
    gameResult.style.display = 'inherit';
}

function hideButtons() {
    for (let button of buttons) {
        button.style.display = 'none';
    };
    gameResult.style.display = 'none';
}

/**
 * Show and hide the reset button
 */
function showResetButton() {
    resetButton.style.display = 'inline-block';
}

function hideResetButton() {
    resetButton.style.display = 'none';
}

/**
 * Show and hide the modal/popup window
 */
function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// /**
//  * Increase winner's score
//  */
// function increaseScore(winner) {
//     if (winner === 'player') {
//         playerScore++;
//     } else if (winner === 'house') {
//         houseScore++
//     }
// }