<<<<<<< HEAD
'use strict';

const table = document.getElementsByTagName('table')[0];
const button = document.getElementsByTagName('button')[0];

const x = function() {
	let step = 0;
	return function(e){
		if(e.target.textContent === '') {
			if(step % 2 === 0) {
				e.target.textContent = 'X'
			} else {
				e.target.textContent = 'O'
			}
			step++;
            if(step >= size * 2 - 1) {
				check(e, step);
            }
        }
    }
=======
'use strict'
const button = document.getElementsByTagName('button')[0];

const startGame = function(){
    drawTable();
    document.getElementsByTagName("button")[0].style.display = "none";
    let newBtn = document.createElement("button");
    newBtn.setAttribute("onclick", "noric()")
    newBtn.textContent = "noric";
    document.getElementsByTagName("body")[0].appendChild(newBtn);
>>>>>>> be33cebfb4fdcb88cc9faca0e025708c02188994
}
const check = function(e, step) {
	let tdIndex, colIndex, rowIndex;
	const td = document.getElementsByTagName("td");
	for(let i in td) {
		if(td[i] === e.target) {
			tdIndex = i;
		}
	}
	colIndex = tdIndex % size;
	rowIndex = (tdIndex - colIndex) / size;
	checkRow(rowIndex);
	checkCol(colIndex);
	if(rowIndex === colIndex) {
		checkGlxAnk();
	}
	if(rowIndex + colIndex === size - 1) {
		checkErkAnk();
	}
	if(step === size * size) {
		setTimeout(function() {alert("Xaxn avartvec voch voqi")}, 100);
		setTimeout(reset,200);
	}
}
const checkRow = function(rowIndex) {
	const td = document.getElementsByTagName("td");
	let count = 0;
	for(let i = size * rowIndex; i < (rowIndex + 1) * size - 1; i++) {
		if(td[i].textContent === td[i + 1].textContent) {
			count++;
		}
	}
	if(count === size - 1) {
		print(td[rowIndex * size].textContent);
	}
}
const checkCol = function(colIndex) {
	const td = document.getElementsByTagName("td");
	let count = 0;
	for(let i = colIndex; i < size * size - size; i += size) {
		if(td[i].textContent === td[i + size].textContent) {
			count++;
		}
	}
	if(count === size - 1) {
		print(td[colIndex].textContent);
	}
}
const checkErkAnk = function() {
	const td = document.getElementsByTagName("td");
	let count = 0;
	for(let i = size * (size - 1); i > size; i -= size - 1) {
		if(td[i].textContent === td[i - size + 1].textContent) {
			count++;
		}
	}
	if(count === size - 1) {
		print(td[size - 1].textContent);
	}
}

const drawTable = function (m = 3, n = 3) {
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i < m; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j < n; ++j) {
            const td = document.createElement('td');
            td.setAttribute("onclick","xaxacox(event)");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
const gamePlayer = function(){
    let count = 0;
    return function(e){
        let td = document.getElementsByTagName("td")[0];
        if(!e.target.textContent){
            count++; 
            (count % 2 === 0) ? e.target.textContent = "O" : e.target.textContent = "X";
            if(count >= 5){
                console.log(count)
                stugum(e);
            }
        }
    }
}
const xaxacox = gamePlayer();



const stugum = function(e){
    let haaxtanak = false;
    let td = document.getElementsByTagName("td");
    let arg = e.target.textContent;
    for(let i = 0; i <= size - 3; i++){
        for(let j = 0; j < td.length; j += size){
            if(td[i + j].textContent === arg && td[i + j + 1].textContent === arg && td[i + j + 2].textContent === arg) {
                haaxtanak = true;
                alert(`haxtanak ${arg}`);
            }
        }
    }
    for(let i = 0; i < td.length - (2 * size); i++){
        if(td[i].textContent === arg && td[i + size].textContent === arg && td[i + (2 * size)].textContent === arg) {
            haaxtanak = true;
            alert(`haxtanak ${arg}`);
        }
        if(td[i].textContent === arg && td[i + size + 1].textContent === arg && td[i + (2 * size) + 2].textContent === arg) {
            haaxtanak = true;
            alert(`haxtanak ${arg}`);
        }
        if(td[i].textContent === arg && td[i + size - 1].textContent === arg && td[i + (2 * size) - 2].textContent === arg) {
            haaxtanak = true;
            alert(`haxtanak ${arg}`);
        }
    }
    if(haaxtanak === true){
        document.getElementsByTagName("table")[0].style.display = "none";
    }
}
const noric = function(){
    location.reload()
}



  

