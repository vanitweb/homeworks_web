//Homeworks 29.11.2018
//X-O xax
let table = [
	['*', '*', '*'],
	['*', '*', '*'],
	['*', '*', '*'],
];
let nshan = true;
let haxtanak = false;
let step = 0;
console.log(table);
function play(x, y) {
	if(haxtanak) {
		console.log("Xaxn arden avartvac e, duq aylevs cheq karox xaxal");
		return 0;
	}
	if(table[x][y] === '*') {
		if(nshan) {
			table[x][y] = 'X';
			nshan = !nshan;
			step++;
		} else {
			table[x][y] = 'O';
			nshan = !nshan;
			step++;
		}
	} else {
		console.log('Tvyal dashtum arden grarum ka kam tvyal dasht@ goyutyun chuni');
	}
	console.log(table);
	if(step >= 5) {
		for(let i in table) {
			if(table[i][0] === 'X' && table[i][1] === 'X' && table[i][2] === 'X') {
				console.log("Haxtec arajin xaxacox@");
				haxtanak = !haxtanak;
			}
			if(table[i][0] === 'O' && table[i][1] === 'O' && table[i][2] === 'O') {
				console.log("Haxtec erkrord xaxacox@");
				haxtanak = !haxtanak;
			}
			if(table[0][i] === 'O' && table[1][i] === 'O' && table[2][i] === 'O') {
				console.log("Haxtec erkrord xaxacox@");
				haxtanak = !haxtanak;
			}
			if(table[0][i] === 'X' && table[1][i] === 'X' && table[2][i] === 'X') {
				console.log("Haxtec arajin xaxacox@");
				haxtanak = !haxtanak;
			}
		}
		if(table[0][0] === 'X' && table[1][1] === 'X' && table[2][2] === 'X') {
			console.log("Haxtec arajin xaxacox@");
			haxtanak = !haxtanak;
		}
		if(table[0][0] === 'O' && table[1][1] === 'O' && table[2][2] === 'O') {
			console.log("Haxtec erkrord xaxacox@");
			haxtanak = !haxtanak;
		}
	}
}