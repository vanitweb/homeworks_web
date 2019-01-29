const clickedQar = {isWhite: true};
const CELL_SIZE = 8;
const table = document.getElementsByTagName('table')[0];
const tr = document.getElementsByTagName("tr"); 
const td = document.getElementsByTagName("td");
let coordX, coordY, coordX1, coordY1, karg = false, temp = false;
let car = clickedQar.isWhite ? '1' : '0';

const isQar =  function(cell) {
	if(clickedQar.isWhite && cell.textContent === "1" || !clickedQar.isWhite && cell.textContent === "0") {
		return true;
	}
}
const  validate = function(cell){
	if(!cell.textContent){
		let cell = cell.rows[coordX1].cell[coordY1];
		ontabelClick(e.target);
		if(Math.abs(coordX - coordX1) === 1 && ((coordY -coordY1 === 1) || (coordY - coordY1 === -1))){
			alert('validate3');
			cell.textContent === '1';
		}
	}
}

const ontabelClick =  function(e) {
	if(karg == false){
		let cell = e.target;
		if(isQar(e.target)) {
			temp = true;
			clickedQar.x = e.target.parentNode.rowIndex;
			clickedQar.y = e.target.cellIndex;
			coordX = clickedQar.x;
			coordY = clickedQar.y;
			cell.textContent = '';
		} else {
		//checkStep(e.target);
		}
		karg = true;
		temp = false;
		if(temp == false){
			validate(cell);
		}
		else{
			clickedQar.x = e.target.parentNode.rowIndex;
			clickedQar.y = e.target.cellIndex;
			coordX1 = clickedQar.x;
			coordY1 = clickedQar.y;
			temp = false;
		}
	}
}


const drawTabel = function() {
    for(let i = 0; i< CELL_SIZE; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j< CELL_SIZE; ++j) {
		    const td = document.createElement('td');
			if((i + j) % 2 != 0){
				td.style.background = 'black';
				td.addEventListener('click', ontabelClick); 
				td.setAttribute('click', 'validate(event)'); 
			}
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
	
const drawQar = function(index, value) {
	let i = index, size;
	if(index === 0){
		clickedQar.isWhite = true;
		size = 3;
	}
	else {
		size = CELL_SIZE;
		car = '0';
	}
	for(i; i < size; ++i) {
		let j = 0;
		if(i % 2 == 0){
			j = 1;
		}
		for(j; j < CELL_SIZE; j = j + 2) {
			table.rows[i].cells[j].textContent = car;        
		}
	}
}


/*const checkStep = function(cell) {
	if(true) {
	}
}*/



/*const isFuk = function(indexX, indexY) {
	payman (true : false);
}*/

const startGame = function() {
	drawTabel();
	drawQar(0, 0);
	drawQar(5, 1);
}

startGame();