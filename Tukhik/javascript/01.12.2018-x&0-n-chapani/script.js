'use strict';
const x = function(CELL_SIZE) {
    let count = 0;
    let isX = true;
	let table = document.getElementsByTagName("table")[0]; 
	let syun = document.getElementsByTagName("tr"); 
	let tox = document.getElementsByTagName("td");
    return function(e){
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
            for(let i = 0; i < CELL_SIZE; i++){
				for(let j = 0; j < CELL_SIZE; j++){
					if(
						table.tr[i].td[j].innerHTML === 'X' || 
						table.tr[j].td[i].innerHTML === 'X' || 
						table.tr[j].td[j].innerHTML === 'X' ||  
						table.tr[CELL_SIZE-1-j].td[j].innerHTML === 'X') {
							alert('X');
							document.getElementsByTagName('button')[0].textContent ="Try again";
							document.getElementsByTagName('button')[0].style.display = 'block';
							const table = document.getElementsByTagName('table')[0];
							table.innerHTML = "";
							isX = !isX;
							break;
						}
					if(
						table.tr[i].td[j].innerHTML === '0' || 
						table.tr[j].td[i].innerHTML === '0' || 
						table.tr[j].td[j].innerHTML === '0' ||  
						table.tr[CELL_SIZE-1-j].td[j].innerHTML === '0') {
							alert('0');
							document.getElementsByTagName('button')[0].textContent ="Try again";
							document.getElementsByTagName('button')[0].style.display = 'block'; 
							const table = document.getElementsByTagName('table')[0];
							table.innerHTML = "";
							break;
						}
					
				}
			}
		}
	
	}
	
}
const setValue = x();
const drawTable = function() {
    const CELL_SIZE = 10;
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


const startGame = function() {
	drawTable();
	document.getElementsByTagName('button')[0].style.display = 'none';    
}