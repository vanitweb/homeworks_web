//Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, 
//fakultet->ambion,lsaran, dekanat->dekan ashxatoxner 
class Institut {
	constructor(facultet, name, gradaran) {
		this.facultet = facultet;
		this.name = name;
		this.gradaran = gradaran;
	}
}
class Facultet extends Institut {
	constructor (ambion, lesson, dekanat) {
		super('fizmat', 'VPH', 'MatGradaran');
		this.ambion = ambion;
		this.lesson = lesson;
		this.dekanat = dekanat;
	}
} 
class Dekanat extends Facultet {
	constructor (dekan, assistent){
	super('matanalis', 'matem', 'Fizika');
	this.dekan = dekan;
	this.assistent = assistent;
	}
}
const institut = new Institut('fizmat', 'VPH', 'MatGradaran');
const fakultet = new Facultet('matanalis', 'matem', 'Fizika');
const dekanat = new Dekanat('Grigoryan', 'Sargsyan');
console.log(institut);
console.log(fakultet);
console.log(dekanat);

