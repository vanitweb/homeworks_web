//Գրել 3 տիպ`  Person, Developer, JSDeveloper, ժառանգել հետևյալ կերպ Person <- Developer <- JSDeveloper:Երեք տիպում էլ ունենալ printInfo մեթոդ, որի մեջ կանչել ծնողի printInfo մեթոդը և տպել միայն այդ տիպին բնորոշ հատկությունները։

function Person(name, surname) {
	this.name = name;
	this.surname = surname;
}
Person.prototype.printInfo = function(){
	return this.name + ' ' + this.surname;
};


function Developer(name, surname, education) {
	Person.call(this, name, surname, education);
	this.education = education;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.printInfo = function(){
	return this.education;
};


function JSDeveloper(name, surname, education, career){
	Developer.call(this, name, surname, education, career);
	this.career = career;
}
JSDeveloper.prototype = Object.create(Developer.prototype);
JSDeveloper.prototype.constructor = JSDeveloper;
JSDeveloper.prototype.printInfo = function(){
	return this.career;
};

let person = new Person('Anna', 'Sargsyan');
let developer = new Developer('Aram', 'Ghazaryan', 'Developer');
let jsdeveloper = new JSDeveloper('Elen', 'Sahakyan', 'Informatics', 5);


console.log(person.printInfo());
console.log(developer.printInfo());
console.log(jsdeveloper.printInfo());

console.log(person);
console.log(developer);
console.log(jsdeveloper);




