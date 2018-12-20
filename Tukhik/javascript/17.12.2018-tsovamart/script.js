
'use strict';
const CELL_SIZE = 7;

const dashtXaxacox = function() {
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i< CELL_SIZE; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j< CELL_SIZE; ++j) {
            const td = document.createElement('td');
            td.setAttribute('onclick', 'setValue(event)');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


const dashtXaxacox1 = function() {
    const table = document.getElementsByTagName('table')[1];
    for(let i = 0; i< CELL_SIZE; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j< CELL_SIZE; ++j) {
            const td = document.createElement('td');
            td.setAttribute('onclick', 'setValue(event)');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

const startGame = function() {
    dashtXaxacox();
   document.getElementsByTagName('button')[0].style.display = 'none';    
}
const startGame1 = function() {
    dashtXaxacox1();
   document.getElementsByTagName('button')[0].style.display = 'none';    
}