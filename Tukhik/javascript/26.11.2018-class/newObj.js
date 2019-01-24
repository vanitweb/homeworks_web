// Ստեղծել օբյեկտ հետևյալ կառուցվածքով՝ Institut-> name, gradaran, 
// fakultet->ambion,lsaran, dekanat->dekan ashxatoxner 

//newObj
let institut = new Object();
institut.fakultet = new Object();
institut.fakultet.dekanat = new Object();

institut.name = 'VPH';
institut.gradaran = 'matGradaran';
institut.fakultet.name = 'fizMat';
institut.fakultet.ambion = 'Matanaliz';
institut.fakultet.lesson = 'matem';
institut.fakultet.dekanat.name = 'FizikaMatematikakan';
institut.fakultet.dekanat.dekan = 'Sargsyan';
institut.fakultet.dekanat.assistent = 'Poghosyan';
console.log(institut);
console.log(institut.fakultet);
console.log(institut.fakultet.dekanat);
