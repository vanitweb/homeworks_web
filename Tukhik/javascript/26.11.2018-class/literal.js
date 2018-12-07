// Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, 
// fakultet->ambion,lsaran, dekanat->dekan ashxatoxner 
let institut = {
	name: 'VPH',
	gradaran: 'matGradaran',
	fakultet: {
		name: 'fizMat',
		ambion: 'Matanaliz',
		dekanat: {
			name: 'FizikaMatematikakan',
			dekan: 'Sargsyan',
			assistent: 'Poghosyan'
		}
	}
}
console.log(institut);
console.log(institut.fakultet);
console.log(institut.fakultet.dekanat);