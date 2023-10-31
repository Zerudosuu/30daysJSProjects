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
let playerOneSupperAttacksContainerImage = document.querySelector(
  ".playerOneSupperAttacksContainerImage"
);
let playerTwoSupperAttacksContainerImage = document.querySelector(
  ".playerTwoSupperAttacksContainerImage"
);
let PlayerOneHealth = document.querySelector(".PlayerOneHealth");
let PlayerOneenergybar = document.querySelector(".PlayerOneenergybar");
let PlayerTwoHealth = document.querySelector(".PlayerTwoHealth");
let PlayerTwoenergybar = document.querySelector(".PlayerTwoenergybar");
const raceMeter = document.querySelector(".raceMeter");
const playerOneAttacks = playerOneAttacksContainer.children;
const playerTwoAttacks = playerTwoAttacksContainer.children;
const selected = characterSelection__images.children;
let playAttackAudio = document.querySelector(".playAttackAudio");
let playreactionAudio = document.querySelector(".playreactionAudio");
let backgroundAudio = document.querySelector(".backgroundAudio");
let PlayerOneMana = document.querySelector(".PlayerOneMana");
let PlayerTwoMana = document.querySelector(".PlayerTwoMana");
const PoneWincontainer = document.querySelector(".PoneWincontainer");
const PtwoWincontainer = document.querySelector(".PtwoWincontainer");
const P2wincount = PtwoWincontainer.children;
const Pwincount = PoneWincontainer.children;

for (let i = 0; i < Pwincount.length; i++) {
  Pwincount[i].style.display = "none";
  P2wincount[i].style.display = "none";
}

backgroundAudio.loop = true;
backgroundAudio.volume = 0.3;

