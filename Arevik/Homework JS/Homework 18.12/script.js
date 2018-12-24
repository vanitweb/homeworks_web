'use strict';

let cell, row, shipLenght, ship;
const size = 10;
const table = document.getElementsByTagName('table')[0];


const paint = function(n,m) {
	ship = ship.split('').slice(0, 1);
	let len = n + shipLenght;
	for(let  i = n; i < len; i++){
		table.rows[m].cells[i].textContent = ship;
		if(m === 0){
			table.rows[m + 1].cells[i].style.pointerEvents = 'none';
		}
		else if (m === size - 1){
			table.rows[m - 1].cells[i].style.pointerEvents = 'none';
		}
		else{
			table.rows[m + 1].cells[i].style.pointerEvents = 'none';
			table.rows[m - 1].cells[i].style.pointerEvents = 'none';
		}
	}
	if(n === 0){
		table.rows[m].cells[len-1].style.pointerEvents = 'none';
	}else if(n === size - 1){
		table.rows[m].cells[n - 1].style.pointerEvents = 'none'
	}
	else {
		table.rows[m].cells[len-1].style.pointerEvents = 'none';
		table.rows[m].cells[n - 1].style.pointerEvents = 'none';
	}
}


const func = function(e){
	let ships = event.target.value;
	shipLenght = ships.length;
	switch(shipLenght){
		case 1:
			ship = document.getElementById('oneShip').value;
			break;
		case 2:
			ship = document.getElementById('twoShip').value;
			break;
		case 3:
			ship = document.getElementById('threeShip').value;
			break;
		case 4:
			ship = document.getElementById('fourShip').value;
			break;
	}
}


const validate = function(n, m) {
	if(n + shipLenght < size){
		for(let  i = n; i < n + shipLenght + 1; ++i){
			if(table.rows[m].cells[i].textContent){
				return false;
			}
		}
		for(let  i = n; i < n + shipLenght; ++i){
			if (m === 0){
				if(table.rows[m].cells[i].textContent || 
				table.rows[m + 1].cells[i].textContent){
				return false;
				}
			}
			else if(m === size - 1){
				if(table.rows[m].cells[i].textContent ||
				table.rows[m - 1].cells[i].textContent){
				return false;
				}
			}
			else if(
			table.rows[m].cells[i].textContent ||
			table.rows[m - 1].cells[i].textContent ||
			table.rows[m + 1].cells[i].textContent){
				return false;
			}
		}	
	}else if(n + shipLenght === size){
		for(let  i = n; i < n + shipLenght; ++i){
			if(table.rows[m].cells[i].textContent){
				return false;
			}
		}	
	}
	else {
		return false;
	}
	return true;
}


const func1 = function(e) {
	return function(e) {
		cell = e.target.cellIndex;
		row = e.target.parentNode.rowIndex;		
		if(validate(cell, row)){
			paint(cell, row);
		}else{
			alert('Ընտրիր նավը!');
		}
	}
}


const setValue = func1();
const drowTable = function() {
    for(let i = 0; i< size; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j< size; ++j) {
            const td = document.createElement('td');
			td.setAttribute('onclick', 'setValue(event)');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


const addShips = function(e) {
	const div = document.getElementsByTagName('div')[0];
	div.style.display = 'block';
}


const btnStartGame = document.getElementById('btnStartGame');
btnStartGame.addEventListener('click', drowTable);
const btnAddShips = document.getElementById('btnAddShips');
btnAddShips.addEventListener('click', addShips);
