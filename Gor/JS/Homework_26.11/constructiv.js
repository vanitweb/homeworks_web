//Homeworks 24.11.2018
//Create object with constructiv function
let University = function(univName, library) {
	this.univName = name;
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