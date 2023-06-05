/** 
 * Wait for the DOM to finish loading before running the game
 * Add event listeners to the buttons
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll('.btn');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            let playerChoice = this.getAttribute('data-choice');
            console.log('You chose ' + playerChoice);
            let houseChoice = randomHouse();
            console.log('House chose ' + houseChoice);
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