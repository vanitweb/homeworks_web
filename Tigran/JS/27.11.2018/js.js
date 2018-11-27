function Person(name,surname,age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
}
Person.prototype.PrintInfo = function() {              //sxal
	// console.log(Object.entries(this));
	// for(i of Object.entries(this)){
	// 	console.log(i instanceof Person);
	// }
	// Object.getOwnPropertyNames(this);
	console.log(`${this.name}, ${this.surname}, ${this.age}`);
};
function Developer(name,surname,age,work) {
	Person.call(this,name,surname,age);
	this.work = work;
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

function JSDeveloper(name,surname,age,work,ECMAVersion) {
	Developer.call(this,name,surname,age,work);
	this.ECMAVersion = ECMAVersion;
}
JSDeveloper.prototype = Object.create(Developer.prototype);

let y = new Developer(12,45,78,98);
let r = new JSDeveloper("Tigran","Qochinyan",19,"web","ECMA8");
































//jjj
