const characterSelection__images = document.querySelector(
  ".characterSelection__images"
);

const characterSelection__container = document.querySelector(
  ".characterSelection__container"
);

const characterSelection = document.querySelector(".characterSelection");

const battleArea = document.querySelector(".battleArea");
const StarGame = document.querySelector(".StarGame");
let PlayerOneSelected = document.querySelector(".playerOneCharacter");
let playerOneSelectButton = document.querySelector(".playerOneSubmit");
let playerTwoSelected = document.querySelector(".playerTwoCharacter");
let playerTwoSelectButton = document.querySelector(".playerTwoSubmit");
let BattleAreaPlayerOneImage = document.querySelector(".BattleAreaPlayerOne");
let BattleAreaPlayerTwoImage = document.querySelector(".BattleAreaPlayerTwo");
let playerOneAttacksContainer = document.querySelector(
  ".playerOneAttacksContainer"
);
let playerTwoAttacksContainer = document.querySelector(
  ".playerTwoAttacksContainer"
);

let playerNamePlaceholder = document.querySelector(".playerName");
let EnemyNamePlaceholder = document.querySelector(".enemyName");
let playBtn = document.querySelector(".StartRace");
const playerSlider = document.querySelector("#playerRange");
const enemySlider = document.querySelector("#enemyRange");
let playerOneEnergyBar = document.querySelector(".energybar");
const raceMeter = document.querySelector(".raceMeter");

