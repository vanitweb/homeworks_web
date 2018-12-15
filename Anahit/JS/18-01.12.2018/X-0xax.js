//X-0 xax

function reset() {
    const h = document.createElement('h1');
    document.body.appendChild(h);
    h.style.color = 'red';
    h.innerHTML = 'Game Over';
    setTimeout(function() {
                   h.style.opacity = '0';
                   document.getElementsByTagName('button')[0].style.display = 'block';
                   const tdArray = document.getElementsByTagName('td');
                   for(let i = 0; i < CELL_SIZE * CELL_SIZE; ++i) {
                       tdArray[i].innerHTML = "";
                   }
               }, 5000);
}
const CELL_SIZE = 3;
const x = function() {
    let count = 0;
    let isX = true;
    return function(e){
        if (!e.target.textContent) {
            count++;
            e.target.textContent = isX ? 'X' : '0';
            isX = !isX;   
            const tdArray = document.getElementsByTagName('td');
            if(count >= CELL_SIZE * 2 - 1) {
                for(let i = 0; i < CELL_SIZE * CELL_SIZE; i += CELL_SIZE) {
                    let tdCount = CELL_SIZE - 1;
                    for(let j = 1; j < CELL_SIZE; ++j) {
                        if(tdArray[i].innerHTML === tdArray[i + j].innerHTML) {
                           tdCount--; 
                        }
                    }
                    if(tdCount == 0) {
                        console.log(`xaxn avartvec haxtec  ${tdArray[i].innerHTML} `);
                        setTimeout(reset(), 5000);
                        return;
                    } else if(tdCount !== 0) {
                        for(let i = 0; i < CELL_SIZE; i ++) {
                            let tdCount = CELL_SIZE - 1;
                            for(let j = CELL_SIZE; j < CELL_SIZE * CELL_SIZE; j += CELL_SIZE) {
                                if(tdArray[i].innerHTML === tdArray[i + j].innerHTML) {
                                    tdCount--;
                                 }
                            }
                            if(tdCount == 0) {
                                console.log(`xaxn avartvec haxtec  ${tdArray[i].innerHTML} `);
                                setTimeout(reset(), 5000);
                                return;
                            } else if(tdCount !== 0) {
                                let td1 = tdArray[0];
                                let tdCount1 = CELL_SIZE - 1;
                                for(let i = CELL_SIZE + 1; i < CELL_SIZE * CELL_SIZE; i += CELL_SIZE + 1){
                                    if(td1.innerHTML === tdArray[i].innerHTML) {
                                        tdCount1--;  
                                    }
                                }
                                if(tdCount1 == 0) {
                                     console.log(`xaxn avartvec haxtec  ${tdArray[i].innerHTML} `);
                                     setTimeout(reset(), 5000);
                                     return;
                                } else if (tdCount !== 0) {
                                    let td2 = tdArray[CELL_SIZE - 1];
                                    let tdCount2 = CELL_SIZE - 1;
                                        for(let i = CELL_SIZE + 1; i < CELL_SIZE * CELL_SIZE; i += CELL_SIZE - 1){
                                            if(td2.innerHTML === tdArray[i].innerHTML) {
                                                tdCount2--;
                                            }
                                        }
                                        if(tdCount2 == 0) {
                                            console.log(`xaxn avartvec haxtec  ${tdArray[i].innerHTML} `);
                                            setTimeout(reset(), 5000);
                                            return;
                                        } else if(count === CELL_SIZE * CELL_SIZE) {
                                            console.log("xaxn avartvec voch voq chhaxtec");
                                            setTimeout(reset(), 5000);
                                        }   
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
const setValue = x();
const drawTable = function() {
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i < CELL_SIZE; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j < CELL_SIZE; ++j) {
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

