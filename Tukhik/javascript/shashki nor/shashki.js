const CELL_SIZE = 8;
let count = 0;
let spitak = "1";
let sev = "2";
const qayl = function() {
	
}


const stugum = function(event, guyn) {
	let row = event.target.parentNode.rowIndex;
	let cell = event.target.cellIndex;
	guyn = event.target.textContent;
	const td = document.getElementsByTagName('td');
		if(guyn === spitak) {
			
			if(td[row+1][cell+1].textContent === "1" || td[row+1][cell-1].textContent=== "1"  ){
				alert ("sxal clic");
			}
			else alert("qayl()");
		}
		else {
			alert ("sxal clic");
		}
}


const setValue = function(event) {
	
	if(count%2 ===0 ){
		
		stugum(event, spitak);
	}
	else {
		stugum(event, sev);
	}
	
}



const drawTable = function() {   
    const table = document.getElementsByTagName('table')[0];
    for(let i = 0; i< CELL_SIZE; ++i) {
        const tr = document.createElement('tr');
        for(let j = 0; j< CELL_SIZE; ++j) {
            const td = document.createElement('td');
            td.setAttribute('onclick', 'setValue(event)');
			if((i + j) % 2 === 0) {
				td.style.backgroundColor = "lightblue";
				
				if( i <=2){
					td.textContent = "1";
					
				}
				else if(i >= 5){
					td.textContent = "2";
					
				}
			}
            tr.appendChild(td);
			
        }
        table.appendChild(tr);
		
		
    }
	
}

const startGame = function() {
    drawTable();
   document.getElementsByTagName('button')[0].style.display = 'none';    
}
