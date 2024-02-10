class Car {
  // Ctor
  constructor(make) {
    this.make = make;
  }

  // Methods
  start() {
    console.log(`${this.make} is started`);
  }
}

const car = new Car("bmw");
car.start();

module.exports = {Car, car};

console.log()
