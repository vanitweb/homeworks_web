function Person(name, surname, age, Id, workTitle){
	this.name = name;
	this.surname = surname;
	this.age = age;
	this.Id = Id;
	this.workTitle = workTitle;
	this. printInfo = function() {
		return `Person name is: ${name}, \nsurname: ${surname}, \nage: ${age},`;
	}
}
let newPerson = new Person('Jhon', 'Doe', 35, 2541, 'beginner');
console.log(newPerson.printInfo());

function Developer(name, surname, age, Id, workTitle) {
	Person.call(this, name, surname, age, Id, workTitle);
	this.printInfo = function() {
		return `Person name is: ${name}, \nsurname: ${surname}, \nage: ${age}, \nworkTitle: ${workTitle},`;
	}
}
let developer = new Developer('Gor', 'Manukyan', 25, 'gorman93', 'Developer');
console.log(developer.printInfo());

function JsDeveloper(name, surname, age, Id, workTitle) {
	Developer.apply(this, [name, surname, age, Id, workTitle]);//?
	this.printInfo = function() {
		return `Person name is: ${name}, \nsurname: ${surname}, \nage: ${age}, \nworkTitle: ${workTitle},`;
	}
}
let new_JS_Developer = new JsDeveloper('Ani', 'Poghosyan', 45, 65992, 'JsDeveloper');
console.log(new_JS_Developer.printInfo());