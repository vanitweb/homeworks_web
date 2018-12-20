'use strict';
const dimOfField = 3;
const x = function() {
 let count = 0;
 let isX = true;
    return function(e){
	 
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
        }
    }
	validate();
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



let fixPosition = function() {
	let table = document.getElementById("generalTable"),rIndex,cIndex;
		for (let i = 0; i < table.rows.length; i++) {
			for (let j = 0; j < table.rows[i].cells.length; j++) {
				table.rows[i].cells[j].onclick = function() 
				{
					rIndex = this.parentElement.rowIndex;
					cIndex = this.cellIndex;
				} 
				return{x:rIndex, y:cIndex};
			}	
			
		}
}
const validate = function() {
	let checkWin = 0;
	let position = fixPosition();
	
	for (let j = 0; j < dimOfField; j++) {
		if (table.row[position.x].cell[j].content === table.row[position.x].cell[y].content) {
			checkWin++;
		} else {
			checkWin = 0;
			for (let i = 0; i < dimOfField; i++) {
				if (table.row[i].cell[position.y].content === table.row[i].cell[position.y].content) {
					checkWin ++;
				}
			}
		}
	}
}
const startGame = function() {
    drawTable();
   document.getElementsByTagName('button')[0].style.display = 'none';  
   
}
