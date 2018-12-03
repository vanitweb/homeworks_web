'use strict';
let isX = true;
let count = 0;
const setValue = function(e) {
    if (!e.target.textContent) {
        count++;
        e.target.textContent = isX ? 'X' : 'O';
        isX = !isX;
    }
    if (count >= 5) {
    	stugum();
    };
}

const drawTable = function() {
    const CELL_SIZE = 3;
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i < CELL_SIZE; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j < CELL_SIZE; ++j) {
            const td = document.createElement('td');
            td.setAttribute('onclick', 'setValue(event)');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

const startGame = function() {
    drawTable();
   document.getElementsByTagName('button')[0].style.display = 'none';    
}

const stugum = function () {
	let n = 3, j = 0;
	let table = document.getElementsByTagName('table')[0];
	if(j < n) {
		for(let i = 0; i < n - 1; i++) {
			if(table.rows[j].cells[i].innerHTML == table.rows[j].cells[i + 1].innerHTML) {
				if(i < (n - 1)) {
					i++;
				}
				if(i == (n - 1)) {
					console.log('haxt');
				}
			}
		}
		j++;
	}
}