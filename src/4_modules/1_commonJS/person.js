// Note: to use ecmaScript module you have to set the type in the package.json ["type" : "commonjs"] or delete it
class Person{
    constructor(name){
        this.name = name;
    }
}

const p = new Person('Ahemd');

module.exports = {
    Person,
    p
}