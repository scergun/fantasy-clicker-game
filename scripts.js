document.addEventListener("DOMContentLoaded", function () {
  const moneyDOM = document.querySelector("#money");
  const dpcDOM = document.querySelector("#dpc");
  const dpsDOM = document.querySelector("#dps");
  const healthDOM = document.querySelector("#health");
  const btnUpgradeDOM = document.querySelectorAll(".upgrade");
  const btnHireDOM = document.querySelector("#hire");
  const costDOM = document.querySelector("#cost");
  const enemyHpDOM = document.querySelector("#enemy-pwr");
  const enemyMnyDOM = document.querySelector("#enemy-mny");
  const enemyPortraitDOM = document.querySelector(".enemy-portrait");
  const playerBoardDOM = document.querySelector(".player-portrait");
  const enemyLvlDOM = document.querySelector(".level");
  const lvlProgressDOM = document.querySelector("#lvl-progress");
  const monsterNameDOM = document.querySelector(".monster-name");
  const mapNameDOM = document.querySelector(".area");
  const containerDOM = document.querySelector(".container");
  const enemyPortraitImgDOM = document.querySelector(".monster-img");
  const btnDarkDOM = document.querySelector("#dark");

  let player = {
    name: "",
    dpc: 0,
    base_dpc: 1,
    dps: 0,
    money: 1,
    currentLevel: 1,
    world: 1,
  };

  let heroes = [
    {
      id: 0,
      title: "Xander",
      lvl: 1,
      dpc: 2,
      dps: 1,
      upgradeCost: 10,
      hireCost: 10,
      isActive: false,
      photo: "b",
      img: "img/hero1.png",
      moneyCost: "",
    },
    {
      id: 1,
      title: "Kassandre",
      lvl: 1,
      dpc: 3,
      dps: 1,
      upgradeCost: 52,
      hireCost: 34,
      isActive: false,
      photo: "b",
      img: "img/hero2.png",
    },

    {
      id: 2,
      title: "Leatrix",
      lvl: 1,
      dpc: 4,
      dps: 1.5,
      upgradeCost: 52,
      hireCost: 134,
      isActive: false,
      photo: "b",
      img: "img/hero3.png",
    },
    {
      id: 3,
      title: "Hector",
      lvl: 1,
      dpc: 5,
      dps: 1,
      upgradeCost: 52,
      hireCost: 134,
      isActive: false,
      photo: "b",
      img: "img/hero4.png",
    },
    {
      id: 4,
      title: "Zivael",
      lvl: 1,
      dpc: 6,
      dps: 1,
      upgradeCost: 52,
      hireCost: 134,
      isActive: false,
      photo: "b",
      img: "img/hero5.png",
    },
  ];

  let enemy = {
    hp: 10,
    money: 1,
    total_hp: 10,
    level: 0,
  };

  let enemyArr = [
    [
      {
        id: 0,
        title: "Lone Wolf",
        img: "img/w1-enemy/normals/lone-wolf.png",
      },
      {
        id: 1,
        title: "Young Gorilla",
        img: "img/w1-enemy/normals/young-gorilla.png",
      },
      {
        id: 2,
        title: "Hungry Eagle",
        img: "img/w1-enemy/normals/hungry-eagle.png",
      },
      {
        id: 3,
        title: "Forest Thing",
        img: "img/w1-enemy/normals/forest-thing.png",
      },
      {
        id: 4,
        title: "Another Forest Thing",
        img: "img/w1-enemy/normals/another-forest-thing.png",
      },

      {
        id: 6,
        title: "Metal Gorilla",
        img: "img/w1-enemy/normals/metal-gorilla.png",
      },
      {
        id: 7,
        title: "Young Bearit",
        img: "img/w1-enemy/normals/young-bearit.png",
      },
      {
        id: 8,
        title: "Another Young Bearit",
        img: "img/w1-enemy/normals/another-young-bearit.png",
      },
      {
        id: 9,
        title: "Bearit Bandit",
        img: "img/w1-enemy/normals/bearit-bandit.png",
      },
      {
        id: 10,
        title: "Bearit Gang",
        img: "img/w1-enemy/normals/bearit-gang.png",
      },
      {
        id: 11,
        title: "Beardy Wolfie",
        img: "img/w1-enemy/normals/beardy-wolfie.png",
      },
      {
        id: 12,
        title: "Bulky Bearit",
        img: "img/w1-enemy/normals/bulky-bearit.png",
      },
      {
        id: 13,
        title: "Young Tigrit",
        img: "img/w1-enemy/normals/young-tigrit.png",
      },
      {
        id: 14,
        title: "Brave Tigrit",
        img: "img/w1-enemy/normals/brave-tigrit.png",
      },
      {
        id: 24,
        title: "Big Bearit Gang",
        img: "img/w1-enemy/normals/the-bearit-gang.png",
      },

      {
        id: 16,
        title: "Tigrit Swordsman Apprentice",
        img: "img/w1-enemy/normals/tigrit-swordsman-apprentice.png",
      },

      {
        id: 18,
        title: "Mutated Bearit",
        img: "img/w1-enemy/normals/mutated-bearit.png",
      },

      {
        id: 20,
        title: "Tweetan Noble",
        img: "img/w1-enemy/normals/tweetan-noble.png",
      },
      {
        id: 21,
        title: "Gorila Trainer",
        img: "img/w1-enemy/normals/gorilla-trainer.png",
      },
      {
        id: 22,
        title: "The Tigris",
        img: "img/w1-enemy/normals/the-tigris.png",
      },
      {
        id: 25,
        title: "Wizard Bird",
        img: "img/w1-enemy/normals/magic-bird.png",
      },
      {
        id: 5,
        title: "Adult Gorilla",
        img: "img/w1-enemy/normals/adult-gorilla.png",
      },
      {
        id: 26,
        title: "Gorilla Trainer's Pack",
        img: "img/w1-enemy/normals/gorilla-trainers-pack.png",
      },
      {
        id: 23,
        title: "Tweetan General",
        img: "img/w1-enemy/normals/tweetan-general.png",
      },
      {
        id: 19,
        title: "Tigrit Swordsman",
        img: "img/w1-enemy/normals/tigrit-swordsman.png",
      },
      {
        id: 17,
        title: "Tigrit Spearman",
        img: "img/w1-enemy/normals/tigrit-spearman.png",
      },
      {
        title: "Tweetan Squad",
        img: "img/w1-enemy/normals/tweetan-squad.png",
      },
      {
        id: 15,
        title: "Froggy Bearit",
        img: "img/w1-enemy/normals/froggy-bearit.png",
      },
      {
        id: 15,
        title: "Freaks",
        img: "img/w1-enemy/normals/freaks.png",
      },
    ],
    [
      {
        id: 0,
        title: "Tortured Lone Wolf",
        img: "img/w1-enemy/tortureds/tortured-lone-wolf.png",
      },
      {
        id: 1,
        title: "Tortured Young Gorilla",
        img: "img/w1-enemy/tortureds/tortured-young-gorilla.png",
      },
      {
        id: 2,
        title: "Tortured Hungry Eagle",
        img: "img/w1-enemy/tortureds/tortured-hungry-eagle.png",
      },
      {
        id: 3,
        title: "Tortured Forest Thing",
        img: "img/w1-enemy/tortureds/tortured-forest-thing.png",
      },
      {
        id: 4,
        title: "Tortured Another Forest Thing",
        img: "img/w1-enemy/tortureds/tortured-another-forest-thing.png",
      },

      {
        id: 6,
        title: "Tortured Metal Gorilla",
        img: "img/w1-enemy/tortureds/tortured-metal-gorilla.png",
      },
      {
        id: 7,
        title: "Tortured Young Bearit",
        img: "img/w1-enemy/tortureds/tortured-young-bearit.png",
      },
      {
        id: 8,
        title: "Tortured Another Young Bearit",
        img: "img/w1-enemy/tortureds/tortured-another-young-bearit.png",
      },
      {
        id: 9,
        title: "Tortured Bearit Bandit",
        img: "img/w1-enemy/tortureds/tortured-bearit-bandit.png",
      },
      {
        id: 11,
        title: "Tortured Beardy Wolfie",
        img: "img/w1-enemy/tortureds/tortured-beardy-wolfie.png",
      },
      {
        id: 12,
        title: "Tortured Bulky Bearit",
        img: "img/w1-enemy/tortureds/tortured-bulky-bearit.png",
      },
      {
        id: 13,
        title: "Tortured Young Tigrit",
        img: "img/w1-enemy/tortureds/tortured-young-tigrit.png",
      },
      {
        id: 14,
        title: "Tortured Brave Tigrit",
        img: "img/w1-enemy/tortureds/tortured-brave-tigrit.png",
      },
      {
        id: 24,
        title: "Tortured Big Bearit Gang",
        img: "img/w1-enemy/tortureds/tortured-the-bearit-gang.png",
      },

      {
        id: 16,
        title: "Tortured Tigrit Swordsman Apprentice",
        img: "img/w1-enemy/tortureds/tortured-tigrit-swordsman-apprentice.png",
      },

      {
        id: 18,
        title: "Tortured Mutated Bearit",
        img: "img/w1-enemy/tortureds/tortured-mutated-bearit.png",
      },

      {
        id: 20,
        title: "Tortured Tweetan Noble",
        img: "img/w1-enemy/tortureds/tortured-tweetan-noble.png",
      },
      {
        id: 21,
        title: "Tortured Gorila Trainer",
        img: "img/w1-enemy/tortureds/tortured-gorilla-trainer.png",
      },
      {
        id: 22,
        title: "Tortured The Tigris",
        img: "img/w1-enemy/tortureds/tortured-the-tigris.png",
      },
      {
        id: 24,
        title: "Tortured Bearit Gang",
        img: "img/w1-enemy/tortureds/tortured-bearit-gang.png",
      },
      {
        id: 25,
        title: "Tortured Wizard Bird",
        img: "img/w1-enemy/tortureds/tortured-magic-bird.png",
      },
      {
        id: 5,
        title: "Tortured Adult Gorilla",
        img: "img/w1-enemy/tortureds/tortured-adult-gorilla.png",
      },
      {
        id: 1,
        title: "Tortured Alpha Gorilla",
        img: "img/w1-enemy/tortureds/tortured-alpha-gorilla.png",
      },
      {
        id: 23,
        title: "Tortured Tweetan General",
        img: "img/w1-enemy/tortureds/tortured-tweetan-general.png",
      },
      {
        id: 19,
        title: "Tortured Tigrit Swordsman",
        img: "img/w1-enemy/tortureds/tortured-tigrit-swordsman.png",
      },
      {
        id: 17,
        title: "Tortured Tigrit Spearman",
        img: "img/w1-enemy/tortureds/tortured-tigrit-spearman.png",
      },
      {
        title: "Tortured Tweetan Squad",
        img: "img/w1-enemy/tortureds/tortured-tweetan-squad.png",
      },
      {
        id: 15,
        title: "Tortured Froggy Bearit",
        img: "img/w1-enemy/tortureds/tortured-froggy-bearit.png",
      },
      {
        id: 2,
        title: "Tortured Tortured Army of Tigrits",
        img: "img/w1-enemy/tortureds/tortured-army-of-tigrits.png",
      },
    ],
  ];

  let enemyBossArr = [
    {
      id: 1,
      title: "Alpha Gorilla",
      img: "img/w1-enemy/normals/alpha-gorilla.png",
    },
    {
      id: 2,
      title: "Army of Tigrits",
      img: "img/w1-enemy/normals/army-of-tigrits.png",
    },
    {
      id: 3,
      title: "Tortured Gorilla Trainer's Pack",
      img: "img/w1-enemy/tortureds/tortured-gorilla-trainers-pack.png",
    },
    {
      id: 4,
      title: "Tortured Freaks",
      img: "img/w1-enemy/tortureds/tortured-freaks.png",
    },
  ];

  let worlds = [
    {
      title: "world-1",
      mapName: "Green Forest",
    },
    {
      title: "world-2",
      mapName: "Burning Belaniel Woods",
    },
    {
      title: "world-3",
      mapName: "Reptillian Swamp",
    },
  ];

  let activeHeroes = heroes.filter((f) => f.isActive === true);
  let activeHeroesArr = heroes.slice(0, activeHeroes.length);
  let newHeroes = heroes.slice(0, activeHeroes.length + 1).reverse();
  let enemyCounter = 0;
  let bossCounter = 0;
  function bossFunc() {
    bossCounter = enemyCounter / 5 - 1;
  }

  function enemyHandler() {
    function enemyImg() {
      let enemyCycle = enemyCounter % 29;
      bossFunc();
      if (player.currentLevel % 5 === 0 && enemy.level != 1) {
        enemyPortraitImgDOM.src = `${
          enemyBossArr[player.currentLevel / 5 - 1].img
        }`;
        monsterNameDOM.innerHTML =
          enemyBossArr[player.currentLevel / 5 - 1].title;
      } else {
        if (enemyCycle === 29) {
          enemyCycle = 0;
        }
        enemyPortraitImgDOM.src = `${
          enemyArr[player.world - 1][enemyCycle].img
        }`;
        monsterNameDOM.innerHTML = enemyArr[player.world - 1][enemyCycle].title;
      }
    }

    if (player.currentLevel % 5 != 0 && enemy.level != 10) {
      lvlProgressDOM.innerHTML = `${enemy.level}/10`;
      document.querySelector("#boss").classList.add("boss-none");
    } else if (player.currentLevel % 5 != 0 && enemy.level === 10) {
      enemy.level = 0;
      player.currentLevel++;
      worldHandler();
      lvlProgressDOM.innerHTML = `${enemy.level}/10`;
      document.querySelector("#boss").classList.add("boss-none");
    } else if (player.currentLevel % 5 === 0 && enemy.level != 1) {
      lvlProgressDOM.innerHTML = `${enemy.level}/1`;
      document.querySelector("#boss").classList.remove("boss-none");
      bossFunc();
    } else if (player.currentLevel % 5 === 0 && enemy.level === 1) {
      enemy.level = 0;
      player.currentLevel++;
      worldHandler();
      lvlProgressDOM.innerHTML = `${enemy.level}/10`;
      document.querySelector("#boss").classList.add("boss-none");
    }
    enemyImg();
  }

  function worldHandler() {
    if (player.currentLevel % 10 === 1) {
      player.world++;
      mapNameDOM.innerHTML = worlds[player.world - 1].mapName;
      document.body.classList.add(`world-${player.world}`);
      console.log(player.world);
    }
  }

  function showDPC() {
    let totalDPC = 0;

    activeHeroesArr.forEach((hero) => {
      totalDPC += hero.dpc;
    });

    player.dpc = totalDPC + player.base_dpc;
    dpcDOM.innerHTML = nFormatter(player.dpc);
  }

  function showDPS() {
    let totalDPS = 0;

    activeHeroesArr.forEach((hero) => {
      totalDPS += hero.dps;
    });

    player.dps = totalDPS;
    dpsDOM.innerHTML = nFormatter(player.dps);
  }

  function showMoney() {
    moneyDOM.innerHTML = nFormatter(player.money);
  }

  function showLevel() {
    enemyLvlDOM.innerHTML = `LVL ${player.currentLevel} `;
  }

  function showEnemyHP() {
    enemyHpDOM.innerHTML = nFormatter(enemy.hp);
  }

  function progressHP() {
    healthDOM.value = enemy.hp;
    healthDOM.max = enemy.total_hp;
  }

  function tiltAnimation() {
    enemyPortraitImgDOM.style.animation = "tilt-n-move-shaking 0.2s infinite";
    enemyPortraitImgDOM.style.filter =
      "invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)";
    function redAnimationStop() {
      enemyPortraitImgDOM.style.filter = "";
    }
    setTimeout(redAnimationStop, 25);
  }

  function tiltAnimationStop() {
    enemyPortraitImgDOM.style.animation = "";
  }

  function giveDPC() {
    if (enemy.hp > 0) {
      tiltAnimation();
      setTimeout(tiltAnimationStop, 300);
      enemy.hp -= player.dpc;
      progressHP();
      if (enemy.hp <= 0) {
        enemy.level++;
        enemyCounter++;
        enemyHandler();
        enemy.total_hp = 10 * player.currentLevel * 1.57;
        enemy.hp = 10 * player.currentLevel * 1.57;
        player.money += enemy.money;
        enemy.money = player.currentLevel * 1.57;
        showEnemyHP();
        showMoney();
        progressHP();
        showLevel();
      }
    }
    showEnemyHP();
    showLevel();
    enemyHandler();
    showBoard2();
  }

  function giveDPS() {
    if (player.dps > 0) {
      tiltAnimation();
      setTimeout(tiltAnimationStop, 300);
    }
    enemy.hp -= player.dps;
    progressHP();
    if (enemy.hp <= 0) {
      enemy.hp = 0;
      enemy.level++;
      enemyCounter++;
      enemyHandler();
      enemy.hp = 10 * player.currentLevel * 1.57;
      enemy.total_hp = 10 * player.currentLevel * 1.57;
      player.money += enemy.money;
      enemy.money *= 3;
      showEnemyHP();
      showMoney();
      progressHP();
      showLevel();
    }
    showEnemyHP();
    showLevel();
    enemyHandler();
    showBoard2();
  }

  function showBoard2() {
    newHeroes = heroes.slice(0, activeHeroes.length + 1).reverse();
    let result = "";
    newHeroes.forEach((i) => {
      result += `
        <span class="heroes ${i.photo}">
        <img draggable="false" class="hero-img ${i.photo}" src="${
        i.img
      }" alt="">
        <div class="hero-data">
            <span class="hero-name">${i.title}</span>
            <div class="hero-meta">
                <div class="hero-container">
                    <span>level</span>
                    <span class="hero-level">${i.lvl}</span>
                </div>
                <div class="hero-container">
                    <span>DPC</span>
                    <span class="hero-dpc">${nFormatter(i.dpc)}</span>
                </div>
                <div class="hero-container">
                    <span>DPS</span>
                    <span class="hero-dps">${nFormatter(i.dps)}</span>
                </div>
            </div>
            <button type='button' data-id='${i.id}' class='${i.isActive}   ${
        player.money < i.upgradeCost ? "not-enough" : ""
      } upgrade'>-${nFormatter(i.upgradeCost)} upgrade</button>
            <button type='button' data-id='${i.id}' class='${!i.isActive} ${
        player.money < i.hireCost ? "not-enough" : ""
      } hire'>-${nFormatter(i.hireCost)} hire</button>
        </div>

    </span>`;
    });

    playerBoardDOM.innerHTML = result;
  }

  playerBoardDOM.addEventListener("click", function (e) {
    if (e.target && e.target.matches(".upgrade")) {
      const heroID = e.target.getAttribute("data-id");
      handleUpgradeClick(heroID);
    } else if (e.target && e.target.matches(".hire")) {
      const heroID = e.target.getAttribute("data-id");
      handleHireClick(heroID);
    }
  });

  function handleUpgradeClick(heroID) {
    if (player.money >= heroes[heroID].upgradeCost) {
      player.money -= heroes[heroID].upgradeCost;
      heroes[heroID].lvl++;
      heroes[heroID].dpc *= 1;
      heroes[heroID].dps *= 1.075;
      heroes[heroID].upgradeCost *= 1.075;
      showBoard2();
      showDPC();
      showDPS();
      showMoney();
    } else {
      showBoard2();
    }
  }

  function handleHireClick(heroID) {
    if (player.money >= heroes[heroID].hireCost) {
      player.money -= heroes[heroID].hireCost;
      heroes[heroID].isActive = true;
      heroes[heroID].photo = "b-none";
      activeHeroes.push(heroes[heroID]);
      activeHeroesArr.push(heroes[heroID]);
      showBoard2();
      showDPC();
      showDPS();
      showMoney();
    } else {
    }
  }

  function nFormatter(num) {
    const format = [
      { value: 1e36, symbol: "U" },
      { value: 1e33, symbol: "d" },
      { value: 1e30, symbol: "N" },
      { value: 1e27, symbol: "O" },
      { value: 1e24, symbol: "S" },
      { value: 1e21, symbol: "s" },
      { value: 1e18, symbol: "Q" },
      { value: 1e15, symbol: "q" },
      { value: 1e12, symbol: "T" },
      { value: 1e9, symbol: "B" },
      { value: 1e6, symbol: "M" },
      { value: 1e3, symbol: "K" },
      { value: 1, symbol: "" },
    ];
    const formatIndex = format.findIndex((data) => num >= data.value);

    return (
      (num / format[formatIndex === -1 ? 6 : formatIndex].value).toFixed(1) +
      format[formatIndex === -1 ? 6 : formatIndex].symbol
    );
  }

  enemyPortraitDOM.addEventListener("click", giveDPC);

  showMoney();
  showDPC();
  showDPS();
  showEnemyHP();
  showLevel();
  showBoard2();
  setInterval(giveDPS, 1000);
});
