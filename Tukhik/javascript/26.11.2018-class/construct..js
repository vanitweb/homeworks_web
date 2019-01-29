//Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, 
//fakultet->ambion,lsaran, dekanat->dekan ashxatoxner 
//constructiv
function Institut(fakultet, name, gradaran) {
		this.fakultet = fakultet;
		this.name = name;
		this.gradaran = gradaran;
}
function Facultet(fakultet, name, gradaran, ambion, lesson, dekanat) {
		Institut.call(this, fakultet, name, gradaran);
		this.ambion = ambion;
		this.lesson = lesson;
		this.dekanat = dekanat;
} 
Facultet.prototype = Object.create(Institut.prototype);
Facultet.prototype.constructor = Facultet;

function Dekanat(fakultet, name, gradaran, ambion, lesson, dekanat, dekan, assistent) {
	Facultet.call(this, fakultet, name, gradaran, ambion, lesson, dekanat);
	this.dekan = dekan;
	this.assistent = assistent;
}
Dekanat.prototype = Object.create(Facultet.prototype);
Dekanat.prototype.constructor = Dekanat;

const institut = new Institut('fizmat', 'VPH', 'MatGradaran');
const fakultet = new Facultet('fizmat', 'VPH', 'MatGradaran', 'matanalis', 'matem', 'Fizika');
const dekanat = new Dekanat('fizmat', 'VPH', 'MatGradaran', 'matanalis', 'matem', 'Fizika', 'Grigoryan', 'Sargsyan');
console.log(institut);
console.log(fakultet);
console.log(dekanat);