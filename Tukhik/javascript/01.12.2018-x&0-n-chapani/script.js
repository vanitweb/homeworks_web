'use strict';
let isX
let k = 0;
let q = 0;
const CELL_SIZE = 10;
const x = function() {
    let count = 0;
    isX = true;
    return function(e){
        if (!e.target.textContent) {
            count++;
            let cell = e.target || window.event.srcElement;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;
            glxavorAnkyunagits(e);
            stugumSyuneriHamar(e);
            yerkrordakanAnkyunagits(e)
            if(count >= 2*CELL_SIZE-1){
<<<<<<< HEAD
                for(let i = 0; i < CELL_SIZE; i++){
                    let qanak = 0;
                    if(tr[e.target.parentElement.rowIndex].children[i].textContent  == e.target.textContent ){
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
=======
            let tbl = document.getElementsByTagName("table")[0];
            stugumToxeriHamar(e);
            }
        }
    }
}
function glxavorAnkyunagits(e){ 
    let tr = document.getElementsByTagName("tr"); 
    let td = document.getElementsByTagName("td"); 
    let cell = e.target || window.event.srcElement; 
    let m = cell.cellIndex
    if(cell.cellIndex == cell.parentNode.rowIndex ) {
        for(let m = 0; m < CELL_SIZE; m++){
            if(cell.cellIndex == m && td[m].textContent == td[cell.cellIndex].textContent){
                k++;
                if(k == CELL_SIZE){
                alert(`haxtec ${cell.textContent}-iky`);
                newGame();
>>>>>>> 8ee4db28201d336aebf5a13dea335bd8d55428de
                }
            }
        }
        
    }
<<<<<<< HEAD
	}
=======
}

function yerkrordakanAnkyunagits(e){
    let tr = document.getElementsByTagName("tr"); 
    let td = document.getElementsByTagName("td");
    let cell = e.target || window.event.srcElement; 
    let n = cell.cellIndex;
    if(cell.cellIndex + cell.parentNode.rowIndex == CELL_SIZE-1) {
        for(let n = 0; n < CELL_SIZE; n++){
            if(n + cell.parentNode.rowIndex == CELL_SIZE-1 && td[n].textContent == td[cell.cellIndex].textContent){
            q++;
                if(q == CELL_SIZE) {
                alert (`haxtec ${e.target.textContent}-iky`);
                newGame();
                }
            }
        }    
    } 
}
 
function stugumToxeriHamar (e) {
    let tr = document.getElementsByTagName("tr"); 
    let td = document.getElementsByTagName("td");
    var cell = e.target || window.event.srcElement;
    let xo = tr[cell.parentNode.rowIndex].textContent;
        if(xo.substring(0, CELL_SIZE) == "XXXXXXXXXX" ||  xo.substring(0, CELL_SIZE) == "0000000000"){
            alert('haxtanak');
            newGame();
        }
}

function stugumSyuneriHamar(e) {   
    let tr = document.getElementsByTagName("tr"); 
    let td = document.getElementsByTagName("td");
    let cell = e.target || window.event.srcElement;
    let syun= 0;
    for(let j = 0; j < CELL_SIZE; j++){
if(tr[j].children[e.target.cellIndex].textContent === e.target.textContent ){
            syun++;
            if(syun == CELL_SIZE){
                
            alert (`haxtecin ${td[cell.cellIndex].textContent} xaxacoxner@`);
            newGame();
            }
        }
    }
>>>>>>> 8ee4db28201d336aebf5a13dea335bd8d55428de
}

let newGame =function () {    
    document.getElementsByTagName('button')[0].textContent ="NewGame";
    document.getElementsByTagName('button')[0].style.display = 'block';
    const table = document.getElementsByTagName('table')[0];
    document.location.reload(true);
}

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
