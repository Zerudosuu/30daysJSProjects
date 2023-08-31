const question = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elaphant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest countru in the world?",
    answer: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answer: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Antartic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const Question = document.querySelector(`#question`);
const Answerbtn = document.querySelector(`#answer-button`);
const Nextbtn = document.querySelector(`#next-btn`);

let currentQuestionIndex = 0;
let score = 0;

const startquiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  Nextbtn.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  Question.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    Answerbtn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  Nextbtn.style.display = "none";
  while (Answerbtn.firstChild) {
    Answerbtn.removeChild(Answerbtn.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct == "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(Answerbtn.children).forEach((button) => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    }

    button.disbaled = true;
  });
  Nextbtn.style.display = "block";
};
startquiz();
