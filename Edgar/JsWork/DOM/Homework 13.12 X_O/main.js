'use strict';

const table = document.getElementsByTagName('table')[0];
const button = document.getElementsByTagName('button')[0];

const x = function() {
	let step = 0;
	return function(e){
		if(e.target.textContent === '') {
			if(step % 2 === 0) {
				e.target.textContent = 'X'
			} else {
				e.target.textContent = 'O'
			}
			step++;
            if(step >= size * 2 - 1) {
				check(e, step);
            }
        }
    }
}
const check = function(e, step) {
	let tdIndex, colIndex, rowIndex;
	const td = document.getElementsByTagName("td");
	for(let i in td) {
		if(td[i] === e.target) {
			tdIndex = i;
		}
	}
	colIndex = tdIndex % size;
	rowIndex = (tdIndex - colIndex) / size;
	checkRow(rowIndex);
	checkCol(colIndex);
	if(rowIndex === colIndex) {
		checkGlxAnk();
	}
	if(rowIndex + colIndex === size - 1) {
		checkErkAnk();
	}
	if(step === size * size) {
		setTimeout(function() {alert("Xaxn avartvec voch voqi")}, 100);
		setTimeout(reset,200);
	}
}
const checkRow = function(rowIndex) {
	const td = document.getElementsByTagName("td");
	let count = 0;
	for(let i = size * rowIndex; i < (rowIndex + 1) * size - 1; i++) {
		if(td[i].textContent === td[i + 1].textContent) {
			count++;
		}
	}
	if(count === size - 1) {
		print(td[rowIndex * size].textContent);
	}
}
const checkCol = function(colIndex) {
	const td = document.getElementsByTagName("td");
	let count = 0;
	for(let i = colIndex; i < size * size - size; i += size) {
		if(td[i].textContent === td[i + size].textContent) {
			count++;
		}
	}
	if(count === size - 1) {
		print(td[colIndex].textContent);
	}
}
const checkErkAnk = function() {
	const td = document.getElementsByTagName("td");
	let count = 0;
	for(let i = size * (size - 1); i > size; i -= size - 1) {
		if(td[i].textContent === td[i - size + 1].textContent) {
			count++;
		}
	}
	if(count === size - 1) {
		print(td[size - 1].textContent);
	}
}

const setValue = x();
const drawTable = function (m = 10, n = 10) {
    for(let i = 0; i < m; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j < n; ++j) {
            const td = document.createElement('td');
            td.setAttribute('onclick', 'setValue(event)');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


let  step = 0;
const validate = function() {
	let flag = false;
	let flag1 = false;
	for(let i = 0; i < CELL_SIZE2; i++){
		step++;
		let winRowX = true,
		winColumnX = true,
		winLeftTopX = true,
		winLeftBottomX = true,
		winRow0 = true,
		winColumn0 = true,
		winLeftTop0 = true,
		winLeftBottom0 = true;
		for(let k = 0; k < CELL_SIZE2; k++){
			if(table.rows[i].cells[k].textContent !== 'X') {
				winRowX = false;
			}

			if(table.rows[k].cells[i].textContent !== 'X' ) {
				winColumnX = false;
			}
			
			if(table.rows[k].cells[k].textContent !== 'X' ) {
				winLeftTopX = false;
			}
			
			if(table.rows[CELL_SIZE2-1-k].cells[k].textContent !== 'X' ) {
				winLeftBottomX = false;
			}
			if(table.rows[i].cells[k].textContent !== '0') {
				winRow0 = false;
			}

			if(table.rows[k].cells[i].textContent !== '0' ) {
				winColumn0 = false;
			}
			
			if(table.rows[k].cells[k].textContent !== '0' ) {
				winLeftTop0 = false;
			}
			
			if(table.rows[CELL_SIZE2-1-k].cells[k].textContent !== '0' ) {
				winLeftBottom0 = false;
			}
		}
		if(winRowX || winColumnX || winLeftTopX || winLeftBottomX || winRow0 || winColumn0 || winLeftTop0 || winLeftBottom0){
		flag = true;
		break;
		}
		else{
			flag1 = true;
		}
	}  

	if (flag ) {
		alert("Win");
		tryAgain();
	}
	else if(flag == false && step == Math.pow(CELL_SIZE2, 3)){
		alert("Standoff");
		tryAgain();
	}
}

const tryAgain = function(){
	button.textContent ="Try again";
	button.style.display = 'block';
	table.textContent = "";
	isX = !isX;
}

const startGame = function() {
	drawTable();
	button.style.display = 'none';    
}


  

