// "*" yev "#" dnel elementneri poxaren
let n = 8, m = 8;
let mas = [];
for (let i = 0; i < m; i++){
    mas [i] = [];
    for (let j = 0; j < n; j++){
        mas [i] [j] = j + 1;
}
    }
for (let j = 0; j < n / 2; j++) {
	for (let k = 0; k < m / 2; k++) {
		mas [2 * j] [2 * k] = '#';
		mas [2 * j] [2 * k + 1] = '*';
		mas [2 * j + 1] [2 * k + 1] = '#';
		mas [2 * j + 1] [2 * k] = '*';
	}
}
console.log(mas);