let originalcharacter = [
  {
    Character: "Player",
    Name: "Bird",
    Health: 300,
    Mana: 100,
    MaxMana: 100,
    Attacks: [
      {
        Name: "FlameThrower",
        Damage: 20,
        Animation: "animate__flash",
        ManaCost: 30,
      },
      { Name: "Peck", Damage: 10, Animation: "animate__shakeX", ManaCost: 15 },
      {
        Name: "Wing Gust",
        Damage: 15,
        Animation: "animate__flip",
        ManaCost: 20,
      },
      {
        Name: "Inferno Blaze", // Special Attack
        Damage: 60, // Higher total damage
        Animation: "animate__explode",
        video: "./images/Elmofire.gif",
        Audio: "./images/FireBird.wav",
        ManaCost: 60, // Adjusted ManaCost
      },
    ],
    Image: "./images/firebird.png",
  },
  {
    Character: "Enemy",
    Name: "Machine",
    Health: 280,
    Mana: 100,
    MaxMana: 100,
    Attacks: [
      {
        Name: "GearSlam",
        Damage: 25,
        Animation: "animate__wobble",
        ManaCost: 35,
      },
      { Name: "Throw", Damage: 15, Animation: "animate__jello", ManaCost: 25 },
      {
        Name: "Laser Beam",
        Damage: 30,
        Animation: "animate__bounceIn",
        ManaCost: 40,
      },
      {
        Name: "Mega Cannon", // Special Attack
        Damage: 70, // Higher total damage
        Animation: "animate__flash",
        video: "./images/RobotSuper.gif",
        Audio: "./images/muda.mp3",
        ManaCost: 70, // Adjusted ManaCost
      },
    ],
    Image: "./images/robot.png",
  },
  {
    Character: "Player",
    Name: "Wizard",
    Health: 270,
    Mana: 150,
    MaxMana: 150,
    Attacks: [
      {
        Name: "Fireball",
        Damage: 30,
        Animation: "animate__fadeInLeft",
        ManaCost: 30,
      },
      {
        Name: "Lightning Bolt",
        Damage: 35,
        Animation: "animate__fadeInUp",
        ManaCost: 35,
      },
      {
        Name: "Arcane Missile",
        Damage: 20,
        Animation: "animate__tada",
        ManaCost: 20,
      },
      {
        Name: "Meteor Strike", // Special Attack
        Damage: 75, // Higher total damage
        Animation: "animate__heartBeat",
        video: "./images/MeteorStrike.gif",
        Audio: "",
        ManaCost: 75, // Adjusted ManaCost
      },
    ],
    Image: "./images/wizard.png",
  },
  {
    Character: "Enemy",
    Name: "Orc",
    Health: 290,
    Mana: 200, // Added Mana property
    MaxMana: 200, // Orc has no mana
    Attacks: [
      {
        Name: "Axe Swing",
        Damage: 40,
        Animation: "animate__bounceIn",
        ManaCost: 60, // Added ManaCost property
      },
      { Name: "Stomp", Damage: 20, Animation: "animate__fadeIn", ManaCost: 40 },
      {
        Name: "Rock Throw",
        Damage: 25,
        Animation: "animate__tada",
        ManaCost: 35,
      },
      {
        Name: "Berserker Rage", // Special Attack
        Damage: 80, // Higher total damage
        Animation: "animate__flipInX",
        video: "./images/hulk.gif",
        Audio: "./images/hulksounds.m4a",
        ManaCost: 100, // Added ManaCost property
      },
    ],
    Image: "./images/orc.png",
  },
  {
    Character: "Player",
    Name: "Knight",
    Health: 320,
    Mana: 50,
    MaxMana: 50,
    Attacks: [
      {
        Name: "Sword Slash",
        Damage: 35,
        Animation: "animate__rotateIn",
        ManaCost: 35,
      },
      {
        Name: "Charge",
        Damage: 40,
        Animation: "animate__lightSpeedIn",
        ManaCost: 40,
      },
      {
        Name: "Shield Bash",
        Damage: 25,
        Animation: "animate__wobble",
        ManaCost: 25,
      },
      {
        Name: "Holy Strike", // Special Attack
        Damage: 90, // Higher total damage
        Animation: "animate__shakeX",
        ManaCost: 90, // Adjusted ManaCost
        video: "./images/BonkVid.gif",
        Audio: "./images/BonkSound.m4a",
      },
    ],
    Image: "./images/Knight.png",
  },
  {
    Character: "Enemy",
    Name: "Goblin",
    Health: 270,
    Mana: 100, // Added Mana property
    MaxMana: 100, // Goblin has no mana
    Attacks: [
      { Name: "Bite", Damage: 15, Animation: "animate__swing", ManaCost: 20 },
      {
        Name: "Throw Rocks",
        Damage: 10,
        Animation: "animate__tada",
        ManaCost: 25,
      },
      {
        Name: "Goblin Punch",
        Damage: 12,
        Animation: "animate__jello",
        ManaCost: 30,
      },
      {
        Name: "Ambush",
        Damage: 80,
        Animation: "animate__fadeIn",
        ManaCost: 100,
      },
    ],
    Image: "./images/goblin.png",
  },
  {
    Character: "Player",
    Name: "Archer",
    Health: 290,
    Mana: 80,
    MaxMana: 80,
    Attacks: [
      {
        Name: "Arrow Shot",
        Damage: 25,
        Animation: "animate__fadeInLeft",
        ManaCost: 25,
      },
      {
        Name: "Snipe",
        Damage: 30,
        Animation: "animate__fadeInUp",
        ManaCost: 30,
      },
      {
        Name: "Piercing Shot",
        Damage: 20,
        Animation: "animate__rotateIn",
        ManaCost: 20,
      },
      {
        Name: "Explosive Arrow", // Special Attack
        Damage: 90, // Higher total damage
        Animation: "animate__heartBeat",
        ManaCost: 90, // Adjusted ManaCost
      },
    ],
    Image: "./images/archer.png",
  },
  {
    Character: "Enemy",
    Name: "Vampire",
    Health: 300,
    Mana: 90,
    MaxMana: 90,
    Attacks: [
      {
        Name: "Bite",
        Damage: 25,
        Animation: "animate__bounceIn",
        ManaCost: 25,
      },
      {
        Name: "Blood Drain",
        Damage: 20,
        Animation: "animate__fadeIn",
        ManaCost: 20,
      },
      {
        Name: "Vampiric Strike",
        Damage: 15,
        Animation: "animate__shakeX",
        ManaCost: 15,
      },
      {
        Name: "Shadowstep", // Special Attack
        Damage: 60, // Higher total damage
        Animation: "animate__rotateIn",
        ManaCost: 60, // Adjusted ManaCost
      },
    ],
    Image: "./images/Vampire.png",
  },
  {
    Character: "Player",
    Name: "Ninja",
    Health: 270,
    Mana: 100,
    MaxMana: 100,
    Attacks: [
      {
        Name: "Shuriken Throw",
        Damage: 15,
        Animation: "animate__swing",
        ManaCost: 15,
      },
      {
        Name: "Katana Slash",
        Damage: 30,
        Animation: "animate__tada",
        ManaCost: 30,
      },
      {
        Name: "Smoke Bomb",
        Damage: 10,
        Animation: "animate__jello",
        ManaCost: 10,
      },
      {
        Name: "Shadow Strike",
        Damage: 70,
        Animation: "animate__flipInX",
        ManaCost: 70,
        video: "./images/NinjaUlt.gif",
        Audio: "./images/NinjaUltSounds.m4a",
      },
    ],
    Image: "./images/ninja.png",
  },
  {
    Character: "Enemy",
    Name: "Dragon",
    Health: 310,
    Mana: 150,
    MaxMana: 150,
    Attacks: [
      {
        Name: "Fire Breath",
        Damage: 50,
        Animation: "animate__rotateIn",
        ManaCost: 50,
      },
      {
        Name: "Wing Strike",
        Damage: 40,
        Animation: "animate__flip",
        ManaCost: 40,
      },
      {
        Name: "Tail Swipe",
        Damage: 45,
        Animation: "animate__lightSpeedIn",
        ManaCost: 45,
      },
      {
        Name: "Dragon Roar", // Special Attack
        Damage: 90, // Higher total damage
        Animation: "animate__fadeIn",
        ManaCost: 90, // Adjusted ManaCost
      },
    ],
    Image: "./images/Dragon.png",
  },
];
let PenergyOne = 0;
let PenergyTwo = 0;
let playeroneAttack;
let playertwoAttack;
let playerfirst = null;
let playersecond = null;
let participants = [];
let copyparticipants;
let isplayerone = true;
let playerSliderValue = 0;
let enemySliderValue = 0;
let previouslyClickedImage = null;

