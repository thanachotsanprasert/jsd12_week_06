class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; // Internal state (protected by _)
  }

  makeSound() {
    console.log(`${this.name} makes a sound...`);
  }

  eat() {
    // this._hunger = this._hunger - 10;
    // console.log(
    //   `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
    // );
    if (this._hunger <= 0) {
      console.log(`${this.name} is already full!`);
    } else {
      console.log(`${this.name} ate. Hunger is now ${this._hunger}`);
    }
  }
}

module.exports = Animal;