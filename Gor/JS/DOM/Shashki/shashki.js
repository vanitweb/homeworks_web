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
	stugum();
}
const isTrueTd = function(row, col) {
	return (row + col) % 2;
}
const isTrueStep = function(row, col) {
	if(row === vercracCar.x + player && (col === vercracCar.y + 1 || col === vercracCar.y - 1)) {
		return true;
	}
	return false;
}
const isUtelStep = function(row, col) {
	const uxxutyun = (col - vercracCar.y) / 2;
	if(row === vercracCar.x + 2 * player && (col === vercracCar.y + 2 || col === vercracCar.y - 2)) {
		if(table[vercracCar.x + player][vercracCar.y + uxxutyun] === player * -1) {
			return true;
		}
		return false;
	}
	return false;
}
const utel = function(row, col) {
	const uxxutyun = (col - vercracCar.y) / 2;
	td[vercracCar.x * size + vercracCar.y].setAttribute('class', 'nan');
	table[vercracCar.x][vercracCar.y] = 0;
	if(player === 1) {
		td[row * size + col].setAttribute('class', 'black');
	} else {
		td[row * size + col].setAttribute('class', 'white');
	}
	table[row][col] = player;
	table[vercracCar.x + player][vercracCar.y + uxxutyun] = 0;
	td[(vercracCar.x + player) * size + vercracCar.y + uxxutyun].setAttribute('class', 'nan');
	player *= -1;
	emptyCar();
}
const firstStep = function(row, col) {
	vercracCar.x = row;
	vercracCar.y = col;
}
const reset = function() {
	location.reload();
}
const stugum = function() {
	let playerOne = 0;
	let playerTwo = 0;
	for(let i = 0; i < size; i++) {
		for(let j = 0; j < size; j++) {
			if(table[i][j] === 1) {
				playerOne++;
			}
			else if(table[i][j] === -1) {
				playerTwo++;
			}
		}
	}
	if(playerOne === 0 || playerTwo === 0) {
		alert("Xaxn avartvec!!!");
		reset();
	}
	else if(playerOne === 2 && playerTwo === 2) {
		alert("Voch voqi!!!");
		reset();
	}
	else if(playerOne === 1 && playerTwo === 1) {
		alert("Voch voqi!!!");
		reset();
	}
	else if((playerOne === 2 && playerTwo === 1) || (playerOne === 1 && playerTwo === 2)) {
		alert("Voch voqi!!!");
		reset();
	}
}
const secondStep = function(row, col) {
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
const game = function(event) {
	let col = event.target.cellIndex;
	let row = event.target.parentNode.rowIndex;
	if(table[row][col] === player && !vercracCar.x && !vercracCar.y) {
		firstStep(row, col);
	}
	else if(table[row][col] === 0 && (vercracCar.x || vercracCar.y) && isTrueTd(row, col)) {
		if(isTrueStep(row, col)) {
			secondStep(row, col);
		}
		else if(isUtelStep(row, col)) {
			utel(row, col);
		}
	}
	else if(row === vercracCar.x && col === vercracCar.y) {
		emptyCar();
	}
}