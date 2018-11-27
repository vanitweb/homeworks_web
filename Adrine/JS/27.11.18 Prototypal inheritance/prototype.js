/*Գրել 3 տիպ`  Person, Developer, JSDeveloper, 
ժառանգել հետևյալ կերպ Person <- Developer <- JSDeveloper
Երեք տիպում էլ ունենալ printInfo մեթոդ, որի մեջ կանչել ծնողի printInfo մեթոդը և տպել միայն այդ տիպին բնորոշ հատկությունները*/
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
Person.prototype.printinfo = function() {
    return this.name + " " + this.surname;
};
let person = new Person('Aram', 'Hakobyan');
console.log(person.printinfo());

function Developer(name, surname, age) {
    Person.call(this, name, surname, age);
    this.age = age;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.printinfo = function() {
    return this.age;
};
let developer = new Developer('Hrant', 'Hakobyan', 25);
console.log(developer.printinfo());

function JSDeveloper(name, surname, age, profession) {
    Developer.call(this, name, surname, age, profession);
    this.profession = profession;
}
JSDeveloper.prototype = Object.create(Developer.prototype);
JSDeveloper.prototype.printinfo = function() {
    return this.profession;
};
let jsDeveloper = new JSDeveloper('Vahan', 'Yeghyan', 27, 'programmer');
console.log(jsDeveloper.printinfo());

console.log(person);
console.log(developer);
console.log(jsDeveloper);