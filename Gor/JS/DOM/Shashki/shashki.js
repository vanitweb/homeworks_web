const size = 8;
let td;
let player = 1;
let vercracCar = {};
let table = [
	[0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0],
	[0, 1, 0, 1, 0, 1, 0, 1],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[-1, 0, -1, 0, -1, 0, -1, 0],
	[0, -1, 0, -1, 0, -1, 0, -1],
	[-1, 0, -1, 0, -1, 0, -1, 0]
];
const carer = function() {
	td = document.getElementsByTagName('td');
	for(let i = 0; i < size; i++) {
		for(let j = 0; j < size; j++) {
			if(table[i][j] === 1) {
				td[i * size +j].setAttribute('class', 'black');
			}
			else if(table[i][j] === -1) {
				td[i * size +j].setAttribute('class', 'white');
			}
		}
	}
}
const bgColor = function(i, j) {
	if((i + j) % 2 === 0) {
		return `black`;
	} else {
		return `tarnsparent`;
	}
}
const drowTable = function() {
	document.getElementsByTagName('button')[0].style.display = 'none';
	const table = document.getElementsByTagName('table')[0];
	for(let i = 0; i < size; i++) {
		const tr = document.createElement('tr');
		table.appendChild(tr);
		for(let j = 0; j < size; j++) {
			const td = document.createElement('td');
			td.setAttribute("onclick", "game(event)");
			td.style.background = bgColor(i, j);
			tr.appendChild(td);
		}
	}
	carer();
}
const emptyCar = function() {
	delete vercracCar.x;
	delete vercracCar.y;
}
const isTrueTd = function(row, col) {
	return (row + col) % 2;
}
const isTrueStep = function(row, col) {
	if(row === vercracCar.x + player && (col === vercracCar.y + 1 || col === vercracCar.y - 1)) {
		return true;
	} else {
		return false;
	}
}
const firstStep = function(row, col) {
	vercracCar.x = row;
	vercracCar.y = col;
}
const secondStep = function(row, col) {
	if(isTrueStep(row, col)) {
		td[vercracCar.x * size + vercracCar.y].setAttribute('class', 'nan');
		table[vercracCar.x][vercracCar.y] = 0;
		if(player === 1) {
			td[row * size + col].setAttribute('class', 'black');
		} else {
			td[row * size + col].setAttribute('class', 'white');
		}
		table[row][col] = player;
		player *= -1;
		emptyCar();
	}
}
const game = function(event) {
	let col = event.target.cellIndex;
	let row = event.target.parentNode.rowIndex;
	if(table[row][col] === player && !vercracCar.x && !vercracCar.y) {
		firstStep(row, col);
	}
	else if(table[row][col] === 0 && (vercracCar.x || vercracCar.y) && isTrueTd(row, col)) {
		secondStep(row, col);
	}
}