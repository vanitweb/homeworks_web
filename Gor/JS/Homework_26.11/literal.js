//Homeworks 24.11.2018
//Create object with literal
console.log("**********************************************************************");
let institut = {
	name: 'VSU',
	library: 45000,
	fakultet: {
		name: 'Kensabanaqimiakan',
		ambion: {
			name: 'Qimiayi',
			lsaran: 18,
			dasaxos: {
				name: 'Sergey',
				surname: 'Zalinyan',
				age: 35,
				ararka: 'Busabanutyun',
			},
		},
		dekan: {
				name: 'Zaruhi',
				surnam: 'Vardanyan',
				age: 55,
				ararka: 'Kensabanutyun',
		},
		ashxatox: {
				name: 'Gohar',
				surname: 'Simonyan',
				age: 45,
				hastiq: 'operator',
		},
	},
};
console.log(institut);
console.log(institut.fakultet);
console.log(institut.fakultet.ambion);
console.log(institut.fakultet.ambion.dasaxos);
console.log(institut.fakultet.ashxatox);
console.log(institut.fakultet.dekan);