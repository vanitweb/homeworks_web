//Task.Class - Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, fakultet->ambion,lsaran, dekanat->dekan ashxatoxner ։

class Institut {
	constructor(name, gradaran) {
		this.name = name;
		this.gradaran = gradaran;
	}
}

class Fakultet extends Institut {
	constructor(name, ambion, lsaran){
		super();
		this.name = name;
		this.ambion = ambion;
		this.lsaran = lsaran;
	}
}

class Dekanat extends Fakultet {
	constructor(name, dekan) {
		super();
		this.name = name;
		this.dekan = dekan;
	}
}

class Ashxatoxner extends Dekanat {
	constructor(name, surname, rate, days, year) {
		super(); 
		this.name = name;
		this.surname = surname;
		this.year = year;
	}
	getFullName() {
		return this.name + ' ' + this.surname;
	}
	getYear(){
		return (new Date()).getFullYear() - this.year;
	}	
	getAshkhatavadz() {
		return this.rate * this.days;
	}
	setRate(rate) {
		this.rate = rate;
	}
	setDays(days) {
		this.days = days;
	}
}
let institut = new Institut('VPMI', 'lib');
let fakultet = new Fakultet('fizmat', 'matematika', 20);
let dekanat = new Dekanat('fizika ev astxagitutyun', 'Sargsyan');
let ashxatoxner = new Ashxatoxner('Vardan', 'Ghazaryan', 100);
ashxatoxner.setRate(10);
ashxatoxner.setDays(5000);
ashxatoxner.year = 2010;
console.log(ashxatoxner.getAshkhatavadz());
console.log(ashxatoxner.getFullName());
console.log(ashxatoxner.getYear());
console.log(institut);
console.log(fakultet.ambion);
console.log(dekanat.dekan);





			
				