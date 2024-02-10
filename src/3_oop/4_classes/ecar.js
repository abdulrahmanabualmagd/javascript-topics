const {Car, car} = require('./car')
// extends another Class
class ECar extends Car {
  constructor(make) {
    super(make);
  }
}

console.log(car)
const item = new ECar('bmw');