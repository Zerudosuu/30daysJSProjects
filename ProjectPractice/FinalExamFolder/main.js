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
let RaceMeter = document.querySelector(".RaceMeter");
const playBtn = document.querySelector(".StartRace");
const playerSlider = document.querySelector("#playerRange");
const enemySlider = document.querySelector("#enemyRange");
const optionscontainer = document.querySelector(".optionscontainer");
const mainmenuButton = document.querySelectorAll("button");
const storage = document.querySelector(".Storage");
const inventory = document.querySelector(".Inventory");
const GameOver = document.querySelector(".GameOver");
const ReturnHome = document.querySelector(".ReturnHome");
const Selection = document.querySelector(".Selection");
const hoverSound = document.getElementById("hoverSound");
const audio = document.querySelector("audio");
let PlayerName = document.querySelector(".playerName");
let EnemyName = document.querySelector(".enemyName");

let selectedChar = null;
let isbagopen = false;
let playerSliderValue = 0;
let enemySliderValue = 0;
let playerReachedEnd = false;
let enemyReachedEnd = false;
let opponent;
let currentOpponentIndex = 0;
let selectedAttackIndex = 0;
const randommHeal = Math.floor(Math.random() * (50 - 30 + 1) + 30);

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

let character = JSON.parse(JSON.stringify(originalcharacter));
storage.style.display = "none";

inventory.addEventListener("click", () => {
  if (isbagopen) {
    storage.style.display = "none";
    isbagopen = false;
  } else {
    storage.style.display = "flex";
    isbagopen = true;
  }
});

Array.from(mainmenuButton).forEach((btn) => {
  btn.addEventListener("click", () => {
    showContent(btn);
  });

  btn.addEventListener("mouseover", () => {
    hoverSound.play();
  });
});

startGameBtn.addEventListener("click", () => {
  mainMenu.style.display = "none";
  characterSelection.style.display = "grid";

  console.log(character);
  character[0].Name = "Ronald";

  createImage();
});

