//Homeworks 24.11.2018
//Create object with class
console.log("**********************************************************************");
class Universiti {
	constructor(univName, library) {
    	this.univName = univName;
		this.library = library;
	}
	get printInfo() {
		return `${this.univName}, books count: ${this.library}`;
	}
}
class Facultet extends Universiti {
	constructor(univName, facName) {
		super(univName);
		this.facName = facName;
	}
	get printInfo() {
		return `${this.univName}, facultet name: ${this.facName}`;
	}
}
class Ambon extends Facultet {
	constructor(univName, facName, ambName) {
		super(univName, facName);
		this.ambName = ambName;
	}
	get printInfo() {
		return `${this.univName}, facultet name: ${this.facName}, ambion name: ${this.ambName}`;
	}
}

const universiti = new Universiti('VSU', 45000);
console.log(universiti.printInfo);
const facultet = new Facultet('VSU', 'Fizmath');
console.log(facultet.printInfo);
const ambon = new Ambon('VSU', 'Fizmath', 'Matemi');
console.log(ambon.printInfo);