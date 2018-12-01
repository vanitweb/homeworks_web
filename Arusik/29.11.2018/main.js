//ստանալ ինստիտուտ օբյեկտ, այն հայտարարելով որպես լիտերալ
let institute = {
	name: 'VSPI',
	library: 'library',
	VarchakanMas: 'varchakan',
	facultet: {
		name: 'FizMat',
		decanat: {
			name: 'fizmat',
			dekan: 'Hakhinyan',
			dasaxosner: {
				dasaxos1: {
					name: 'Mels',
					surname: 'Sakanyan',
					ubject: 'Geometry',
				},
				dasaxos2: {
					name: 'Heghine',
					surname: 'Ohanyan',
					subject: 'Programming',
				},
			},
		},
		bajin: {
			name: 'Infromatika&Matematika',
			kurs: {
				kurs1: 'Inform1',
				kurs2: 'Inform2',
				kurs3: 'Inform3',
				kurs4: 'Inform4',
				kurs5: 'Inform5',
			},
		},
		
	},
};
console.log(institute);

//ստանալ ինստիտուտ օբյեկտ, այն հայտարարելով որպես new Object
function Institute() {
	this.name = 'VSPI';
	this.libraty = 'library';
	this.varchakanmas = 'varchakanmas';
	this.facultet = {
		name: 'FizMat',
		decanat: {
			name: 'fizmat',
			dekan: 'Hakhinyan',
			dasaxosner: {
				dasaxos1: {
					name: 'Mels',
					surname: 'Sakanyan',
					ubject: 'Geometry',
				},
				dasaxos2: {
					name: 'Heghine',
					surname: 'Ohanyan',
					subject: 'Programming',
				},
			},
		},
		bajin: {
			name: 'Infromatika&Matematika',
			kurs: {
				kurs1: 'Inform1',
				kurs2: 'Inform2',
				kurs3: 'Inform3',
				kurs4: 'Inform4',
				kurs5: 'Inform5',
			},
		},
	
	};
};
let I = new Institute;
console.log(I);