let playerOneWin = 0;
let playerTwoWin = 0;

for (var i = 0; i < 10; i++) {
  let characterimg = document.createElement("img");
  characterimg.src = originalcharacter[i].Image;
  characterimg.id = i;
  characterSelection__images.appendChild(characterimg);

  characterimg.addEventListener("click", () => {
    if (previouslyClickedImage) {
      previouslyClickedImage.style.border = "";
    }
    if (isplayerone) {
      playerOne(characterimg.id);
      characterimg.style.border = "4px solid blue";
    } else {
      playerTwo(characterimg.id);
      characterimg.style.border = "4px solid red";
    }

    previouslyClickedImage = characterimg;
  });
}

function playerOne(i) {
  PlayerOneSelected.src = originalcharacter[i].Image;
  playerfirst = originalcharacter[i];
  playerOneSelectButton.addEventListener("click", () => {
    participants.push(playerfirst);
    console.log(participants);
    isplayerone = false;
    playerOneSelectButton.disabled = true;
    playerOneSupperAttacksContainerImage.src = originalcharacter[i].Image;
    playerOneSupperAttacksContainerImage.style.display = "none";
  });
}

function playerTwo(i) {
  console.log(i);
  playersecond = originalcharacter[i];

  playerTwoSelected.src = playersecond.Image;

  playerTwoSelectButton.addEventListener("click", () => {
    participants.push(playersecond);

    characterSelection__container.style.filter = "blur(10px)";
    StarGame.style.display = "block";
    playerTwoSupperAttacksContainerImage.src = playersecond.Image;
    playerTwoSupperAttacksContainerImage.style.display = "none";
  });
}