function showContent(buttonNumber) {
  console.log(buttonNumber);
  let content = "";

  // Depending on the button clicked, change the content
  switch (buttonNumber) {
    case settingsBtn:
      content = `<div>
      <h1>RONALD SALVADOR</h1></div>`;
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

  leftSide.innerHTML = content;
}

const HealingAmount = Math.floor(Math.random() * (50 - 30 + 1) + 30);

function selectCharacter(index) {
  console.log(character);
  console.log(originalcharacter);
  charImage.src = character[index].Image;
  selectedChar = character[index];
  health.innerHTML = `Health: ${character[index].Health}`;
  mana.innerHTML = `Mana: ${character[index].Mana}`;
  charAttacks.innerHTML = `Attacks: ${character[index].Attacks[0].Name}, ${character[index].Attacks[1].Name}, ${character[index].Attacks[2].Name}, ${character[index].Attacks[3].Name}`;

  attackbtns.forEach((btn, index) => {
    btn.innerHTML = `${selectedChar.Attacks[index].Name} || Damage: ${selectedChar.Attacks[index].Damage}`;
  });
}

battleStart.addEventListener("click", () => {
  if (selectedChar) {
    shuffle(character);
    player(selectedChar);

    if (character.length > 0) {
      opponent = character[currentOpponentIndex];
      console.log("Selected opponent: ", opponent);
      OpponentSide.src = opponent.Image;
      EnemyName.innerHTML = opponent.Name;
    }
    PlayerName.innerHTML = selectedChar.Name;
  } else {
    console.log("No selected character");
  }
});

Array.from(attackbtns).forEach((btn, attackindex) =>
  btn.addEventListener("click", () => {
    if (opponent && opponent.Health > 0) {
      playerchoice.classList.add(selectedChar.Attacks[attackindex].Animation);
      OpponentSide.classList.add("animate__flash");

      optionscontainer.classList.remove("animate__slideInUp");
      RaceMeter.classList.remove("animate__backOutDown");
      playBtn.disabled = false;

      optionscontainer.classList.add("animate__fadeOutDown");

      console.log(`Opponent Health: ${opponent.Health}`);
      opponent.Health -= selectedChar.Attacks[attackindex].Damage;
      console.log(`Opponent Health (update): ${opponent.Health}`);

      setTimeout(() => {
        optionscontainer.style.display = "none";
      }, 100);

      RaceMeter.style.display = "block";
      RaceMeter.classList.add("animate__backInUp");
      checkifDead();
    }

    playerchoice.addEventListener("animationend", function () {
      playerchoice.classList.remove(
        selectedChar.Attacks[0].Animation,
        selectedChar.Attacks[1].Animation,
        selectedChar.Attacks[2].Animation,
        selectedChar.Attacks[3].Animation
      );
    });
  })
);

//for creating HP items and removing it from the list if pressed
for (let i = 0; i < 10; i++) {
  let HpItem = document.createElement("button");
  HpItem.innerHTML = "Heal";
  HpItem.id = i;
  storage.appendChild(HpItem);

  HpItem.addEventListener("click", function (e) {
    const clickedButtonId = e.target.id;
    console.log("Clicked button ID: " + clickedButtonId);
    console.log(selectedChar.Health);

    selectedChar.Health += randommHeal;
    console.log(selectedChar.Health);

    e.target.remove();
    inventory.disabled = true;
    playBtn.disabled = false;
  });
}

//removing character when defeated
function removeDeadCharacter(arr, index) {
  if (arr[index].Health <= 0) {
    character.splice(index, 1);
    return true;
  } else {
    return false;
  }
} //checking if the current index is less than the max char lenght
function checkifDead() {
  if (opponent.Health <= 0) {
    removeDeadCharacter(character, currentOpponentIndex);

    if (currentOpponentIndex < character.length) {
      opponent = character[currentOpponentIndex];
      OpponentSide.src = opponent.Image;
      currentOpponentIndex++;
      console.log(opponent);
    } else {
    }
  }
}

//shuffling array, array is the chracter array
function shuffle(array) {
  let currentindex = array.length,
    randomIndex;

  while (currentindex > 0) {
    randomIndex = Math.floor(Math.random() * currentindex);
    currentindex--;
    [array[currentindex], array[randomIndex]] = [
      array[randomIndex],
      array[currentindex],
    ];
  }

  return array;
}

//this is for creating the selection image and whe you pressed it, it will passed down to selectCharacter function
function createImage() {
  for (let i = 0; i < 10; i++) {
    let img = document.createElement("img");
    img.src = character[i].Image;
    img.id = i;
    characterlist.appendChild(img);

    img.addEventListener("click", () => {
      selectCharacter(i);
    });
  }
}

function player(index) {
  character.splice(index, 1);
  battleArea.style.display = "grid";
  characterSelection.style.display = "none";
  playerchoice.src = selectedChar.Image;
  console.log(selectedChar);
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
      optionscontainer.classList.remove("animate__fadeOutDown");
      optionscontainer.style.display = "flex";
      optionscontainer.classList.add("animate__slideInUp");

      RaceMeter.classList.remove("animate__backInUp");

      RaceMeter.classList.add("animate__backOutDown");
      setTimeout(() => {
        RaceMeter.style.display = "none";
      }, 100);

      // RaceMeter.classList.remove("animate__backOutDown");

      attackbtns.forEach((btn) => {
        btn.disabled = false;
        playBtn.disabled = true;
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

      console.log(`Player Currrent health: ${selectedChar.Health}`);

      console.log(randomattackindex);
      if (randomattackindex === 5) {
        console.log("Opponent Healed");
        console.log(`current opponent health: ${opponent.Health}`);
        opponent.Health += randommHeal;
        console.log(`current opponent health (Healed): ${opponent.Health}`);
      } else {
        OpponentSide.classList.remove("animate__flash");
        selectedChar.Health -= opponent.Attacks[randomattackindex].Damage;
        console.log(opponent.Attacks[randomattackindex].Name);
        console.log(`Player Currrent health updated: ${selectedChar.Health}`);

        if (selectedChar.Health <= 0) {
          GameOver.style.display = "flex";
        }
      }

      if (playerReachedEnd) {
        return;
      }
      console.log("Enemy first");
    }
  }
}

ReturnHome.addEventListener("click", () => {
  mainMenu.style.display = "grid";
  characterSelection.style.display = "none";
  battleArea.style.display = "none";
  GameOver.style.display = "none";
  character = [...originalcharacter];
  resetGame();
});

Selection.addEventListener("click", () => {
  mainMenu.style.display = "none";
  characterSelection.style.display = "grid";
  battleArea.style.display = "none";
  GameOver.style.display = "none";
  resetGame();

  createImage();
});

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
  inventory.disabled = false;

  attackbtns.forEach((btn) => {
    btn.disabled = true;
  });

  optionscontainer.style.display = "none";
  animatePlayerSlider();
  animateEnemySlider();
});

function resetGame() {
  selectedChar = null;
  isbagopen = false;
  playerSliderValue = 0;
  enemySliderValue = 0;
  playerReachedEnd = false;
  enemyReachedEnd = false;
  currentOpponentIndex = 0;
  opponent = null;

  PlayerName.innerHTML = "";
  EnemyName.innerHTML = "";

  character = [...originalcharacter];
  console.log(character);

  charImage.src = "";
  health.innerHTML = "";
  mana.innerHTML = "";
  charAttacks.innerHTML = "";
  OpponentSide.src = "";

  OpponentSide.classList.remove("animate__flash");

  while (characterlist.firstChild) {
    characterlist.removeChild(characterlist.firstChild);
  }
}
