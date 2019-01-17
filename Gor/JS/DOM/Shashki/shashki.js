const size = 8;
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
	const td = document.getElementsByTagName('td');
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

const game = function(event){
	const td = document.getElementsByTagName('td');
	let row = event.target.cellIndex;
	let col = event.target.parentNode.rowIndex;
	console.log(row, col);
	if(table[row][col] === -1){
		elem.setAttribute("class","nan");
	   }
}