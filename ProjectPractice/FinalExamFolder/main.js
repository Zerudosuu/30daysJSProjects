const startGameBtn = document.querySelector(".startGamebtn");
const settingsBtn = document.querySelector(".settingsBtn");
const charactersBtn = document.querySelector(".charactersBtn");
const creditsBtn = document.querySelector(".creditsBtn");
const exitBtn = document.querySelector(".exitBtn");
const leftSide = document.querySelector(".leftSide");

const mainMenu = document.querySelector(".mainMenu");
const characterSelection = document.querySelector(".characterSelection");
let charListContainer = document.querySelector(
  ".characterSelection__listOfCharacters"
);

const mainmenuButton = document.querySelectorAll("button");
console.log(mainmenuButton);

Array.from(mainmenuButton).forEach((btn) => {
  btn.addEventListener("click", () => {
    showContent(btn);
  });
});

startGameBtn.addEventListener("click", () => {
  mainMenu.style.display = "none";
  characterSelection.style.display = "grid";
});

function showContent(buttonNumber) {
  console.log(buttonNumber);
  let content = "";

  // Depending on the button clicked, change the content
  switch (buttonNumber) {
    case settingsBtn:
      content = "Settings Ini";
      break;
    case charactersBtn:
      content = "Displayan ning character";
      break;
    case creditsBtn:
      content = "credits ini";
      break;
    default:
      content = "Default Content";
      break;
  }

  // Set the content in the panel
  leftSide.textContent = content;
}
let character = [
  {
    Character: "Player",
    Name: "Bird",
    Health: 120,
    Mana: 100,
    Attacks: [
      { Name: "FlameThrower", Damage: 20, Animation: "animate__flash" },
      { Name: "Recover", Damage: 0, Animation: "animate__rubberBand" },
      { Name: "Peck", Damage: 10, Animation: "animate__shakeX" },
      { Name: "Defense", Damage: -10, Animation: "animate__heartBeat" },
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
      { Name: "Repair", Damage: 0, Animation: "animate__jackInTheBox" },
      { Name: "Throw", Damage: 15, Animation: "animate__jello" },
      { Name: "Defense", Damage: -10, Animation: "animate__heartBeat" },
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
      { Name: "Heal", Damage: 0, Animation: "animate__fadeInRight" },
      { Name: "Lightning Bolt", Damage: 35, Animation: "animate__fadeInUp" },
      { Name: "Defense", Damage: -15, Animation: "animate__heartBeat" },
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
      { Name: "Roar", Damage: 0, Animation: "animate__flipInX" },
      { Name: "Stomp", Damage: 20, Animation: "animate__fadeIn" },
      { Name: "Defense", Damage: -10, Animation: "animate__heartBeat" },
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
      { Name: "Block", Damage: 0, Animation: "animate__flip" },
      { Name: "Charge", Damage: 40, Animation: "animate__lightSpeedIn" },
      { Name: "Defense", Damage: -10, Animation: "animate__heartBeat" },
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
      { Name: "Hide", Damage: 0, Animation: "animate__hinge" },
      { Name: "Throw Rocks", Damage: 10, Animation: "animate__tada" },
      { Name: "Defense", Damage: -10, Animation: "animate__heartBeat" },
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
      { Name: "Dodge", Damage: 0, Animation: "animate__fadeInRight" },
      { Name: "Snipe", Damage: 30, Animation: "animate__fadeInUp" },
      { Name: "Defense", Damage: -10, Animation: "animate__heartBeat" },
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
      { Name: "Bat Form", Damage: 0, Animation: "animate__flipInX" },
      { Name: "Blood Drain", Damage: 20, Animation: "animate__fadeIn" },
      { Name: "Defense", Damage: -10, Animation: "animate__heartBeat" },
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
      { Name: "Stealth", Damage: 0, Animation: "animate__hinge" },
      { Name: "Katana Slash", Damage: 30, Animation: "animate__tada" },
      { Name: "Defense", Damage: -10, Animation: "animate__heartBeat" },
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
      { Name: "Defense", Damage: -15, Animation: "animate__heartBeat" },
    ],
    Image: "./images/Dragon.png",
  },
];

let characterlist = document.querySelector(".characterContainer");
let charImage = document.querySelector(".CharacterSelectedImage");
let health = document.querySelector(".charHealth");
let mana = document.querySelector(".charMana");
let charAttacks = document.querySelector(".charAttacks");
const battleStart = document.querySelector(".CommenceBattle");
const battleArea = document.querySelector(".battleArea");
let playerchoice = document.querySelector(".player");
let OpponentSide = document.querySelector(".OpponentSide");
let attackbtns = document.querySelectorAll(".moves");

let selectedChar = null;

