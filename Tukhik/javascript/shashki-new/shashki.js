//const clickedQar = function(){isWhite: true};

const drawTabel = function() {
let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;

    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
            if (j==0) flag = !flag;

            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';
            

                        mainBlock.appendChild(block);
            flag = !flag;
        }
    }

}
console.log(drawTabel);

// const drawQar = function(index, value) {
	
// }

// const checkStep = function(cell) {
// 	if(true) {
// 	}
// }

// const isQar =  function(cell) {
// 	if(clickedQar.isWhite && cell.textContent === "0" || !clickedQar.isWhite && cell.textContent === "1") {
// 		return true;
// 	}
// }

// const ontabelClick =  function(e) {
// 	if(isQar(cell)) {
// 		clickedQar.x = e.target.parentNode.rowIndex;
// 		clickedQar.y = e.target.cellIndex;
// 	} else {
// 		checkStep(e.target);
// 	}
// }

// const isFuk = function(indexX, indexY) {
// 	payman (true : false);
// }

const startGame = function() {
	drawTabel();
	// drawQar(0, 0);
	// drawQar(5, 1);
}