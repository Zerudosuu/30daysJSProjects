// const container = document.querySelector(`.container`);
// const playerCharacter = document.createElement("div");
// playerCharacter.classList.add("character");

// const playerimage = document.createElement("img");
// playerimage.src = "./images/player1.png";
// playerCharacter.appendChild(playerimage); // Append the image to the character div
// container.appendChild(playerCharacter);

// let bulletcontainer = document.createElement("div");
// bulletcontainer.className = "bullet";
// bulletcontainer.style.position = "absolute";

// let PlayerPosition = [230, 230, 0, 0];
// let currentPlayerPosition = PlayerPosition;
// let xDirection = 2;
// let yDirection = 2;
// const stageWidth = 1900;
// const stageHeight = 900;
// const userHeight = 100;
// const userWidth = 100;
// const bulletWidth = 40;

// function drawUser() {
//   playerCharacter.style.left = currentPlayerPosition[0] + "px";
//   playerCharacter.style.bottom = currentPlayerPosition[1] + "px";
// }

// function moveUser(e) {
//   switch (e.key) {
//     case "ArrowLeft":
//       if (currentPlayerPosition[0] > 0) {
//         currentPlayerPosition[0] -= 20;
//         console.log(currentPlayerPosition[0] > 0);
//         drawUser();
//       }
//       break;
//     case "ArrowRight":
//       if (currentPlayerPosition[0] < stageWidth - userWidth) {
//         currentPlayerPosition[0] += 20;
//         console.log(currentPlayerPosition[0]);
//         drawUser();
//       }
//       break;
//   }
// }

// document.addEventListener("keydown", fire);

const playerSlider = document.querySelector("#playerRange");
const enemySlider = document.querySelector("#enemyRange");
const playBtn = document.querySelector(".StartRace");
const Attack = document.querySelector(`.Attack`);
const playerCharacter = document.querySelector(`.playerImg`);

//Player Data
let Player = document.querySelector(".PlayerName");
let PlayerHealth = document.querySelector("#playerHealthRange");
let PlayerMana = document.querySelector("#playerManaRange");

//Enemy Data
let Enemy = document.querySelector(".EnemyName");
let enemyHealth = document.querySelector("#enemyHealthRange");
let enemyMana = document.querySelector("#enemyManaRange");

let playerSliderValue = 0;
let enemySliderValue = 0;

let playerReachedEnd = false;
let enemyReachedEnd = false;

const character = [
  {
    Character: "Player",
    Name: "Ronald",
    Health: 100,
    Mana: 100,
  },

  {
    Character: "Enemy",
    Name: "John",
    Health: 100,
    Mana: 100,
  },
  {
    Character: "Enemy",
    Name: "William",
    Health: 100,
    Mana: 100,
  },
];

Player.innerHTML = character[0].Name;
Enemy.innerHTML = character[1].Name;
PlayerHealth.value = character[0].Health;
enemyHealth.value = character[1].Health;

let healthPLayer = PlayerHealth.value;
let healthEnemy = enemyHealth.value;

let damage = 10;

function animatePlayerSlider() {
  if (!enemyReachedEnd) {
    playerSliderValue += Randomizer(0.5, 3);
    playerSlider.value = playerSliderValue;

    if (playerSliderValue < 100) {
      requestAnimationFrame(animatePlayerSlider);
    } else {
      playerReachedEnd = true;
      Attack.innerHTML = "Player turn to attack";
      playerAttack();
      if (enemyReachedEnd) {
        return;
      }
      console.log("Player first");
    }
  }
}

function animateEnemySlider() {
  if (!playerReachedEnd) {
    enemySliderValue += Randomizer(0.5, 3);
    enemySlider.value = enemySliderValue;

    if (enemySliderValue < 100) {
      requestAnimationFrame(animateEnemySlider);
    } else {
      enemyReachedEnd = true;
      Attack.innerHTML = "Enemy turn to attack";
      enemyAttack();
      if (playerReachedEnd) {
        return;
      }
      console.log("Enemy first");
    }
  }
}

function Randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

playBtn.addEventListener("click", () => {
  playerSliderValue = 0;
  enemySliderValue = 0;
  playerSlider.value = playerSliderValue;
  enemySlider.value = enemySliderValue;

  playerReachedEnd = false;
  enemyReachedEnd = false;

  animatePlayerSlider();
  animateEnemySlider();
});

const playerAttack = () => {
  const EnemycurrentHealth = (healthEnemy -= damage);
  enemyHealth.value = EnemycurrentHealth;
};

const enemyAttack = () => {
  const PlayercurrentHealth = (healthPLayer -= damage);
  PlayerHealth.value = PlayercurrentHealth;
};

// const canvas = document.querySelector(".playerCanvas");
// const ctx = canvas.getContext("2d");
// const myimg = document.querySelector(".myImg");

// function playerAnimate() {
//   ctx.drawImage(myimg, 10, 30, myImg.width / 2, myimg.height / 2);
// }

// playerAnimate();
// const canvas = document.querySelector(".playerCanvas");
// const ctx = canvas.getContext("2d");

// const canvasWidth = (canvas.width = 778);
// const canvasHeight = (canvas.height = 625);
// const spriteWidth = 1038;
// const spriteHeight = 833;
// let gameFrame = 0;
// let stagger = 0;
// const staggerFrame = 10;
// let index = 1;
// let playerState = "run";
// const myimg = document.querySelector(".myImg");

// const animationStates = [
//   { name: "run", frames: 4 },
//   { name: "attack", frames: 6 },
//   { name: "jump", frames: 9 },
//   { name: "dash", frames: 7 },
// ];

// const spriteAnimations = ["run", "attack", "jump", "dash"];

// function animate() {
//   if (stagger % staggerFrame == 0) {
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     index = spriteAnimations.indexOf(playerState);
//     let frameX = spriteWidth * (gameFrame % animationStates[index].frames);
//     let frameY = spriteHeight * index;
//     ctx.drawImage(
//       myimg,
//       frameX,
//       frameY,
//       spriteWidth,
//       spriteHeight,
//       0,
//       0,
//       canvasWidth,
//       canvasHeight
//     );
//     gameFrame++;
//   }
//   stagger++;

//   requestAnimationFrame(animate);
// }
// animate(); // Initial player state is running

// function jump(e) {
//   if (e.keyCode === 70) {
//     if (playerState === "run") {
//       playerState = "attack";
//       setTimeout(function () {
//         playerState = "run";
//       }, 500);
//     }
//   }
// }

// // Add an event listener to trigger the jump function when 'F' key is pressed
// document.addEventListener("keydown", jump);
