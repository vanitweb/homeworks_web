//lection 3
//Գլխավոր անկյունագծից ներքև գտնվող էլեմենտները փոխարինել 0-ով
let arr = [];
let n = 10;
for(let i = 0; i < n; i++) {
	arr[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
for(let i = 0; i < n; i++) {
	for(let j = 0; j < i; j++){
		arr[i][j] = 0;
	}
}
console.log(arr);
//Գլխավոր անկյունագծի էլեմենտները փոխարինել օժանդակ անկյունագծի էլեմենտներով
let array = [];
for(let i = 0; i < n; i++) {
	array[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
let k;
for(let i = 0; i < n; i++) {
	k = array[i][i];
	array[i][i] = array[i][n - i -1];
	array[i][n - i -1] = k;
}
console.log(array);
//Շախմատի տախտակի գույների ներկման խնդիր
let chess = [];
let m = 8;
for(let i = 0; i < m; i++) {
	chess[i] = [0, 0, 0, 0, 0, 0, 0, 0];
}
for(let i = 0; i < m; i++) {
	for( let j = 0; j < m; j++) {
		if((i + j) % 2 === 0) {
			chess[i][j] = '*';
		} else {
			chess[i][j] = '#';
		}
	}
}
console.log(chess);
//Զանգվածի էլեմենտները լցնել 0,1,2 արժեքներով
let arrayOne = [];
let size = 9;
for(let i = 0; i < size; i++) {
	arrayOne[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
for(let i = 0; i < size; i++) {
	arrayOne[i][i] = 1;
	arrayOne[i][size - i - 1] = 1;
}
for(let i = 1; i < size - 1; i++) {
	for(let j = 0; j < size; j++) {
		if(j === i || j === size - i - 1) {
			break;
		}
		arrayOne[i][j] = 2;
	}
}
for(let i = 1; i < size; i++) {
	for(let j = size - 1; j > 0; j--) {
		if(j === i || j === size - i - 1) {
			break;
		}
		arrayOne[i][j] = 2;
	}
}
console.log(arrayOne);