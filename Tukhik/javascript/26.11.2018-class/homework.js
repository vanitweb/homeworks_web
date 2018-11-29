



class Institut {
	constructor(facultet, name, gradaran) {
		this.facultet = facultet;
		this.name = name;
		this.gradaran = gradaran;
	}
}
class Facultet extends Institut {
	constructor (ambion, lesson, dekanat) {
		super();
		this.ambion = ambion;
		this.lesson = lesson;
		this.dekanat = dekanat;
	}
} 
class Dekanat extends Facultet {
	constructor (dekan, assistent){
	super();
	this.dekan = dekan;
	this.assistent = assistent;
	}
}
let institut = new Institut('fizmat', 'VPH', 'MatGradaran');
let fakultet = new Facultet('matanalis', 'matem', 'Fizika');
let dekanat = new Dekanat('Grigoryan', 'Sargsyan');
console.log(institut);
console.log(fakultet);
console.log(dekanat.dekan);