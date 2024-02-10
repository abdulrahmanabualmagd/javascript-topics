// Note: to use ecmaScript module you have to set the type in the package.json ["type" : "module"]
export class Person{
    constructor(name){
        this.name = name;
    }
}

export const p = new Person('Ahemd');
