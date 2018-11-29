//Task.constructor - Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, fakultet->ambion,lsaran, dekanat->dekan ashxatoxner 

function Institut(nameInst, gradaran) {
	this.nameInst = nameInst;
	this.gradaran = gradaran;
}

function Fakultet(nameInst, gradaran, nameFak, ambion, lsaran) {
	Institut.call(this, nameInst, gradaran);
	this.nameFak = nameFak;
	this.ambion = ambion;
	this.lsaran = lsaran;
}
Fakultet.prototype = Object.create(Institut.prototype);
Fakultet.prototype.constructor = Fakultet;

function Dekanat(nameInst, gradaran, nameFak, ambion, lsaran, nameDek, dekan) {
	Fakultet.call(this, nameInst, gradaran, nameFak, ambion, lsaran);
	this.nameDek = nameDek;
	this.dekan = dekan;	
}
Dekanat.prototype = Object.create(Fakultet.prototype);
Dekanat.prototype.constructor = Dekanat;

function Ashxatoxner(nameInst, gradaran, nameFak, ambion, lsaran, nameDek, dekan, name, surname, year, rate, days) {
	Dekanat.call(this, nameInst, gradaran, nameFak, ambion, lsaran, nameDek, dekan);
	this.name = name;
	this.surname = surname;
	this.year = year;	
}

Ashxatoxner.prototype = Object.create(Dekanat.prototype);
Ashxatoxner.prototype.constructor = Ashxatoxner;
Ashxatoxner.prototype.getFullName = function() {
	return this.name + ' ' + this.surname;
}

Ashxatoxner.prototype.getYear = function() {
	return (new Date()).getFullYear() - this.year;
}
Ashxatoxner.prototype.getAshkhatavadz = function() {
	return this.rate * this.days;
}
Ashxatoxner.prototype.setRate = function(rate) {
	this.rate = rate;
}
Ashxatoxner.prototype.setDays = function(days) {
	this.days = days;
}



let institut = new Institut('VPMI', 'lib');
let fakultet = new Fakultet('VPMI', 'lib', 'fizmat', 'matematika', 20);
let dekanat = new Dekanat('VPMI', 'lib', 'fizmat', 'matematika', 20, 'fizika ev astxagitutyun', 'Sargsyan');
let ashxatoxner = new Ashxatoxner('VPMI', 'lib', 'fizmat', 'matematika', 20, 'fizika ev astxagitutyun', 'Sargsyan', 'Vardan', 'Ghazaryan', 100);
ashxatoxner.setRate(10);
ashxatoxner.setDays(5000);
ashxatoxner.year = 2010;
console.log(ashxatoxner.getAshkhatavadz());
console.log(ashxatoxner.getFullName());
console.log(ashxatoxner.getYear());
console.log(institut);
console.log(fakultet.ambion);
console.log(dekanat);