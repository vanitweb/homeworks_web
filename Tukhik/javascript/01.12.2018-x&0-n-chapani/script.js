'use strict';
let isX
const x = function() {
    let count = 0;
    isX = true;
    let table = document.getElementsByTagName("table")[0]; 
    let tr = document.getElementsByTagName("tr"); 
    let td = document.getElementsByTagName("td");
    return function(e){
        if (!e.target.textContent) {
            count++;
            let cell = e.target || window.event.srcElement;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
            if(count >= 2*CELL_SIZE-1){
                for(let i = 0; i < CELL_SIZE; i++){
                    let qanak = 0;
                    if(tr[e.target.cellIndex].children[i].textContent  == e.target.textContent ){
                        qanak++
                        if(qanak = CELL_SIZE){
                            alert(`haxtec ${e.target.textContent} xaxacox@`);
                                newGame();
                                break;
                            }
                        }
                    }
                    for(let i = 0; i < CELL_SIZE; i++){
                    let qanak2 = 0;
                    if(tr[i].children[e.target.cellIndex].textContent === e.target.textContent  ){
                        qanak2++
                        if(qanak2 = CELL_SIZE){
                            alert(`haxtec ${e.target.textContent} xaxacox@`);
                        newGame();  
                        break;
                        } 
                        }   
                     for(let i = 0; i < CELL_SIZE; i++){
                    if(e.target.cellIndex  === e.target.parentNode.rowIndex){
                        let qanak3 = 0;
                        if(tr[e.target.parentNode.rowIndex].children[e.target.cellIndex].textContent  == e.target.textContent ){
                        qanak3++
                            if(qanak3 = CELL_SIZE){
                                alert(`haxtec ${e.target.textContent} xaxacox@`);
                                newGame();
                                break;
                            }
                        }
                    }
                    else if (e.target.cellIndex  + e.target.parentNode.rowIndex  == CELL_SIZE){
                        let qanak4 = 0;
                        if(tr[CELL_SIZE-i].children[i].textContent  == tr[e.target.parentNode.rowIndex].children[e.target.cellIndex].textContent ){
                            qanak4 ++
                            if(qanak = CELL_SIZE){
                                alert(`haxtec ${e.target.textContent} xaxacox@`);
                                newGame();
                                break;
                            }
                         }
                    }
                }
            }
        }
    }

let newGame =function () {
    
    document.getElementsByTagName('button')[0].textContent ="Try again";
    document.getElementsByTagName('button')[0].style.display = 'block';
    const table = document.getElementsByTagName('table')[0];
    table.innerHTML = "";
    isX = !isX;
}

const CELL_SIZE = 3;
const setValue = x();
const drawTable = function() {   
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
