// Blackjack Game in JavaScript

function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    let deck = [];

    suits.forEach(suit => {
        ranks.forEach(rank => {
            deck.push({ rank, suit });
        });
    });

    deck = deck.sort(() => Math.random() - 0.5); // Shuffle the deck
    return deck;
}

function calculateHandValue(hand) {
    let value = 0;
    let aces = 0;

    hand.forEach(card => {
        if (['Jack', 'Queen', 'King'].includes(card.rank)) {
            value += 10;
        } else if (card.rank === 'Ace') {
            value += 11;
            aces++;
        } else {
            value += parseInt(card.rank);
        }
    });

    while (value > 21 && aces > 0) {
        value -= 10;
        aces--;
    }

    return value;
}

function displayHand(player, hand) {
    console.log(`${player}'s Hand:`);
    hand.forEach(card => {
        console.log(`  ${card.rank} of ${card.suit}`);
    });
    console.log(`Total Value: ${calculateHandValue(hand)}\n`);
}

function blackjackGame() {
    const deck = createDeck();

    // Deal initial hands (3 cards each)
    if (deck.length < 6) {
        console.log("Not enough cards in the deck to start the game.");
        return;
    }

    const playerHand = [deck.pop(), deck.pop(), deck.pop()];
    const dealerHand = [deck.pop(), deck.pop(), deck.pop()];

    // Display initial hands
    displayHand("Player", playerHand);
    displayHand("Dealer", [dealerHand[0]]); // Show only one card of the dealer

    // Player's turn
    while (true) {
        const playerValue = calculateHandValue(playerHand);
        if (playerValue > 21) {
            console.log("Player busts! Dealer wins.\n");
            return;
        }

        const action = prompt("Do you want to [hit] or [stand]?").toLowerCase();
        if (action === 'hit') {
            if (deck.length === 0) {
                console.log("No more cards in the deck.");
                break;
            }
            playerHand.push(deck.pop());
            displayHand("Player", playerHand);
        } else if (action === 'stand') {
            break;
        } else {
            console.log("Invalid action. Please type 'hit' or 'stand'.");
        }
    }

    // Dealer's turn
    console.log("Dealer's turn:\n");
    displayHand("Dealer", dealerHand);

    while (calculateHandValue(dealerHand) < 17) {
        if (deck.length === 0) {
            console.log("No more cards in the deck.");
            break;
        }
        dealerHand.push(deck.pop());
        displayHand("Dealer", dealerHand);
    }

    // Determine the winner
    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(dealerHand);

    if (dealerValue > 21 || playerValue > dealerValue) {
        console.log("Player wins!\n");
    } else if (playerValue < dealerValue) {
        console.log("Dealer wins!\n");
    } else {
        console.log("It's a tie!\n");
    }
}

// Start the game
blackjackGame();
