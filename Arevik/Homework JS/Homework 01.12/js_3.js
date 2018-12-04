'use strict';
const x = function() {
    let count = 0;
    let isX = true;
    return function(e){
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
			let cell = document.getElementsByTagName("td"); 
            for(let i = 0; i< 9; i++){
				if(
				cell[0].innerHTML == 'X' && cell[1].innerHTML == 'X' && cell[2].innerHTML == 'X' ||
				cell[3].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[5].innerHTML == 'X' || 
				cell[6].innerHTML == 'X' && cell[7].innerHTML == 'X' && cell[8].innerHTML == 'X' || 
				cell[0].innerHTML == 'X' && cell[3].innerHTML == 'X' && cell[6].innerHTML == 'X' ||
				cell[1].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[7].innerHTML == 'X' ||
				cell[2].innerHTML == 'X' && cell[5].innerHTML == 'X' && cell[8].innerHTML == 'X' || 
				cell[0].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[8].innerHTML == 'X' ||
				cell[2].innerHTML == 'X' && cell[4].innerHTML == 'X' && cell[6].innerHTML == 'X') {
					alert("Win X");
					 
					document.getElementsByTagName('button')[0].textContent ="Try again";
					document.getElementsByTagName('button')[0].style.display = 'block';
					const table = document.getElementsByTagName('table')[0];
					table.innerHTML = "";
					isX = !isX;
					break;
					
				}
				if(
				cell[0].innerHTML == '0' && cell[1].innerHTML == '0' && cell[2].innerHTML == '0' ||
				cell[3].innerHTML == '0' && cell[4].innerHTML == '0' && cell[5].innerHTML == '0' || 
				cell[6].innerHTML == '0' && cell[7].innerHTML == '0' && cell[8].innerHTML == '0' || 
				cell[0].innerHTML == '0' && cell[3].innerHTML == '0' && cell[6].innerHTML == '0' ||
				cell[1].innerHTML == '0' && cell[4].innerHTML == '0' && cell[7].innerHTML == '0' ||
				cell[2].innerHTML == '0' && cell[5].innerHTML == '0' && cell[8].innerHTML == '0' || 
				cell[0].innerHTML == '0' && cell[4].innerHTML == '0' && cell[8].innerHTML == '0' ||
				cell[2].innerHTML == '0' && cell[4].innerHTML == '0' && cell[6].innerHTML == 'X') {
					alert("Win 0");
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



const setValue = x();
const drawTable = function() {
    const CELL_SIZE = 3;
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