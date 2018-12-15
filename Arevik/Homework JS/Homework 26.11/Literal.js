//Task.Literal - Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, fakultet->ambion,lsaran, dekanat->dekan ashxatoxner  

institut = {
	name: 'VPMI',
	gradaran: 'Library1',
	fakultet: {
		nameFak: 'fizmat',
		ambion: 'matematika',
		lsaran: 20,
		dekanat: {
			nameDek: 'fizika ev astxagitutyun', 
			dekan: 'Sargsyan',
			ashxatoxner: {
				name: 'Vardan', 
				surname: 'Ghazaryan',
				rate: 5000,
				days: 10,
				year: 2010,
				getFullName: function() {
					return this.name + ' ' + this.surname;
				},
				getYear: function() {
					return (new Date()).getFullYear() - this.year;
				},
				getAshkhatavadz: function() {
					return this.rate * this.days;
				},
				setRate: function(rate) {
					this.rate = rate;
				},
				setDays: function(days) {
					this.days = days;
				}
				
			}
		}
	}
};

console.log(institut);
console.log(institut.fakultet);
console.log(institut.fakultet.dekanat);
console.log(institut.fakultet.dekanat.ashxatoxner);
console.log(institut.fakultet.dekanat.ashxatoxner.getFullName());
console.log(institut.fakultet.dekanat.ashxatoxner.getYear());
console.log(institut.fakultet.dekanat.ashxatoxner.getAshkhatavadz());
console.log(institut.fakultet.dekanat.ashxatoxner.getFullName());