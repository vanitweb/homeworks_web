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
console.log(person);

function Developer(name, surname, language) {
    Person.call(this, name, surname, language);
    this.language = language;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

let developer = new Developer('Hrant', 'Hakobyan', 'English');
console.log(developer);

function JSDeveloper(name, surname, language, profession) {
    Developer.call(this, name, surname, language, profession);
    this.profession = profession;
}
JSDeveloper.prototype = Object.create(Developer.prototype);
JSDeveloper.prototype.constructor = JSDeveloper;

let jsDeveloper = new JSDeveloper('Vahan', 'Yeghyan', 'French', 'programmer');
console.log(jsDeveloper);