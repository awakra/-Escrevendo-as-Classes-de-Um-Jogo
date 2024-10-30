class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.attackType = this.getAttackType();
  }

  getAttackType() {
    switch (this.type) {
      case "mage":
        return "magic";
      case "ninja":
        return "shuriken";
      case "monk":
        return "martial arts";
      case "warrior":
        return "sword";
      default:
        return "invalid";
    }
  }

  attack() {
    if (["mage", "ninja", "monk", "warrior"].includes(this.type)) {
      return `${this.name} attacked using ${this.attackType}`;
    }
    return `${this.name} cannot attack!`;
  }
}

function test(heroClass) {
  for (let i = 0; i < heroClass.length; i++) {
    let champion = new Hero("test", 0, heroClass[i]);
    console.log(champion.attack());
  }
}

test(["mage", "warrior", "ninja", "monk", "bandit"]);
