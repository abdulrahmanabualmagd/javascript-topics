// Prototype-Based Inheritance

const proto = {
    name: "Ahmed",
    age: 25,
    showDetails: function (){
        console.log(`name: ${this.name} age: ${this.age}`)
    }
};
const createObj = Object.create(proto);

createObj.showDetails();
