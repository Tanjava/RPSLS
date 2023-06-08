/** 
 * Wait for the DOM to finish loading before running the game
 * Add event listeners to the buttons
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll('.btn');
    for (let button of buttons) {
        button.addEventListener('click', function () {

            let playerChoice = this.getAttribute('data-choice');
            console.log('Player chose ' + playerChoice);

            let houseChoice = randomHouse();
            console.log('Computer chose ' + houseChoice);

            playGame(playerChoice);

            setTimeout(() => {

                showHouseChoice('rock'); // Show computer's choice then reset default image
                showPlayerChoice('rock'); // Show player's choice then reset to default image
            }, 750); 
            
        });
    };
})



let gameOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let playerScore = 0;
let houseScore = 0;
// let winner = '';

let gameResult = document.getElementById('game-result');



/**
 * Play the game and
 * determine the winner of the game
 */
function playGame(playerChoice) {
    let houseChoice = randomHouse();
    showHouseChoice(houseChoice);
    showPlayerChoice(playerChoice);

    if (playerChoice === houseChoice) {
        console.log("It's a tie");
        gameResult.innerHTML = "It's a tie!"
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
            console.log('Player wins');
            document.getElementById('player-score').innerHTML = playerScore
            gameResult.innerHTML = "You win!"
        } else { 
            // winner = 'house'
            houseScore++;
            console.log('House wins');
            document.getElementById('house-score').innerHTML = houseScore
            gameResult.innerHTML = "You lose!"
        }
        // increaseScore(winner)
    }
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