class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.attackType = this.getAttackType();
  }

  getAttackType() {
    switch (this.type) {
      case "mago":
        return "magia";
      case "ninja":
        return "shuriken";
      case "monge":
        return "artes marciais";
      case "guerreiro":
        return "espada";
      default:
        return "inválido";
    }
  }

  attack() {
    if (["mago", "ninja", "monge", "guerreiro"].includes(this.type)) {
      return `O ${this.name} atacou usando ${this.attackType}`;
    }
    return `O ${this.name} não pode atacar!`;
  }
}

function test(heroClass) {
  for (let i = 0; i < heroClass.length; i++) {
    let champion = new Hero("test", 0, heroClass[i]);
    console.log(champion.attack());
  }
}

test(["mago", "guerreiro", "ninja", "monge", "bandido"]);
