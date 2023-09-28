const playerSlider = document.querySelector("#playerRange");
const enemySlider = document.querySelector("#enemyRange");
const playBtn = document.querySelector(".StartRace");
const playerCharacter = document.querySelector(`.playerImg`);
const BtnforAttack = document.querySelectorAll(".BtnContainer button");
const playerSelectionBtns = document.querySelector(".PlayerSelection");

const sample = document.querySelector(".sample");

sample.addEventListener("click", () => {
  console.log("buttonwasclicked");
});

//Player Data
let Player = document.querySelector(".PlayerName");
let PlayerHealth = document.querySelector("#playerHealthRange");
let PlayerMana = document.querySelector("#playerManaRange");
let PlayerImg = document.querySelector(".playerImg");

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
    Name: "Bird",
    Health: 100,
    Mana: 100,
    Attacks: [
      { Name: "FlameThrower", Damage: 20 },
      { Name: "Recover", Damage: 0 },
      { Name: "Peck", Damage: 10 },
    ],
    Image: "./images/firebird.png",
  },
  {
    Character: "Enemy",
    Name: "Machine",
    Health: 100,
    Mana: 100,
    Attacks: [
      { Name: "GearSlam", Damage: 25 },
      { Name: "Repair", Damage: 0 },
      { Name: "Throw", Damage: 15 },
    ],
    Image: "./images/robot.png",
  },
  {
    Character: "Player",
    Name: "Wizard",
    Health: 80,
    Mana: 120,
    Attacks: [
      { Name: "Fireball", Damage: 30 },
      { Name: "Heal", Damage: 0 },
      { Name: "Lightning Bolt", Damage: 35 },
    ],
    Image: "./images/wizard.png",
  },
  {
    Character: "Enemy",
    Name: "Orc",
    Health: 120,
    Mana: 0,
    Attacks: [
      { Name: "Axe Swing", Damage: 40 },
      { Name: "Roar", Damage: 0 },
      { Name: "Stomp", Damage: 20 },
    ],
    Image: "./images/orc.png",
  },
  {
    Character: "Player",
    Name: "Knight",
    Health: 150,
    Mana: 50,
    Attacks: [
      { Name: "Sword Slash", Damage: 35 },
      { Name: "Block", Damage: 0 },
      { Name: "Charge", Damage: 40 },
    ],
    Image: "./images/Knight.png",
  },
  {
    Character: "Enemy",
    Name: "Goblin",
    Health: 70,
    Mana: 0,
    Attacks: [
      { Name: "Bite", Damage: 15 },
      { Name: "Hide", Damage: 0 },
      { Name: "Throw Rocks", Damage: 10 },
    ],
    Image: "./images/goblin.png",
  },
  {
    Character: "Player",
    Name: "Archer",
    Health: 90,
    Mana: 80,
    Attacks: [
      { Name: "Arrow Shot", Damage: 25 },
      { Name: "Dodge", Damage: 0 },
      { Name: "Snipe", Damage: 30 },
    ],
    Image: "./images/archer.png",
  },
  {
    Character: "Enemy",
    Name: "Vampire",
    Health: 110,
    Mana: 90,
    Attacks: [
      { Name: "Bite", Damage: 25 },
      { Name: "Bat Form", Damage: 0 },
      { Name: "Blood Drain", Damage: 20 },
    ],
    Image: "./images/Vampire.png",
  },
  {
    Character: "Player",
    Name: "Ninja",
    Health: 70,
    Mana: 100,
    Attacks: [
      { Name: "Shuriken Throw", Damage: 15 },
      { Name: "Stealth", Damage: 0 },
      { Name: "Katana Slash", Damage: 30 },
    ],
    Image: "./images/ninja.png",
  },
  {
    Character: "Enemy",
    Name: "Dragon",
    Health: 200,
    Mana: 150,
    Attacks: [
      { Name: "Fire Breath", Damage: 50 },
      { Name: "Wing Strike", Damage: 40 },
      { Name: "Tail Swipe", Damage: 45 },
    ],
    Image: "./images/Dragon.png",
  },
];

for (var i = 0; i < 10; i++) {
  let btn = document.createElement("button");
  btn.classList.add("playerBtnSelection");
  btn.id = i;
  playerSelectionBtns.appendChild(btn);
}

const SelectionBtn = document.querySelectorAll(".playerBtnSelection");
const playerChar = document.querySelector(".playerChoosenChar");

Array.from(SelectionBtn).forEach((btn, index) => {
  let img = document.createElement("img");
  img.src = character[index].Image;
  btn.appendChild(img);

  img.addEventListener("click", (e) => {
    const imageSrc = e.target.src;
    playerChar.src = imageSrc;
  });
});

playerSelectionBtns.addEventListener("click", (e) => {
  if (e.target.classList.contains("playerBtnSelection")) {
    console.log(e.target.id);
    const imageSrc = e.target.querySelector("img").src;
    playerChar.src = imageSrc;
  }
});

BtnforAttack.forEach((btn, index) => {
  if (character[0].Attacks[index].Name) {
    btn.innerHTML = character[0].Attacks[index].Name;
  }
});

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

const playerAttack = () => {};

const enemyAttack = () => {};
