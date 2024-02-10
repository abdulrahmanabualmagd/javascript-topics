class Animal {
  speak() {
    console.log("Animal speaks.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks.");
  }
}

const animal = new Animal();
const dog = new Dog();

animal.speak(); // Output: Animal speaks.
dog.speak(); // Output: Dog barks.
