const grid = document.querySelector(`.grid`);

//setting the height and widht of the block
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const ballDiameter = 20;

let xDirection = 2;
let yDirection = 2;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 150];
let ballCurrentPosition = ballStart;

let timerId;

//creating a class Block that has a constructor with properties of xAxis and YAxis
//xAxis and the yAxis are the properties the receive a value when the constructor is called with values
//this bottom-left is where the block is placed;
//this bottom-right is where the block placed, we added blockwidth to compute the position of the block in xAxis;
//top-left is where the block is placed adding blockheight to compute the position of the block in yAxis which is the vertical position
//this top-right is the position of the block, adding both of the blockheight and blockwidth to compute the position of the block in both directions;
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

// an object with the following declarations of Blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

//function add block is getting the length of the block array, creating a new element called block and assigning a class to it
// the style left took the value of the blocks array and getting the first index in class Block
//same goes to the bottom;
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + `px`;
    block.style.bottom = blocks[i].bottomLeft[1] + `px`;
    grid.appendChild(block);
  }
}

addBlocks();

const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

function moveUser(e) {
  switch (e.key) {
    case `ArrowLeft`:
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    case `ArrowRight`:
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
  }
  console.log(currentPosition);
}

document.addEventListener("keydown", moveUser);

const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollision();
  console.log(ballCurrentPosition);
}

timerId = setInterval(moveBall, 30);

function checkForCollision() {
  if (ballCurrentPosition[0] >= boardWidth - ballDiameter) {
    changeDirection();
  }
}

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
}
