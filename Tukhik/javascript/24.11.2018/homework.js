function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.date = 10;
function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
//Food.prototype = Object.create(Product.prototype);
// or Food.prototype.__proto__ = Product;
//Food.prototype.constructor = Food;
console.log(new Food('cheese', 5));



//Գրել 3 տիպ`  Person, Developer, JSDeveloper, ժառանգել 
//հետևյալ կերպ Person <- Developer <- JSDeveloper:
//Երեք տիպում էլ ունենալ printInfo մեթոդ, որի մեջ կանչել
//ծնողի printInfo մեթոդը և տպել միայն այդ տիպին բնորոշ 
// հատկությունները։ ogtagorcel new Obj, set, get, clojure
let Person = function	(firstname, lastname, age) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.age = age;
}
Person.prototype.printinfo = function (){
	return this.firstname + " " + this.lastname + " "+ this.age;
}
let person = new Person('a', 'b', 10);
console.log(person.printinfo());

let Developer = function(firstname, lastname, age, komp) {
	Person.call(this, firstname, lastname, age);
	this.komp = komp;	
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.printinfo = function (){
	return this.komp;
}
let developer = new Developer('a', 'b', 10, 'hp');
console.log(developer.printinfo());


let JSDeveloper = function(firstname, lastname, age, komp, webEj) {
	Developer.call(this, firstname, lastname, age, komp);
	this.webEj = webEj;;	
}
JSDeveloper.prototype = Object.create(Developer.prototype);
JSDeveloper.prototype.printinfo = function (){
	return this.webEj;
}
let jsDeveloper = new JSDeveloper('a', 'b', 10, 'hp', 'gitHub');
console.log(jsDeveloper.printinfo());
