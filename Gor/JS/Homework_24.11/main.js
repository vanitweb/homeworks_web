//Homeworks 24.11.2018
//Homework: Գրել 3 տիպ` Person, Developer, JSDeveloper, ժառանգել հետևյալ կերպ Person <- Developer <- JSDeveloper: Երեք տիպում էլ ունենալ printInfo մեթոդ, որի մեջ կանչել ծնողի printInfo մեթոդը և տպել միայն այդ տիպին բնորոշ հատկությունները։
function Person(name, surname, age, username, password) {
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.username = username;
	this.password = password;
	this. printInfo = function() {
		let property = "";
		for(let item in this) {
			if(this.hasOwnProperty(item) && typeof(this[item]) !== "function") {
				property += item + ':' + this[item] + '\n';
			}	
		}
		return property;
	}
}
let person = new Person('Gor', 'Manukyan', 25, 'gorman93', 'gor93');
console.log(person.printInfo());
function Developer(name, surname, age, username, password) {
	Person.call(this, name, surname, age, username, password);
	this.workTitle = 'Developer';
	this.printInfo = function() {
		let property = "";
		for(let item in this) {
			if(this.hasOwnProperty(item) && typeof(this[item]) !== "function") {
				property += item + ':' + this[item] + '\n';
			}	
		}
		return property;
	}
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
let developer = new Developer('Edgar', 'Nikhogosyan', 32, 'edgarnik86', 'edgar86');
console.log(developer.printInfo());
function JsDeveloper(name, surname, age, username, password) {
	Developer.call(this, name, surname, age, username, password);
	this.staff = 'JsDeveloper';
	this.printInfo = function() {
		let property = "";
		for(let item in this) {
			if(this.hasOwnProperty(item) && typeof(this[item]) !== "function") {
				property += item + ':' + this[item] + '\n';
			}	
		}
		return property;
	}
}
JsDeveloper.prototype = Object.create(Developer.prototype);
JsDeveloper.prototype.constructor = JsDeveloper;
let jsDeveloper = new JsDeveloper('David', 'Manukyan', 27, 'davman91', 'dav91');
console.log(jsDeveloper.printInfo());