StarGame.addEventListener("click", () => {
  characterSelection.style.display = "none";
  battleArea.style.display = "grid";
  battleAreaPlayerOne();
  battleAreaPlayerTwo();
  backgroundAudio.volume = 0.6;
  copyparticipants = JSON.parse(JSON.stringify(participants));

  console.log(copyparticipants);
});

function battleAreaPlayerOne() {
  BattleAreaPlayerOneImage.src = playerfirst.Image;

  for (var i = 0; i < playerfirst.Attacks.length; i++) {
    playeroneAttack = document.createElement("button");
    playeroneAttack.id = i;
    playeroneAttack.innerHTML = `${playerfirst.Attacks[i].Name}| Damage: ${playerfirst.Attacks[i].Damage} | Manacost: ${playerfirst.Attacks[i].ManaCost} `;
    playerOneAttacksContainer.appendChild(playeroneAttack);
  }

  playerNamePlaceholder.innerHTML = playerfirst.Name;
  PlayerOneHealth.max = playerfirst.Health;
  PlayerOneHealth.value = playerfirst.Health;
  PlayerOneMana.min = 0;
  PlayerOneMana.max = playerfirst.Mana;
  PlayerOneMana.value = playerfirst.Mana;
  PlayerOneenergybar.min = 0;

  playerSlider.style.setProperty(
    "--backgroundimage",
    `url(${playerfirst.Image})`
  );

  console.log(PlayerOneHealth.value);
  console.log(PlayerOneMana.value);
  console.log(
    `Player one: ${playerfirst.Name} || Health ${playerfirst.Health}`
  );
}

function battleAreaPlayerTwo() {
  BattleAreaPlayerTwoImage.src = playersecond.Image;

  for (var i = 0; i < playersecond.Attacks.length; i++) {
    playertwoAttack = document.createElement("button");
    playertwoAttack.id = i;
    playertwoAttack.innerHTML = `${playersecond.Attacks[i].Name}| Damage: ${playersecond.Attacks[i].Damage} | Manacost: ${playersecond.Attacks[i].ManaCost} `;
    playerTwoAttacksContainer.appendChild(playertwoAttack);
  }

  PlayerTwoHealth.max = playersecond.Health;
  PlayerTwoHealth.value = playersecond.Health;
  EnemyNamePlaceholder.innerHTML = playersecond.Name;
  PlayerTwoMana.min = 0;
  PlayerTwoMana.max = playersecond.Mana;
  PlayerTwoMana.value = playersecond.Mana;
  PlayerTwoenergybar.min = 0;

  console.log(PlayerTwoHealth.value);
  console.log(PlayerTwoMana.value);

  enemySlider.style.setProperty(
    "--backgroundimage",
    `url(${playersecond.Image})`
  );

  console.log(
    `Player two: ${playersecond.Name} || Health ${playersecond.Health}`
  );
}

const randomEnergy = Randomizer(10, 30);
const RandomManaRegen = Randomizer(20, 30);

