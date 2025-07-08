function inventory(arrInp) {
  let listAllHeroes = [];

  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  for (let hero of arrInp) {
    let currentHeroDetails = hero.split(" / ");
    let currentHeroName = currentHeroDetails.shift();
    let currentHeroLevel = currentHeroDetails.shift();
    let currentHeroItems = currentHeroDetails.shift();
    let currentHeroObject = new Hero(currentHeroName, currentHeroLevel, currentHeroItems);
    listAllHeroes.push(currentHeroObject);
  }

  listAllHeroes.sort((a,b) => a.level - b.level);

  for (let hero of listAllHeroes) {
    for (let [key, value] of Object.entries(hero)) {
      if (key == "name") {
        console.log(`Hero: ${value}`);
      }
      else {
        console.log(`${key} => ${value}`);
      }
    }
  }
}

inventory(
  [
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
  ]
);
inventory(
  [
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara'
  ]
);
