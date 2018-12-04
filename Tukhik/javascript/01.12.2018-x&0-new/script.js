'use strict';
const x = function(CELL_SIZE) {
    let count = 0;
    let isX = true;
    return function(e){
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
            let cell = document.getElementsByTagName("td");
          if(count > 2*CELL_SIZE-1){
             for (i = 0; i < CELL_SIZE; i++){
                if(cell[i].innerHTML != cell[0].innerHTML){
                  i = i + CELL_SIZE;
                }
              else {
              if(cell[0].innerHTML == 'X'){
                alert('haxtaec X');
                document.getElementsByTagName('button')[0].textContent ="New Game";
                document.getElementsByTagName('button')[0].style.display = 'block';
                const table = document.getElementsByTagName('table')[0];
                table.innerHTML = "";
                isX = !isX;
                 break;
              }
              else {
                alert('haxtaec 0');
                document.getElementsByTagName('button')[0].textContent ="New Game";
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