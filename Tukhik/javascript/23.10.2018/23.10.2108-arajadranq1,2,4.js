console.log(`arajaranq 1`);
//ankyunagcic nerqevi elementnery 0 e tpum
let n = 10, m = 10;
let mas = [];
for (let i = 0; i < m; i++){
    mas [i] = [];
    for (let j = 0; j < n; j++){
        mas [i] [j] = j + 1;	
	}
}
for (let l = 0; l < 10; l++) {
for (let k = 0; k < l; k++) {
	 mas [l] [k] = 0;
}
}
console.log(mas);
console.log(`arajaranq 2`);
//  glxavor ankyunagtsi 
// elementnery poxarinum e ojandak ankyunagtsi elementnerov
let mas1 = [];
for (let i = 0; i < m; i++){
    mas1 [i] = [];
    for (let j = 0; j < n; j++){
        mas1 [i] [j] = j + 1;
    }
}
let arr;
for (let i = 0; i < m; i++) {
	for (let j = 0; j < n; j++) {
		if (i == j) {
		 	arr = mas1[i][j];
		 	mas1 [i] [j] = mas1 [i] [n - 1 - j];
		 	mas1 [i] [n - 1 - j] = arr ;
		}
	}
}
console.log(mas1);

console.log(`arajadranq 4`);
//arajadranq 4
let mas3 = [];
for (let i = 0; i < m; i++){
    mas3 [i] = [];
    for (let j = 0; j < n; j++){
        mas3 [i] [j] = j + 1;
}
    }
for (let i = 0; i < m; i++) {
	 for (let j = 0; j < n; j++) {
	 	if (i == j || i + j == n - 1) {
	 		mas3 [i] [j] = 1;
	 	}
	 	if ((i + j < n - 1 && i < j) || (i + j > n - 1 && i > j)) {
	 		mas3 [i] [j] = 0;
	 	}
	 	if ((i + j < n - 1 && i > j) || (i+j > n - 1 && i < j)) {
	 		mas3 [i] [j] = 2;
	 	}
	 }
}
console.log(mas3);

