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

            showHouseChoice(houseChoice);  // can delete later
            showPlayerChoice(playerChoice);  // can delete later

            playGame(playerChoice)
        });
    };
})


let gameOptions = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];


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
      <h2 class="score">House: <span id="house-score">0</span></h2>
      <img src="assets/images/${houseChoice.toLowerCase()}.png" class="big-emoji-2" alt="${houseChoice} Emoji">
    `;
}

/**
 * Show the player's choice (big emoji)
 */
function showPlayerChoice(playerChoice) {
    let playerSection = document.getElementById('player-section');
    playerSection.innerHTML = `
      <h2 class="score">You: <span id="player-score">0</span></h2>
      <img src="assets/images/${playerChoice.toLowerCase()}.png" class="big-emoji" alt="${playerChoice} Emoji">
    `;
}

/**
 * Determine the winner of the game
 */
function playGame(playerChoice) {
    let houseChoice = randomHouse();
    showHouseChoice(houseChoice);
    showPlayerChoice(playerChoice);

    if (playerChoice === houseChoice) {
        console.log("It's a tie");
        document.getElementById('game-result').innerHTML = "It's a tie!"
    } else {
        if ( //player wins
            (playerChoice === 'Rock' && (houseChoice === 'Scissors' || houseChoice === 'Lizard')) ||
            (playerChoice === 'Paper' && (houseChoice === 'Rock' || houseChoice === 'Spock')) ||
            (playerChoice === 'Scissors' && (houseChoice === 'Paper' || houseChoice === 'Lizard')) ||
            (playerChoice === 'Lizard' && (houseChoice === 'Paper' || houseChoice === 'Spock')) ||
            (playerChoice === 'Spock' && (houseChoice === 'Rock' || houseChoice === 'Scissors'))
        ) { // then
            increasePlayerScore();
            console.log('Player wins');
            document.getElementById('game-result').innerHTML = "You win!"            
        } else { // otherwise computer wins
            increaseHouseScore();
            console.log('House wins');
            document.getElementById('game-result').innerHTML = "You lose!"
        }
    }
}

/**
 * Increase player score
 */
function increasePlayerScore() {
    let playerScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++playerScore
}


/**
 * Increase computer score
 */
function increaseHouseScore() {
    let houseScore = parseInt(document.getElementById('house-score').innerText);
    document.getElementById('house-score').innerText = ++houseScore
}