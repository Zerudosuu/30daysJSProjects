const computerChoiceDisplay = document.querySelector("#computerChoice");
const userChoiceDisplay = document.querySelector("#userChoice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll("button");
let userChoice, computerChoice;

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    Decision();
  })
);

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
