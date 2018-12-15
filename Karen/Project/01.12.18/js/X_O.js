'use strict';
let isX = true;
let count = 0;
let n = 3;
const setValue = function(e) {
    if (!e.target.textContent) {
        count++;
        e.target.textContent = isX ? 'X' : 'O';
        isX = !isX;
    }
    if (count >= 2 * n - 1) {
    	stugum();
    };
}

const drawTable = function() {
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i < n; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j < n; ++j) {
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
	let j = 0;
	let table = document.getElementsByTagName('table')[0];
	while(j < n) {
		for(let i = 0; i < n - 1; i++) {
			if(table.rows[j].cells[i].textContent == table.rows[j].cells[i + 1].textContent) {
				i++;
				if(i == n) {
					return console.log('haxt tox');
				}
			}
			if(table.rows[i].cells[j].textContent == table.rows[i + 1].cells[j].textContent) {
				i++;
				if(i == n) {
					return console.log('haxt syun');
				}
			}
		}
		j++;
	}
	
}