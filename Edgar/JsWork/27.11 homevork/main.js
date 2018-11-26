var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (унаследовано)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); 
// undefined, т.к. 'd' не наследуется от Object.prototype
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