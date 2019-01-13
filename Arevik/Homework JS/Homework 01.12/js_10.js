'use strict';
let isX = true;
let haxtanak = false;
const CELL_SIZE = 10;

const table = document.getElementsByTagName('table')[0];
const tr = document.getElementsByTagName("tr"); 
const td = document.getElementsByTagName("td"); 
const button = document.getElementsByTagName('button')[0];

const tryAgain = function(){
	button.textContent ="Try again";
	button.style.display = 'block';
	table.textContent = "";
	isX = true;
	haxtanak = false;
}	
	
const validate = function(e, start, to){
	let tdContent = e.target.textContent;
	let count = 0;
	for(let i = start; i < to; i++){
		if(td[i].textContent === tdContent){
			count++;
		}
	}
	if(count === CELL_SIZE){
		setTimeout(function(){
			alert('Win');
			haxtanak = true;
			tryAgain();
		}, 200);
		haxtanak = false;
	}
	else if(haxtanak === false && count === CELL_SIZE * CELL_SIZE){
		setTimeout(function(){
			alert("game over");
			tryAgain();
		}, 200);
	}
}

const stugum = function(e){
    const m = e.target.cellIndex;
    const t = e.target.parentNode.rowIndex;
	const td = document.getElementsByTagName("td"); 
	if(m === t ){
		validate(e, m, td.length, CELL_SIZE);
        validate(e, t * CELL_SIZE, t * CELL_SIZE + CELL_SIZE);
        validate(e, 0, td.length, CELL_SIZE + 1);
	}else if(t + m === CELL_SIZE -1){
		validate(e, m, td.length, CELL_SIZE);
        validate(e, t * CELL_SIZE, t * CELL_SIZE + CELL_SIZE);
        validate(e, CELL_SIZE - 1, td.length, CELL_SIZE - 1 - 1)
	}else{
		validate(e, m, td.length, CELL_SIZE);
        validate(e, t * CELL_SIZE, t * CELL_SIZE + CELL_SIZE);
	}
}


const x = function() {
	let count = 0;
    return function(e){
        if (!e.target.textContent) {
            count++;
			e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
			if(count >= 2 * CELL_SIZE - 1){
                stugum(e);
            }
		}
    }
}


const setValue = x();
const drawTable = function() {
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
	drawTable();
	button.style.display = 'none';    
}
