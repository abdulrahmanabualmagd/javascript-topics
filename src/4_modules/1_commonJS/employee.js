// Note: to use ecmaScript module you have to set the type in the package.json ["type" : "commonjs"] or delete it
const {Person, p} = require('./person')

class Employee extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  greet() {
    console.log(`${this.name}, agd: ${this.age}`);
  }
}

console.log(p);

const emp = new Employee('Abdulrahman');
emp.greet();