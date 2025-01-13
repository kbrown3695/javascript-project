let cards = [7,4];

cards.push(7);
console.log(cards);
 

let messages = [
    "Hey,how's it going? ",
    "I'm great,thank you! How about you?",
    "All good.Been working on my portfolio lately."
]

let newMessage = "Same here!";

message.push(newMessage);
console.log(messages);
 

function rollDice() {
    let randomNumber = Math.floor(Math.random()*6) + 1;
    return randomNumber;
}

console.log(rollDice());
  