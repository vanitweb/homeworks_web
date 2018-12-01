//Homeworks 24.11.2018
//Create object with constructiv function
console.log("**********************************************************************");
let University = function(univName, library) {
	this.univName = univName;
	this.library = library;
}
let Fakultet = function(univName, library, fakName) {
	University.call(this, univName, library);
	this.fakName = fakName;
}
Fakultet.prototype = Object.create(University.prototype);
Fakultet.prototype.constructor = Fakultet;
let Ambion = function(univName, library, fakName, anbName, lsaran) {
	Fakultet.call(this, univName, library, fakName);
	this.ambName = anbName;
	this.lsaran = lsaran;
}
Ambion.prototype = Object.create(Fakultet.prototype);
Ambion.prototype.constructor = Ambion;
let Dasaxos = function(univName, library, fakName, anbName, lsaran, dasName, dasSurname, dasAge, ararka) {
	Ambion.call(this, univName, library, fakName, anbName, lsaran);
	this.dasName = dasName;
	this.dasSurname = dasSurname;
	this.dasAge = dasAge;
	this.ararka = ararka;
}
Dasaxos.prototype = Object.create(Ambion.prototype);
Dasaxos.prototype.constructor = Dasaxos;
let Dekan = function(univName, library, fakName, dekName, dekSurname, dekAge, ararka) {
	Fakultet.call(this, univName, library, fakName);
	this.dekName = dekName;
	this.dekSurname = dekSurname;
	this.dekAge = dekAge;
	this.ararka = ararka;
}
Dekan.prototype = Object.create(Fakultet.prototype);
Dekan.prototype.constructor = Dekan;
let Ashxatox = function(univName, library, fakName, ashxName, ashxSurname, ashxAge, hastiq) {
	Fakultet.call(this, univName, library, fakName);
	this.ashxName = ashxAge;
	this.ashxSurname = ashxSurname;
	this.ashxAge = ashxAge;
	this.hastiq = hastiq;
}
Ashxatox.prototype = Object.create(Fakultet.prototype);
Ashxatox.prototype.constructor = Ashxatox;

const university = new University('VSU', 45000);
console.log(university);
const fakultet = new Fakultet('VSU', 45000, 'Fizikamatematikakan');
console.log(fakultet);
const ambion = new Ambion('VSU', 45000, 'Mankavarjutyan', 'Hogebanutyan ambion', 40);
console.log(ambion);
const dasaxos = new Dasaxos('VSU', 45000, 'Mankavarjutyan', 'Mankavarjutyan ambion', 10, 'Pargev', 'Gevorgyan', 70, 'Mankavarjutyun ev metodika');
console.log(dasaxos);
const dekan = new Dekan('VSU', 45000, 'Fizikamatematikakan', 'Hermine', 'Grigoryan', 45, 'Matematikakan analiz');
console.log(dekan);
const ashxatox = new Ashxatox('VSU', 45000, 'Fizikamatematikakan', 'Tehmine', 'Tavaratsyan', 36, 'Dekani ognakan');
console.log(ashxatox);