playerOneAttacksContainer.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "BUTTON") {
    const buttonId = Number(event.target.id);

    if (playersecond.Health > 0) {
      const damage = playerfirst.Attacks[buttonId].Damage;
      playersecond.Health -= damage;
      playerfirst.Mana -= playerfirst.Attacks[buttonId].ManaCost;
      playerOneAttacksContainer.style.display = "none";
      raceMeter.style.display = "block";

      PenergyOne += randomEnergy;

      PlayerOneMana.value = playerfirst.Mana;
      PlayerTwoHealth.value = playersecond.Health;
      PlayerOneenergybar.value = PenergyOne;

      BattleAreaPlayerOneImage.classList.add(
        playerfirst.Attacks[buttonId].Animation
      );

      if (buttonId === 3) {
        playAttackAudio.volume = 1;
        playreactionAudio.volume = 0.1;
        playerOneSupperAttacksContainerImage.style.display = "block";
        battleArea.style.backgroundImage = `url("${playerfirst.Attacks[buttonId].video}")`;
        playAttackAudio.src = playerfirst.Attacks[buttonId].Audio;
        playreactionAudio.src = "./images/reaction.m4a";

        setTimeout(() => {
          playerOneSupperAttacksContainerImage.style.display = "none";
          battleArea.style.backgroundImage = "url('./images/battlearea1.gif')";
          playAttackAudio.pause(); // Use pause() to stop the audio
          playreactionAudio.pause(); // Use pause() to stop the
        }, 3000);

        PenergyOne = 0;
        PlayerOneenergybar.value = 0;
        playerOneAttacks[3].disabled = true;
      }

      BattleAreaPlayerOneImage.addEventListener("animationend", function () {
        BattleAreaPlayerOneImage.classList.remove(
          playerfirst.Attacks[0].Animation,
          playerfirst.Attacks[1].Animation,
          playerfirst.Attacks[2].Animation,
          playerfirst.Attacks[3].Animation
        );
      });
    }
    if (playersecond.Health <= 0) {
      setTimeout(() => {
        checkForRoundEnd();
      }, 3000);
    }

    if (
      PlayerOneenergybar.value >= 100 &&
      playerfirst.Attacks[buttonId].ManaCost <= PlayerOneMana.value
    ) {
      playerOneAttacks[3].disabled = false;
    }

    console.log(PlayerOneHealth.value);
    console.log(PlayerOneMana.value);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`playerTwo Mana:${PlayerTwoMana.value}`);

    playBtn.disabled = false;
  }
});

playerTwoAttacksContainer.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "BUTTON") {
    const buttonId = Number(event.target.id);

    PenergyTwo += randomEnergy;
    if (playerfirst.Health > 0) {
      const damage = playersecond.Attacks[buttonId].Damage;
      playerfirst.Health -= damage;
      playersecond.Mana -= playersecond.Attacks[buttonId].ManaCost;
      playerTwoAttacksContainer.style.display = "none";
      raceMeter.style.display = "block";

      PlayerTwoMana.value = playersecond.Mana;
      PlayerOneHealth.value = playerfirst.Health;
      PlayerTwoenergybar.value = PenergyTwo;
      const healthInfo = `Player one: ${playerfirst.Name} || Health ${playerfirst.Health}`;

      BattleAreaPlayerTwoImage.classList.add(
        playersecond.Attacks[buttonId].Animation
      );

      if (buttonId === 3) {
        playerTwoSupperAttacksContainerImage.style.display = "block";
        battleArea.style.backgroundImage = `url("${playersecond.Attacks[buttonId].video}`;
        playAttackAudio.src = playersecond.Attacks[buttonId].Audio;
        playreactionAudio.src = "./images/reaction.m4a";

        setTimeout(() => {
          playerTwoSupperAttacksContainerImage.style.display = "none";
          battleArea.style.backgroundImage = "url('./images/battlearea1.gif')";
          playAttackAudio.pause();
          playreactionAudio.pause();
        }, 3000);

        PenergyTwo = 0;
        PlayerTwoenergybar.value = 0;
        playerTwoAttacks[3].disabled = true;
      }

      if (PlayerTwoenergybar.value >= 100) {
        playerTwoAttacks[3].disabled = false;
      }

      BattleAreaPlayerTwoImage.addEventListener("animationend", function () {
        BattleAreaPlayerTwoImage.classList.remove(
          playersecond.Attacks[0].Animation,
          playersecond.Attacks[1].Animation,
          playersecond.Attacks[2].Animation,
          playersecond.Attacks[3].Animation
        );
      });
      console.log(healthInfo);
    }

    if (playerfirst.Health <= 0) {
      setTimeout(() => {
        checkForRoundEnd();
      }, 3000);
    }

    console.log(PlayerTwoHealth.value);
    console.log(PlayerTwoMana.value);

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(`playerOne Mana:${PlayerOneMana.value}`);

    playBtn.disabled = false;
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

      if (PlayerOneMana.value <= 0) {
        for (var i in playerOneAttacks) {
          playerOneAttacks[i].disabled = true;
        }
        PlayerOneMana.value = 0;
        playBtn.disabled = false;
        raceMeter.style.display = "block";
      } else {
        for (var i in playerOneAttacks) {
          playerOneAttacks[i].disabled = false;

          if (PlayerOneenergybar.value <= 99) {
            playerOneAttacks[3].disabled = true;
          }
        }
      }
      playersecond.Mana += RandomManaRegen;
      PlayerTwoMana.value = playersecond.Mana;

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

      if (PlayerTwoMana.value <= 0) {
        for (var i in playerTwoAttacks) {
          playerTwoAttacks[i].disabled = true;
        }
        playBtn.disabled = false;
        raceMeter.style.display = "block";
        PlayerTwoMana.value = 0;
      } else {
        for (var i in playerTwoAttacks) {
          playerTwoAttacks[i].disabled = false;
          if (PlayerTwoenergybar.value <= 99) {
            playerTwoAttacks[3].disabled = true;
          }
        }
      }
      playerfirst.Mana += RandomManaRegen;
      PlayerOneMana.value = playerfirst.Mana;

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

  playBtn.disabled = true;
  playerOneAttacksContainer.style.display = "none";
  playerTwoAttacksContainer.style.display = "none";
  playerReachedEnd = false;
  enemyReachedEnd = false;
  animatePlayerSlider();
  animateEnemySlider();
});

