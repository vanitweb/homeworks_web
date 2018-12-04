let cells = document.querySelectorAll('#field td');
for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', nextStep);
};
let currentGamer = 'X';

function nextStep() {
	this.innerHTML = currentGamer;
	if(currentGamer =='X') {
		currentGamer = '0';
	} else {
		currentGamer = 'X';
	}
	this.removeEventListener('click', nextStep);
	checkWin(cells);
};
function checkWin(cells) {
	let winnComb = [
		[0, 1, 2, 3, 4 ,5, 6, 7, 8, 9],
		[10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
		[20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
		[30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
		[40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
		[50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
		[60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
		[70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
		[80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
		[90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
		[0, 11, 22, 33, 44, 55, 66, 77, 88, 99],
		[9, 18, 27, 36, 45, 54, 63, 72, 81, 90 ],
	];
	for(let i = 0; i < winnComb.length; i++){
		let wc = winnComb[i];
	if(
		cells[wc[0]].innerHTML == cells[wc[1]].innerHTML &&
		cells[wc[1]].innerHTML == cells[wc[2]].innerHTML &&
		cells[wc[2]].innerHTML == cells[wc[3]].innerHTML &&
		cells[wc[3]].innerHTML == cells[wc[4]].innerHTML &&
		cells[wc[4]].innerHTML == cells[wc[5]].innerHTML &&
		cells[wc[5]].innerHTML == cells[wc[6]].innerHTML &&
		cells[wc[6]].innerHTML == cells[wc[7]].innerHTML &&
		cells[wc[7]].innerHTML == cells[wc[8]].innerHTML &&
		cells[wc[8]].innerHTML == cells[wc[9]].innerHTML &&
		cells[wc[0]].innerHTML != ''
	)	
		{
		alert('Win!');
		}
	}
}