let originalcharacter = [
  {
    Character: "Player",
    Name: "Bird",
    Health: 120,
    Mana: 100,
    Attacks: [
      { Name: "FlameThrower", Damage: 20, Animation: "animate__flash" },
      { Name: "Peck", Damage: 10, Animation: "animate__shakeX" },
      { Name: "Wing Gust", Damage: 15, Animation: "animate__flip" },
      { Name: "Tornado Strike", Damage: 25, Animation: "animate__wobble" },
    ],
    Image: "./images/firebird.png",
  },
  {
    Character: "Enemy",
    Name: "Machine",
    Health: 120,
    Mana: 100,
    Attacks: [
      { Name: "GearSlam", Damage: 25, Animation: "animate__wobble" },
      { Name: "Throw", Damage: 15, Animation: "animate__jello" },
      { Name: "Laser Beam", Damage: 30, Animation: "animate__bounceIn" },
      { Name: "Rocket Punch", Damage: 35, Animation: "animate__rotateIn" },
    ],
    Image: "./images/robot.png",
  },
  {
    Character: "Player",
    Name: "Wizard",
    Health: 100,
    Mana: 150,
    Attacks: [
      { Name: "Fireball", Damage: 30, Animation: "animate__fadeInLeft" },
      { Name: "Lightning Bolt", Damage: 35, Animation: "animate__fadeInUp" },
      { Name: "Arcane Missile", Damage: 20, Animation: "animate__tada" },
      { Name: "Meteor Strike", Damage: 40, Animation: "animate__heartBeat" },
    ],
    Image: "./images/wizard.png",
  },
  {
    Character: "Enemy",
    Name: "Orc",
    Health: 140,
    Mana: 0,
    Attacks: [
      { Name: "Axe Swing", Damage: 40, Animation: "animate__bounceIn" },
      { Name: "Stomp", Damage: 20, Animation: "animate__fadeIn" },
      { Name: "Rock Throw", Damage: 10, Animation: "animate__tada" },
      { Name: "Berserker Rage", Damage: 50, Animation: "animate__flipInX" },
    ],
    Image: "./images/orc.png",
  },
  {
    Character: "Player",
    Name: "Knight",
    Health: 160,
    Mana: 50,
    Attacks: [
      { Name: "Sword Slash", Damage: 35, Animation: "animate__rotateIn" },
      { Name: "Charge", Damage: 40, Animation: "animate__lightSpeedIn" },
      { Name: "Shield Bash", Damage: 25, Animation: "animate__wobble" },
      { Name: "Holy Strike", Damage: 45, Animation: "animate__shakeX" },
    ],
    Image: "./images/Knight.png",
  },
  {
    Character: "Enemy",
    Name: "Goblin",
    Health: 90,
    Mana: 0,
    Attacks: [
      { Name: "Bite", Damage: 15, Animation: "animate__swing" },
      { Name: "Throw Rocks", Damage: 10, Animation: "animate__tada" },
      { Name: "Goblin Punch", Damage: 12, Animation: "animate__jello" },
      { Name: "Ambush", Damage: 18, Animation: "animate__fadeIn" },
    ],
    Image: "./images/goblin.png",
  },
  {
    Character: "Player",
    Name: "Archer",
    Health: 110,
    Mana: 80,
    Attacks: [
      { Name: "Arrow Shot", Damage: 25, Animation: "animate__fadeInLeft" },
      { Name: "Snipe", Damage: 30, Animation: "animate__fadeInUp" },
      { Name: "Piercing Shot", Damage: 20, Animation: "animate__rotateIn" },
      { Name: "Explosive Arrow", Damage: 40, Animation: "animate__heartBeat" },
    ],
    Image: "./images/archer.png",
  },
  {
    Character: "Enemy",
    Name: "Vampire",
    Health: 130,
    Mana: 90,
    Attacks: [
      { Name: "Bite", Damage: 25, Animation: "animate__bounceIn" },
      { Name: "Blood Drain", Damage: 20, Animation: "animate__fadeIn" },
      { Name: "Vampiric Strike", Damage: 15, Animation: "animate__shakeX" },
      { Name: "Shadowstep", Damage: 30, Animation: "animate__rotateIn" },
    ],
    Image: "./images/Vampire.png",
  },
  {
    Character: "Player",
    Name: "Ninja",
    Health: 100,
    Mana: 100,
    Attacks: [
      { Name: "Shuriken Throw", Damage: 15, Animation: "animate__swing" },
      { Name: "Katana Slash", Damage: 30, Animation: "animate__tada" },
      { Name: "Smoke Bomb", Damage: 10, Animation: "animate__jello" },
      { Name: "Shadow Strike", Damage: 25, Animation: "animate__flipInX" },
    ],
    Image: "./images/ninja.png",
  },
  {
    Character: "Enemy",
    Name: "Dragon",
    Health: 180,
    Mana: 150,
    Attacks: [
      { Name: "Fire Breath", Damage: 50, Animation: "animate__rotateIn" },
      { Name: "Wing Strike", Damage: 40, Animation: "animate__flip" },
      { Name: "Tail Swipe", Damage: 45, Animation: "animate__lightSpeedIn" },
      { Name: "Dragon Roar", Damage: 30, Animation: "animate__fadeIn" },
    ],
    Image: "./images/Dragon.png",
  },
];

let playeroneAttack;
let playertwoAttack;
let playerfirst = null;
let playersecond = null;
let participants = [];
let index = 1;
let playerSliderValue = 0;
let enemySliderValue = 0;

for (var i = 0; i < 10; i++) {
  let characterimg = document.createElement("img");
  characterimg.src = originalcharacter[i].Image;
  characterimg.id = i;
  characterSelection__images.appendChild(characterimg);

  characterimg.addEventListener("click", () => {
    if (index === 1) {
      playerOne(characterimg.id);
    } else if (index === 2) {
      playerTwo(characterimg.id);
    }
  });
}

function playerOne(i) {
  PlayerOneSelected.src = originalcharacter[i].Image;
  playerfirst = originalcharacter[i];
  playerOneSelectButton.addEventListener("click", () => {
    participants.push(playerfirst);
    console.log(participants);
    index++;
    console.log(index);
    playerOneSelectButton.disabled = true;
  });
}

