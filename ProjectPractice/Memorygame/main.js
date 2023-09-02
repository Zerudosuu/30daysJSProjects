//creating an array of object with keyvalues of name and img.
const cardArray = [
  { name: `fries`, img: `images/fries.png` },
  { name: `cheeseburger`, img: `images/cheeseburger.png` },
  { name: `hotdog`, img: `images/hotdog.png` },
  { name: `ice-cream`, img: `images/ice-cream.png` },
  { name: `milkshake`, img: `images/milkshake.png` },
  { name: `pizza`, img: `images/pizza.png` },
  { name: `fries`, img: `images/fries.png` },
  { name: `cheeseburger`, img: `images/cheeseburger.png` },
  { name: `hotdog`, img: `images/hotdog.png` },
  { name: `ice-cream`, img: `images/ice-cream.png` },
  { name: `milkshake`, img: `images/milkshake.png` },
  { name: `pizza`, img: `images/pizza.png` },
];

//this line of code tends to randomize the position of values of the array. cool trick or method to have.
cardArray.sort(() => 0.5 - Math.random()); // easiest way to random array

console.log(cardArray);
let cardChosen = [];
let cardChosenId = [];
const cardsWon = [];
let playerscore = 0;

//getting the html element by id using queryselector
const gridDisplay = document.querySelector(`#grid`);

//createboard arrow function
//since there are 12 cards and 6 of them are identical we created a loop that has the lenght of the cardarray so that we can access the 12 objct in array
//creating variable card to store the creation of element so that each loop it will create an img tag
//setAttribute with params of src and the value of src
//each card will have another data-id that has unique number provided by iteration
//adding addevent listener to each loop so that all the image can be clicked or flip
//since we have had get the grid container with an id of grid we can now append the card variable each loop
const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", `images/blank.png`);
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
};

//cards selecting all the generate cards with tag of img
//condiiton if the card chosen true then cards which is the image along with the chosenId or the data-id it will set its attributes accordingly
//creating another aray cardsWon and pushing the cardchosen with two values on hold.
//after storing it will be empty if the card chosen was matched
function checkmatch() {
  const cards = document.querySelectorAll(`img`);

  if (cardChosenId[0] === cardChosenId[1]) {
    alert("You've selected same card!");
    cards[cardChosenId[0]].setAttribute("src", "images/blank.png");
    cards[cardChosenId[1]].setAttribute("src", "images/blank.png");
  }

  if (cardChosen[0] === cardChosen[1]) {
    cards[cardChosenId[0]].setAttribute("src", "images/white.png");
    cards[cardChosenId[1]].setAttribute("src", "images/white.png");
    cards[cardChosenId[0]].removeEventListener("click", flipCard);
    cards[cardChosenId[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[cardChosenId[0]].setAttribute("src", "images/blank.png");
    cards[cardChosenId[1]].setAttribute("src", "images/blank.png");
  }

  cardChosen = [];
  cardChosenId = [];

  if (cardsWon.length == cardArray.length / 2) {
    console.log("You won!");
  }
}

//creating function to flip the card
//this word meaning the scope is within the function only, if we use arrow function, the function should received the card variable for it to function.
//when the this function called it will get the data id of the img that has been clicked and with that we passed it to the cardArray to tell them that display this.
//We create chardChosen array to store the value of the chosen card identified by id and store with name.
//another array we create to store the id of the images
//checking if the user clicked already to cards by checking the length of the array if the user has clicked 2 cards already the checkmatch function will execute
function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardChosen.length === 2) {
    checkmatch();
  }
}

createBoard();
