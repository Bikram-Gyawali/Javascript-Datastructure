// Create two classes: Animal and Dog. The Animal class should take two parameters in the
// constructor (name and animalType). Set them as its public properties.
// In addition, the Animal class should have two functions: sayName and sayAnimalType.
// sayName prints name, and sayAnimalType prints animalType initialized in the constructor.
// Finally, the Dog class inherits from the Animal class.

function Animal(name, animalType) {
  this.name = name;
  this.animalType = animalType;
  this.sayName = () => {
    console.log(this.name);
  };
  this.getType = () => {
    console.log(this.animalType);
  };
}

function Dog(name) {
  Animal.call(this, name, "Dog");
}
Dog.prototype = Object.create(Animal.prototype);
var myAnimal = new Animal("keo", "ninja");
myAnimal.sayName(); //keo
myAnimal.getType(); //ninja
var myDog = new Dog("sisimanu", "dog");
myDog.sayName(); //sisimanu
myDog.getType(); //dog
