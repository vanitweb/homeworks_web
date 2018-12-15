'use strict';
let isX = true;
let count = 0;
let n = 3;
const setValue = function(e) {
    if (!e.target.textContent) {
        count++;
        e.target.textContent = isX ? 'X' : 'O';
        isX = !isX;
    }
<<<<<<< HEAD
    if (count >= 5) {
    	stugum(e);
=======
    if (count >= 2 * n - 1) {
    	stugum();
>>>>>>> eaf515761b36dd09fd73a1a6ece0ac98a1fd9eef
    };
}

const drawTable = function() {
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i < n; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j < n; ++j) {
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

<<<<<<< HEAD
const stugum = function(e) {
	let n = 3, j = 0;
    let y = e.target.textContent;
	let td = document.getElementsByTagName('td');
	if(td[0].textContent === y && td[1].textContent === y && td[2].textContent === y){
        console.log(12345)
    }
=======
const stugum = function () {
	let j = 0;
	let table = document.getElementsByTagName('table')[0];
	while(j < n) {
		for(let i = 0; i < n - 1; i++) {
			if(table.rows[j].cells[i].textContent == table.rows[j].cells[i + 1].textContent) {
				i++;
				if(i == n) {
					return console.log('haxt tox');
				}
			}
			if(table.rows[i].cells[j].textContent == table.rows[i + 1].cells[j].textContent) {
				i++;
				if(i == n) {
					return console.log('haxt syun');
				}
			}
		}
		j++;
	}
	
>>>>>>> eaf515761b36dd09fd73a1a6ece0ac98a1fd9eef
}