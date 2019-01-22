const clickedQar = {isWhite: true};
const size = 8;
const tdArray = document.getElementsByTagName('td');
const drawTable = function() {
	const table = document.getElementsByTagName('table')[0];
	for(let i = 0; i < size; ++i) {
		const tr = document.createElement('tr');
		for(let j = 0; j < size; ++j) {
			const td = document.createElement('td');
			tr.appendChild(td);
			if((j % 2 === 0 && i % 2 !== 0) || (j % 2 !== 0 && i % 2 === 0)){
				td.style.backgroundColor = "grey";
			}
		}
	table.appendChild(tr);
	}
		
}

const drawQar = function(index, value) {
	const table = document.getElementsByTagName('table')[0];
	const tr = document.getElementsByTagName('tr');	
	const td = document.getElementsByTagName('td');
	//const index = tox * size + syun;
	
	for(let i = 0; i < index; i++) {
		for(let j = 0; j < size; j++) {
			if((j % 2 === 0 && i % 2 !== 0) || (j % 2 !== 0 && i % 2 === 0))
			{
				
				table.rows[i].cells[j].textContent = 'value'
			} 
		}	
    }
}	
/*
const checkStep = function(cell) {
	if(true) {
	}
}

const isQar =  function(cell) {
	if(clickedQar.isWhite && cell.textContent === "0" || !clickedQar.isWhite && cell.textContent === "1") {
		return true;
	}
}

const ontabelClick =  function(e) {
	if(isQar(cell)) {
		clickedQar.x = e.target.parentNode.rowIndex;
		clickedQar.y = e.target.cellIndex;
	} else {
		checkStep(e.target);
	}
}

const isFuk = function(indexX, indexY) {
	payman (true : false);
}
*/

const startGame = function() {
	drawTable();
	drawQar(3,1);
	//drawQar();
}