const playBtn = document.querySelector(".StartRace");
const playerSlider = document.querySelector("#playerRange");
const enemySlider = document.querySelector("#enemyRange");
const optionscontainer = document.querySelector(".optionscontainer");

let playerSliderValue = 0;
let enemySliderValue = 0;

let playerReachedEnd = false;
let enemyReachedEnd = false;

let opponent;

function selectCharacter(index) {
  charImage.src = character[index].Image;
  selectedChar = character[index];
  health.innerHTML = `Health: ${character[index].Health}`;
  mana.innerHTML = `Mana: ${character[index].Mana}`;
  charAttacks.innerHTML = `Attacks: ${character[index].Attacks[0].Name}, ${character[index].Attacks[1].Name}, ${character[index].Attacks[2].Name}, ${character[index].Attacks[3].Name}`;

  battleStart.addEventListener("click", () => {
    if (selectedChar) {
      player(index);

      if (character.length > 0) {
        const randomOpponentIndex = Math.floor(
          Math.random() * character.length
        );
        opponent = character[randomOpponentIndex];
        console.log("Selected opponent: ", opponent);
        OpponentSide.src = opponent.Image;

        if (opponent.health <= 0) {
          opponent.splice(index, 1);
        }
      } else {
        console.log("No more opponents");
      }

      attackbtns.forEach((btn, index) => {
        btn.innerHTML = `${selectedChar.Attacks[index].Name} || Damage: ${selectedChar.Attacks[index].Damage}`;
        btn.addEventListener("click", () => {
          console.log(selectedChar.Attacks[index].Damage);

          if (btn.id == "move1") {
            playerchoice.classList.add(selectedChar.Attacks[0].Animation);
            OpponentSide.classList.add("animate__flash");
            console.log(`Opponent Health: ${opponent.Health}`);
            opponent.Health -= selectedChar.Attacks[index].Damage;
            console.log(`Opponent Health (update): ${opponent.Health}`);
          } else if (btn.id == "move2") {
            playerchoice.classList.add(selectedChar.Attacks[1].Animation);
            OpponentSide.classList.add("animate__flash");
            console.log(`Opponent Health: ${opponent.Health}`);
            opponent.Health -= selectedChar.Attacks[index].Damage;
            console.log(`Opponent Health (update): ${opponent.Health}`);
          } else if (btn.id == "move3") {
            playerchoice.classList.add(selectedChar.Attacks[2].Animation);
            OpponentSide.classList.add("animate__flash");
            console.log(`Opponent Health: ${opponent.Health}`);
            opponent.Health -= selectedChar.Attacks[index].Damage;
            console.log(`Opponent Health (update): ${opponent.Health}`);
          } else {
            playerchoice.classList.add(selectedChar.Attacks[3].Animation);
          }

          playerchoice.addEventListener("animationend", function () {
            playerchoice.classList.remove(
              selectedChar.Attacks[0].Animation,
              selectedChar.Attacks[1].Animation,
              selectedChar.Attacks[2].Animation,
              selectedChar.Attacks[3].Animation
            );
          });

          OpponentSide.addEventListener("animationend", function () {
            OpponentSide.classList.remove("animate__flash");
          });

          attackbtns.forEach((button) => {
            button.disabled = true;
          });
        });
      });
    } else {
      console.log("No selected character");
    }
  });
}

for (let i = 0; i < 10; i++) {
  let img = document.createElement("img");
  img.src = character[i].Image;
  img.id = i;
  characterlist.appendChild(img);

  img.addEventListener("click", () => {
    selectCharacter(i);
  });
}

function player(index) {
  character.splice(index, 1);
  console.log(character);
  battleArea.style.display = "grid";
  characterSelection.style.display = "none";
  playerchoice.src = selectedChar.Image;
}

// animate slider
function animatePlayerSlider() {
  if (!enemyReachedEnd) {
    playerSliderValue += Randomizer(0.5, 3);
    playerSlider.value = playerSliderValue;

    if (playerSliderValue < 100) {
      requestAnimationFrame(animatePlayerSlider);
    } else {
      playerReachedEnd = true;
      optionscontainer.style.display = "flex";
      optionscontainer.classList.add("animate__slideInUp");

      attackbtns.forEach((btn) => {
        btn.disabled = false;
      });

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

      let randomattackindex = Math.floor(
        Math.random() * opponent.Attacks.length
      );

      console.log(randomattackindex);

      console.log(`Currrent health: ${selectedChar.Health}`);
      selectedChar.Health -= opponent.Attacks[randomattackindex].Damage;
      console.log(opponent.Attacks[randomattackindex].Name);
      console.log(`Currrent health updated: ${selectedChar.Health}`);

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

  attackbtns.forEach((btn) => {
    btn.disabled = true;
  });

  optionscontainer.style.display = "none";
  animatePlayerSlider();
  animateEnemySlider();
});
