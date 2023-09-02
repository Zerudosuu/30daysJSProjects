const computerChoiceDisplay = document.querySelector("#computerChoice");
const userChoiceDisplay = document.querySelector("#userChoice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
let userChoice, computerChoice;

//get getting the possiblechoices which composes of buttons, accessed by queryselectorAll
//loopoing the possiblechoices since there are 3 buttons
//adding the choice as iterator.
// arrow to another function, we addeded addevenlistener in the loop for the buttons to have the same functions by clicking.
// callback arrow function e to determine the button that was clicked.
// adding userchoice variable with the params e to get the id of the clicked button
// since we already have what was clicked, the userchoice is the value of userChoiceDisplay
//using innerHTML to add value inside the html element or tag
possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    Decision();
  })
);

//generateComputerChoice arrowfunction
//we store the random number generated along with the length of possible choices plus 1 since the lenght will start to 0
//when random number is equal to 1 or 2 or 3 there are certain string that will be stored in computer choice randomly
//and it wil be displayed in computerchoiceDisplay
const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

  computerChoice =
    randomNumber === 1
      ? (computerChoice = `Rock`)
      : randomNumber === 2
      ? (computerChoice = `Paper`)
      : (computerChoice = `Scissor`);

  computerChoiceDisplay.innerHTML = computerChoice;
};

//decision arrow function to check if the computer won, you get the logic of the game
const Decision = () => {
  if (computerChoice === userChoice) {
    resultDisplay.innerHTML = "Draw!";
  } else if (computerChoice === "Paper" && userChoice === "Scissor") {
    resultDisplay.innerHTML = "You Won!";
  } else if (computerChoice === "Rock" && userChoice === "Paper") {
    resultDisplay.innerHTML = "You Won!";
  } else if (computerChoice === "Scissor" && userChoice === "Rock") {
    resultDisplay.innerHTML = "You Won!";
  } else {
    resultDisplay.innerHTML = "Computer Won!";
  }
};
