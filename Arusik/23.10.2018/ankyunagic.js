//երկչափ զանգվածի մեջ տեղերով փոխել գլխավոր և օժանդակ անկյունագծի էլեմենտները
let matrix = [];
const n = 10;
let m;
for(let i = 0; i < n; i++) {
	matrix[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
for(let i = 0; i < n; i++) {
	for(let j = i; j < n; j++){
		if (i === j);
		m = matrix[i][j];
		matrix[i][j] = matrix[i][n-i-1];
		matrix[i][n-i-1] = m;
	}
}
console.log(matrix);