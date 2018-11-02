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
let arr1 = [];
for(let i = 0; i < n; i++) {
	arr1[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
let k;
for(let i = 0; i < n; i++) {
	k = arr1[i][i];
	arr1[i][i] = arr1[i][n - i -1];
	arr1[i][n - i -1] = k;
}
console.log(arr1);
//Շախմատի տախտակի գույների ներկման խնդիր
let chess = [];
let color = false;
let m = 8;
for(let i = 0; i < m; i++) {
	chess[i] = [0, 0, 0, 0, 0, 0, 0, 0];
}
for(let i = 0; i < m; i++) {
	for( let j = 0; j < m; j++) {
		if(color === false) {
			chess[i][j] = '*';
		} else {
			chess[i][j] = '#';
		}
		color = !color;
	}
	color = !color;
}
console.log(chess);
//Զանգվածի էլեմենտները լցնել 0,1,2 արժեքներով
let chess1 = [];
let size = 9;
for(let i = 0; i < size; i++) {
	chess1[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}
for(let i = 0; i < size; i++) {
	chess1[i][i] = 1;
	chess1[i][size - i - 1] = 1;
}
for(let i = 1; i < size - 1; i++) {
	for(let j = 0; j < size; j++) {
		if(j === i || j === size - i - 1) {
			break;
		}
		chess1[i][j] = 2;
	}
}
for(let i = 1; i < size; i++) {
	for(let j = size - 1; j > 0; j--) {
		if(j === i || j === size - i - 1) {
			break;
		}
		chess1[i][j] = 2;
	}
}
console.log(chess1);