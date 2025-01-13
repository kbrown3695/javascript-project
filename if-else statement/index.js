let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {

    name :"Kbrown",
    chips : 165
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" +player.chips;

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1; // Generates a number between 1 and 13
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "; // Add a space between card values
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 😮";
    } else if (sum === 21) {
        message = "Woo-hoo! You've got BlackJack! 🤩";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😓";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard(); // Generate a new random card
        sum += card;
        cards.push(card); // Push the new card value to the cards array
        renderGame(); // Update the game state after drawing a new card
    }
}
