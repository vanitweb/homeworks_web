'use strict';
const x = function() {
    let count = 0;
    let isX = true;
    let table = document.getElementsByTagName("table")[0]; 
    let tr = document.getElementsByTagName("tr"); 
    let td = document.getElementsByTagName("td");
    return function(e){
        if (!e.target.textContent) {
            count++;
            let cell = e.target || window.event.srcElement;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
            if(count > 2*CELL_SIZE-1){
                let qanak = 0;
                for(let i = 0; i < CELL_SIZE; i++){
                    if(table.tr[e.target.parentNode.rowIndex].td[i] == table.tr[e.target.parentNode.rowIndex].td[0]){
                        qanak++
                        if(qanak = CELL_SIZE){
                                alert(`haxtec ${table.tr[e.target.parentNode.rowIndex].td[0]} xaxacox@`); 
                                newGame();
                                break;
                            }
                        }
                        qanak = 0;
                        if(table.tr[i].td[e.target.cellIndex] === table.tr[0].td[e.target.cellIndex] ){
                        qanak++
                        if(qanak = CELL_SIZE){
                            alert(`haxtec ${table.tr[e.target.parentNode.rowIndex].td[0]} xaxacox@`); 
                            newGame();
                            break;
                        }
                    }
                    if(e.target.cellIndex === e.target.parentNode.rowIndex){
                        qanak = 0;
                        if(table.tr[e.target.parentNode.rowIndex].td[e.target.cellIndex] == table.tr[0].td[0]){
                        qanak++
                            if(qanak = CELL_SIZE){
                                alert(`haxtec ${table.tr[0].td[0]} xaxacox@`); 
                                newGame();
                                break;
                            }
                
                        }
                    }
                    else if (e.target.cellIndex + e.target.parentNode.rowIndex == CELL_SIZE){
                        qanak = 0;
                        if(table.tr[CELL_SIZE-i].td[i] == table.tr[e.target.parentNode.rowIndex].td[e.target.cellIndex]){
                            qanak ++
                            if(qanak = CELL_SIZE){
                                alert(`haxtec ${table.tr[e.target.parentNode.rowIndex].td[e.target.cellIndex]} xaxacox@`); 
                                newGame();
                                break;
                            }
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

         //[].forEach.call(row.querySelectorAll('td'),node=>node.onclick=myPosition);
                 


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



// let tbl = document.getElementsByTagName("table")[0];
// function alertRowCell (e) {
//   var cell = e.target || window.event.srcElement;
//   if ( cell.cellIndex >= 0 )
//     alert( cell.cellIndex + ' : ' + cell.parentNode.rowIndex );
// }

// if ( tbl.addEventListener ) {
//   tbl.addEventListener("click", alertRowCell, false);
// } else if ( tbl.attachEvent ) {
//   tbl.attachEvent("onclick", alertRowCell);
// }




    /////https://jsbin.com/bezezesoda/edit?html,js,output -nayel