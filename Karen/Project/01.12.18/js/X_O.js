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
    	stugum(e);
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

const stugum = function(e) {
	let n = 3, j = 0;
    let y = e.target.textContent;
	let td = document.getElementsByTagName('td');
	if(td[0].textContent === y && td[1].textContent === y && td[2].textContent === y){
        console.log(12345)
    }
}