const Size = 8;
const clickedQar = {isWhite: true};

const checkStep = function(cell) {
	if(true) {
		//console.log('work');
	}
}

const isQar =  function(cell) {
	if(clickedQar.isWhite && cell.textContent === "0" || !clickedQar.isWhite && cell.textContent === "1") {
		return true;
	}
}


const ontabelClick = function(event){
	event.target.textContent = '';
	if(isQar(cell)) {
		clickedQar.x = e.target.parentNode.rowIndex;
		clickedQar.y = e.target.cellIndex;
		
	} 
	else {
		checkStep(e.target);
	}
}

const drawTable = function() {
	let mainBlock = document.querySelector('.main-block');
   	let block;
	let flag = true;
	for (let i = 0; i < Size; i++){
        for (let j = 0; j < Size; j++){
			
            if (j == 0){
				flag = !flag;
			} 
			
            block = document.createElement('div');
			
			if(flag){
				block.className = 'block black';
			} 
			
            else{
				block.className = 'block white';
			} 
			
            mainBlock.appendChild(block);
            flag = !flag;
			block.addEventListener('click', ontabelClick);
			isQar(block);
		}
    }
}


const drawQar = function(index) {
	let block = document.getElementsByClassName('black');
	let car = clickedQar.isWhite ? '1' : '0';
	let to = Size*Size/2;
	for(let i = index; i < to; i++){
		if(i < 12){
			block[i].textContent = car;
		}	
		else if(i >=20 ){
			clickedQar.isWhite = false;	
			block[i].textContent = car;
		}
	}
}


/*const isFuk = function(indexX, indexY) {
	//payman (true : false);
}*/

const startGame = function() {
	drawTable();
	drawQar(0);
	drawQar(20);
}

startGame();