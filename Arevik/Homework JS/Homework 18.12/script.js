'use strict';

let cell,cell2, row, row2, shipLenght, ship;
const size = 10;
const table = document.getElementById('firts');
const table2 = document.getElementById('second');

let countship4 = 1;
let countship3 = 2;
let countship2 = 3;
let countship1 = 4;

const delateShip = function(){
	
	let ship4 = document.getElementById('fourShip');
	let ship3 = document.getElementById('threeShip');
	let ship2 = document.getElementById('twoShip');
	let ship1 = document.getElementById('oneShip');
	
	
	switch(shipLenght){
		case 1:
			countship1--;
			if(countship1 === 0){
				ship1.style.display = 'none';
			}
			
			break;
		case 2:
			countship2--;
			if(countship2 === 0) {
				ship2.style.display = 'none';
			};
			break;
		case 3:
			countship3--;
			if(countship3 === 0) {
				ship3.style.display = 'none';
			};
			break;
		case 4:
			countship4--;
			ship4.style.display = 'none';
			break;
	}
}

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
		table.rows[m].cells[len].style.pointerEvents = 'none';
	}else if(n === size - 1){
		table.rows[m].cells[n - 1].style.pointerEvents = 'none'
	}
	else {
		table.rows[m].cells[len].style.pointerEvents = 'none';
		table.rows[m].cells[n - 1].style.pointerEvents = 'none';
	}
	delateShip();
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
const setValue2 = delateShip();
const drowTable = function() {
    for(let i = 0; i< size; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j< size; ++j) {
            const td = document.createElement('td');
			td.setAttribute('onclick', 'setValue(event)');
			td.setAttribute('onblur', 'setValue2(event)');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	btnStartGame.removeEventListener('click', drowTable);
}
const func2 = function(e){
	let krakacNaver = 0;
	return function(e){
		cell2 = e.target.cellIndex;
		row2 = e.target.parentNode.rowIndex;
		if(table.rows[row2].cells[cell2].textContent){
			e.target.style.backgroundColor = 'black';
			krakacNaver++;
			if(krakacNaver >= 20){
				setTimeout("alert('haxtanak!!!')", 300);
			}
		}else{
			alert('Ձախողում');
			e.target.style.backgroundColor = 'gray';
		}
	}
}
const func3 = function(e) {
	return function(e){
		e.target.style.backgroundColor = 'red';
	}
}
const paintRed = func3();
const checkValue = func2();
const drowSecondField = function(){
	for(let i = 0; i< size; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j< size; ++j) {
            const td = document.createElement('td');
			td.setAttribute('onclick', 'checkValue(event)');
			td.setAttribute('onclick', 'checkValue(event)');
			td.setAttribute('oncontextmenu', 'paintRed(event)');
            tr.appendChild(td);
        }
        table2.appendChild(tr);
    }
	btnSecondField.removeEventListener('click', drowSecondField);

}

const addShips = function(e) {
	const div = document.getElementsByTagName('div')[0];
	div.style.display = 'block';
}

const btnSecondField = document.getElementById('btnSecondField');
btnSecondField.addEventListener('click', drowSecondField);
const btnStartGame = document.getElementById('btnStartGame');
btnStartGame.addEventListener('click', drowTable);
const btnAddShips = document.getElementById('btnAddShips');
btnAddShips.addEventListener('click', addShips);