function resetRound() {
  // Reset player health, mana, and other round-specific values here.

  // Reset player data to the values stored in copyparticipants
  participants[0].Health = copyparticipants[0].Health;
  participants[0].Mana = copyparticipants[0].Mana;
  participants[1].Health = copyparticipants[1].Health;
  participants[1].Mana = copyparticipants[1].Mana;

  // Update the displayed values
  PlayerOneHealth.value = participants[0].Health;
  PlayerOneMana.value = participants[0].Mana;
  PlayerOneenergybar.value = 0;
  PlayerTwoHealth.value = participants[1].Health;
  PlayerTwoMana.value = participants[1].Mana;
  PlayerTwoenergybar.value = 0;

  // Clear any remaining animation classes.
  BattleAreaPlayerOneImage.className = "BattleAreaPlayerOne";
  BattleAreaPlayerTwoImage.className = "BattleAreaPlayerTwo";

  // Reset the sliders, buttons, and other round-specific elements.
  playerSliderValue = 0;
  enemySliderValue = 0;
  playerSlider.value = playerSliderValue;
  enemySlider.value = enemySliderValue;

  for (const attack of playerOneAttacks) {
    attack.disabled = false;
  }
  for (const attack of playerTwoAttacks) {
    attack.disabled = false;
  }

  playBtn.disabled = false;
}

function checkForRoundEnd() {
  if (playerfirst.Health <= 0 || playersecond.Health <= 0) {
    if (playerfirst.Health <= 0) {
      playerTwoWin++;
      P2wincount[playerTwoWin - 1].style.display = "block";
    } else {
      playerOneWin++;
      Pwincount[playerOneWin - 1].style.display = "block";
    }
    if (playerOneWin === 2 || playerTwoWin === 2) {
      endGame();
    } else {
      resetRound();
    }
  }
}

function endGame() {
  if (playerOneWin === 2) {
    alert("Player one wins the best of 3!");
  } else {
    alert("Player two wins the best of 3!");
  }
}
