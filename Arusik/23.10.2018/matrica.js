//երկչափ զանգվածի մեջ գլխավոր անկյունագծից ներքև գտնվող տարրերը փոխարինել զրոներով:
let matrix = [];
const n = 10;
for(let i = 0; i < n; i++) {
	matrix[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
for(let i = 0; i < n; i++) {
	for(let j = 0; j < i; j++){
		matrix[i][j] = 0;
	}
}
console.log(matrix);