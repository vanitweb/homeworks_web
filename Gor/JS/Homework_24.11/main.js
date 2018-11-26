//Homeworks 24.11.2018
//Homework: Գրել 3 տիպ` Person, Developer, JSDeveloper, ժառանգել հետևյալ կերպ Person <- Developer <- JSDeveloper: Երեք տիպում էլ ունենալ printInfo մեթոդ, որի մեջ կանչել ծնողի printInfo մեթոդը և տպել միայն այդ տիպին բնորոշ հատկությունները։
function Person(name, surname, age, username, password) {
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.username = username;
	this.password = password;
	this. printInfo = function() {
		return `Person info: ${name} ${surname} ${age} years old...`;
	}
}
let person = new Person('Gor', 'Manukyan', 25, 'gorman93', 'gor93');
console.log(person.printInfo());
function Developer(name, surname, age, username, password) {
	Person.call(this, name, surname, age, username, password);
	this.category = 'Developer';
	this.printInfo = function() {
		return `Person info: ${name} ${surname} ${age} years old..., staff: ${this.category}`;
	}
}
let developer = new Developer('Gor', 'Manukyan', 25, 'gorman93', 'gor93');
console.log(developer.printInfo());
function JsDeveloper(name, surname, age, username, password) {
	Developer.call(this, name, surname, age, username, password);
	this.category = 'JsDeveloper';
	this.printInfo = function() {
		return `Person info: ${name} ${surname} ${age} years old..., work type: ${this.category}, staff: ${this.category}`;
	}
}
let jsDeveloper = new JsDeveloper('Gor', 'Manukyan', 25, 'gorman93', 'gor93');
console.log(jsDeveloper.printInfo());