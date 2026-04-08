const Animal = require("./Animal.js")

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species); // calls the parent constructor
    this.furColor = furColor;
  }

  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  }
}

module.exports = Mammal;