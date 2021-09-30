
class Location2d {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  describe() {
    console.log(`Location X: ${this.x} | Y: ${this.y}`);
  }
}

const SPAWN_ISLAND = new Location2d(24, 23);

class Thing {
  constructor(id = Math.floor(Math.random() * 10000), location = new Location2d()) {
    this.id = id;
    this.location = location;
  }

  describe() {
    console.log(`ID: ${this.id}`);
    this.location.describe();
  }
}

class Player extends Thing {
  constructor(name = "Player_" + Date.now()) {
    super(name, SPAWN_ISLAND);
    this.name = name;
  }

  describe() {
    super.describe();
    console.log(`Name: ${this.name}`);
  }
}


const chirag = new Player("|<r@70$");
chirag.describe();