function playerTwo(i) {
  console.log(i);
  playersecond = originalcharacter[i];
  console.log(playersecond);
  playerTwoSelected.src = playersecond.Image;

  playerTwoSelectButton.addEventListener("click", () => {
    participants.push(playersecond);
    console.log(participants);
    characterSelection__container.style.filter = "blur(10px)";
    StarGame.style.display = "block";
  });
}

StarGame.addEventListener("click", () => {
  characterSelection.style.display = "none";
  battleArea.style.display = "grid";
  battleAreaPlayerOne();
  battleAreaPlayerTwo();
});

function battleAreaPlayerOne() {
  BattleAreaPlayerOneImage.src = playerfirst.Image;

  for (var i = 0; i < playerfirst.Attacks.length; i++) {
    playeroneAttack = document.createElement("button");
    playeroneAttack.id = i;
    playeroneAttack.innerHTML = `${playerfirst.Attacks[i].Name}| Damage: ${playerfirst.Attacks[i].Damage} `;
    playerOneAttacksContainer.appendChild(playeroneAttack);
  }

  playerNamePlaceholder.innerHTML = playerfirst.Name;

  console.log(
    `Player one: ${playerfirst.Name} || Health ${playerfirst.Health}`
  );
}

function battleAreaPlayerTwo() {
  BattleAreaPlayerTwoImage.src = playersecond.Image;

  for (var i = 0; i < playersecond.Attacks.length; i++) {
    playertwoAttack = document.createElement("button");
    playertwoAttack.id = i;
    playertwoAttack.innerHTML = `${playersecond.Attacks[i].Name}| Damage: ${playersecond.Attacks[i].Damage} `;
    playerTwoAttacksContainer.appendChild(playertwoAttack);
  }
  EnemyNamePlaceholder.innerHTML = playersecond.Name;
  console.log(
    `Player two: ${playersecond.Name} || Health ${playersecond.Health}`
  );
}

const randomEnergy = Math.floor(Math.random() * 20) + 1;

playerOneAttacksContainer.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "BUTTON") {
    const buttonId = Number(event.target.id);

    if (playersecond.Health > 0) {
      const damage = playerfirst.Attacks[buttonId].Damage;
      playersecond.Health -= damage;
      const healthInfo = `Player one: ${playersecond.Name} || Health ${playersecond.Health}`;

      playerOneAttacksContainer.style.display = "none";
      raceMeter.style.display = "block";
      console.log(healthInfo);
    }
  }
});

playerTwoAttacksContainer.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "BUTTON") {
    const buttonId = Number(event.target.id);

    if (playerfirst.Health > 0) {
      const damage = playersecond.Attacks[buttonId].Damage;
      playerfirst.Health -= damage;

      playerTwoAttacksContainer.style.display = "none";
      raceMeter.style.display = "block";
      const healthInfo = `Player one: ${playerfirst.Name} || Health ${playerfirst.Health}`;

      console.log(healthInfo);
    }
  }
});

function Randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animatePlayerSlider() {
  if (!enemyReachedEnd) {
    playerSliderValue += Randomizer(0.5, 3);
    playerSlider.value = playerSliderValue;

    if (playerSliderValue < 100) {
      requestAnimationFrame(animatePlayerSlider);
    } else {
      playerReachedEnd = true;
      playerOneAttacksContainer.style.display = "flex";
      raceMeter.style.display = "none";

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

      playerTwoAttacksContainer.style.display = "flex";
      raceMeter.style.display = "none";
      if (playerReachedEnd) {
        return;
      }
      console.log("Enemy first");
    }
  }
}

playBtn.addEventListener("click", () => {
  playerSliderValue = 0;
  enemySliderValue = 0;
  playerSlider.value = playerSliderValue;
  enemySlider.value = enemySliderValue;

  playerOneAttacksContainer.style.display = "none";
  playerTwoAttacksContainer.style.display = "none";
  playerReachedEnd = false;
  enemyReachedEnd = false;
  animatePlayerSlider();
  animateEnemySlider();
});
