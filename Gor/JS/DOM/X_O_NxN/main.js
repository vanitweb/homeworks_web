let size;
const sizeInput = function() {
	do {
		size = parseInt(prompt("Nermuceq dashti chaps@(3-15)"));
	} while(size < 3 || size > 15);
}
const reset = function() {
	location.reload();
}
const print = function(element) {
	setTimeout(function() {alert(`haxtec ${element}-ov xaxacox@`)}, 100);
	setTimeout(reset,200);
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
const checkGlxAnk = function() {
	const td = document.getElementsByTagName("td");
	let count = 0;
	for(let i = 0; i < size * (size - 1); i += size + 1) {
		if(td[i].textContent === td[i + size + 1].textContent) {
			count++;
		}
	}
	if(count === size - 1) {
		print(td[0].textContent);
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
const check = function(e) {
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
}
const game1 = function() {
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
				check(e);
            }
        }
    }
}
const game = game1();
const drowTable = function() {
	document.getElementsByTagName('button')[0].style.display = 'none';
	const table = document.getElementsByTagName('table')[0];
	for(let i = 0; i < size; i++) {
		const tr = document.createElement('tr');
		table.appendChild(tr);
		for(let j = 0; j < size; j++) {
			const td = document.createElement('td');
			td.setAttribute("onclick", "game(event)");
			tr.appendChild(td);
		}
	}
}
const start = function() {
    sizeInput();
	drowTable();
}