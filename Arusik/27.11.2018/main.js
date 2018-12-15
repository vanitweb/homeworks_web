//Գրել 3 տիպ`  Person, Developer, JSDeveloper, ժառանգել հետևյալ կերպ Person <- Developer <- JSDeveloper:
//Երեք տիպում էլ ունենալ printInfo մեթոդ, որի մեջ կանչել ծնողի printInfo մեթոդը և տպել միայն այդ տիպին բնորոշ հատկությունները։

let persone = function() {
	this.name = 'programmers',
	this.surname = 'surname',
	printInfo = function() {
		let prop = object.getOwnPropertyNames(persone);
		console.log(prop);
	};
};
let developer = function() {
	this.degree = 'bachelor'
	printInfo = function() {
		let prop = object.getOwnPropertyNames(developer);
		console.log(prop);
	};
};
developer.prototype = new persone;
let jsdeveloper = function() {
	this.programm = 'JavaScript'
	printInfo = function() {
		let prop = object.getOwnPropertyNames(jsdeveloper);
		console.log(prop);
	};
};
jsdeveloper.prototype = new developer;
let p = new persone;
let d = new developer;
let js = new jsdeveloper;
js.name = 'jsdeveloper';
//console.log(p, d, js);
console.log(p);
console.log(d);
console.log(js);

