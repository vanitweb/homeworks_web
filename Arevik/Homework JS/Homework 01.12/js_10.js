'use strict';
let isX = true;
const CELL_SIZE = 3;
let count = 0;
const table = document.getElementsByTagName('table')[0];
const button = document.getElementsByTagName('button')[0];

const x = function() {
    return function(e){
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
	    }
		validate();	
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
let  step = 0;
const validate = function() {
	let flag = false;
	let flag1 = false;
	if(count >= CELL_SIZE *2 -1){
		for(let i = 0; i < CELL_SIZE; i++){
			step++;
			let winRowX = true,
			winColumnX = true,
			winLeftTopX = true,
			winLeftBottomX = true,
			winRow0 = true,
			winColumn0 = true,
			winLeftTop0 = true,
			winLeftBottom0 = true;
			for(let k = 0; k < CELL_SIZE; k++){
				if( i === 0 &&  k === 0 ) {
					if(table.rows[0].cells[0].textContent !== 'X' ) {
					winLeftTopX = false;
					}
					if(table.rows[0].cells[0].textContent !== '0' ) {
						winLeftTop0 = false;
					}
				}
				else{
					if(table.rows[k].cells[k].textContent !== 'X' ) {
					winLeftTopX = false;
					}
					if(table.rows[k].cells[k].textContent !== '0' ) {
						winLeftTop0 = false;
					}
					if(table.rows[CELL_SIZE-1-k].cells[k].textContent !== '0' ) {
						winLeftBottom0 = false;
					}
					if(table.rows[CELL_SIZE-1-k].cells[k].textContent !== 'X' ) {
						winLeftBottomX = false;
					}
					if(table.rows[i].cells[k].textContent !== 'X') {
						winRowX = false;
					}
					if(table.rows[k].cells[i].textContent !== 'X' ) {
						winColumnX = false;
					}
					if(table.rows[i].cells[k].textContent !== '0') {
						winRow0 = false;
					}
					if(table.rows[k].cells[i].textContent !== '0' ) {
						winColumn0 = false;
					}
				}
			}
			if(winRowX || winColumnX || winLeftTopX || winLeftBottomX || winRow0 || winColumn0 || winLeftTop0 || winLeftBottom0){
			flag = true;
			break;
			}
			else{
				flag1 = true;
			}
		}  
	}
	if (flag ) {
		setTimeout(function(){
			alert("Win");
			count = 0;
			tryAgain();
		}, 100);
	}
	else if(flag == false && step == Math.pow(CELL_SIZE, 3)){
		setTimeout(function(){
			alert("Standoff");
			count = 0;
			tryAgain();
		}, 100);
	}
}
const tryAgain = function(){
	button.textContent ="Try again";
	button.style.display = 'block';
	table.textContent = "";
	isX = !isX;
}

const startGame = function() {
	drawTable();
	button.style.display = 'none';    
}
