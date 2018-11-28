



class Institut {
	constructor(facultet, name, gradaran) {
		this.facultet = facultet;
		this.name = name;
		this.gradaran = gradaran;
	}
}
class Facultet extends Institut {
	constructor (ambion, lesson, dekanat) {
		// this.ambion = ambion;
		// this.lesson = lesson;
		// this.dekanat = dekanat;
		console.log(this.facultet + ' ' + this.name );
	}
} 
class Dekanat extends Facultet {
	constructor (){
		super(ambion, lesson, dekanat);
	this.dekan = dekan;
	this.assistent = assistent;
		let prop = object.getOwnPropertyNames(Institut);
		console.log(prop);
	}
}
let institut = new Institut();
let facultet = new Facultet()
institut.complete();

console.log(Institut);
console.log(facultet);
