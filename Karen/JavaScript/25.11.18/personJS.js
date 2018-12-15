class Person {
	constructor(name, surname, age) {
		this.name = name;
		this.surname = surname;
		this.age = age; 
	}
	get print() {
		return console.log(this.name, this.surname, this.age);
	}
}
class Developer extends Person {
	constructor(prof) {
		super();
		this.prof = prof;
	}
	get print() {
		return console.log(this.prof);
	}
}
class JSDeveloper extends Developer {
	constructor(spec) {
		super();
		this.spec = spec;
	}
	get print() {
		return console.log(this.spec);
	}
}

let jsdeveloper = new JSDeveloper('JavaScript');
jsdeveloper.print;
new Person('Karen', 'Manukyan', 26).print;