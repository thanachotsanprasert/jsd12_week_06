const Zoo = require("./Zoo.js")
const Animal = require("./Animal.js")
const Bird = require("./Bird.js")
const Mammal = require("./Mammal.js")



const myZoo = new Zoo("The JS Terminal Zoo");

// create instances of class Animal, Mammal and/or Bird
const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "Brown");

// console.log(baloo);

myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();