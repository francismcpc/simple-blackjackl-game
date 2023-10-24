/* let firstCard = 11;
let secondCard = 11;
sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to get a new card?");
} else if (sum === 21) {
  console.log("You've got a blackjack!");
} else if (sum > 21) {
  console.log("You've lost!");
}
 */

/* let age = 20;

if (age < 21) {
  console.log("You can not enter the club!");
} else {
  console.log("Welcome to the club!");
} */

/* let age = 102;

if (age < 100) {
  console.log("Not eligible!");
} else if (age === 100) {
  console.log("Here is your birthday card from the king!");
} else {
  console.log("Not eligible, you have already gotten one!");
} */

/* 
console.log(4 === 3); // false
console.log(5 > 2); // true
console.log(12 > 12); // false
console.log(3 < 0); // false
console.log(3 >= 3); // true
console.log(11 <= 11); // true
console.log(3 <= 2); // false
*/

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");

let player = {
  name: "Francis",
  chips: 150,
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
