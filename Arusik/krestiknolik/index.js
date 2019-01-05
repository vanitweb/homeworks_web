'use strict';
const dimOfField = 10;
let xIndex, yIndex;
let arr = [];
let count = 0;
const x = function() {
 
 let isX = true;
    return function(e){
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;		
        }
		if(count >= dimOfField * 2 -1) {
			xIndex = e.target.cellIndex;
			yIndex = e.target.parentElement.rowIndex;	
			checkWin();
		}
	}
}
const setValue = x();
const drawTable = function() {
const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i< dimOfField; ++i) {
        const tr = document.createElement('tr');
			for(let j = 0; j< dimOfField; ++j) {
				const td = document.createElement('td');
				td.setAttribute('onclick', 'setValue(event)');
				tr.appendChild(td);
			}
        table.appendChild(tr);
    }
}
const checkWin = function() {
const tr = document.getElementsByTagName('tr');
const td = document.getElementsByTagName('td');
const table = document.getElementsByTagName('table');
let countCheck, winner;
if(xIndex === yIndex) {
	for (let i = 0; i < dimOfField; i ++) {
		for (let j = 0; j < dimOfField; j ++) {
			if (i === j) {
				if(table.rows[i].cells[j].textContent === table.rows[xIndex].cells[yIndex].textContent) {
					countCheck ++;
					winner = table.rows[xIndex].cells[yIndex].textContent;
				}
			}
		}
	}
	
}
if(countCheck === dimOfField) {
	alert(`haxtec ${winner}`);
} else {
	for (let i = 0; i < dimOfField; i ++){
		if(table.rows[xIndex].cells[i].textContent === table.rows[xIndex].cells[yIndex].textContent) {
			countCheck ++;
			winner = table.rows[xIndex].cells[yIndex].textContent;
		} else {
			countCheck = 0;
			for (let i = 0; i < dimOfField; i ++) {
				if(table.rows[i].cells[yIndex].textContent === table.rows[xIndex].cells[yIndex].textContent) {
					countCheck ++;
					winner = table.rows[xIndex].cells[yIndex].textContent;
				}
			}
		}
	}
	if(countCheck === dimOfField) {
		alert(`haxtec ${winner}`);
	} else {
		if (count >= dimOfField*dimOfField) {
		alert(`xaxn avartvec vochvoqi`);
		}
	}
}
}
const startGame = function() {
    drawTable();
   document.getElementsByTagName('button')[0].style.display = 'none';  
   
}
