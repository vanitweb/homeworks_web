//Task.Operator_New - Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, fakultet->ambion,lsaran, dekanat->dekan ashxatoxner  

let Institut = new Object();
let Fakultet = new Object();
let Dekanat = new Object();
let Ashxatoxner = new Object();

Institut.name = 'VPMI';
Institut.gradaran = 'Library1';
Fakultet.nameFak = 'fizmat';
Fakultet.ambion = 'matematika';
Fakultet.lsaran = 20,
Dekanat.nameDek = 'fizika ev astxagitutyun'; 
Dekanat.dekan = 'Sargsyan';
Ashxatoxner.name  ='Vardan'; 
Ashxatoxner.surname = 'Ghazaryan';
Ashxatoxner.rate = 5000;
Ashxatoxner.days = 10;
Ashxatoxner.year = 2010;
Ashxatoxner.getFullName = function() {
					return Ashxatoxner.name + ' ' + Ashxatoxner.surname;
};
Ashxatoxner.getYear = function() {
	return (new Date()).getFullYear() - Ashxatoxner.year;
};
Ashxatoxner.getAshkhatavadz = function() {
	return Ashxatoxner.rate * Ashxatoxner.days;
};
Ashxatoxner.setRate = function(rate) {
	Ashxatoxner.rate = rate;
};
Ashxatoxner.setDays = function(days) {
	Ashxatoxner.days = days;
};

console.log(Institut);
console.log(Fakultet);
console.log(Dekanat);
console.log(Ashxatoxner);
console.log(Ashxatoxner.getFullName());
console.log(Ashxatoxner.getYear());
console.log(Ashxatoxner.getAshkhatavadz());
console.log(Ashxatoxner.getFullName());	