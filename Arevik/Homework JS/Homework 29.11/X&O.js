let arr = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];
let player1 = 'x';
let player2 = 'o';
arr[0][2] = 'x';
arr[2][0] = '0';
arr[1][1] = 'x';
arr[2][1] = '0';

function Game(arr) {
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			for(let n = 4; n < 9; n++){
				if(n % 2 != 0 && arr[i][j] === 2){
					arr[i][j] =='x';
				}
				if(arr[0][0] === 'x' && arr[0][1] === 'x' && arr[0][2] === 'x' || 
					arr[1][0] === 'x' && arr[1][1] === 'x' && arr[1][2] === 'x' ||
					arr[2][0] === 'x' && arr[2][1] === 'x' && arr[2][2] === 'x' ||
					arr[0][0] === 'x' && arr[1][0] === 'x' && arr[2][0] === 'x' ||
					arr[0][1] === 'x' && arr[1][1] === 'x' && arr[2][1] === 'x' ||
					arr[0][2] === 'x' && arr[1][2] === 'x' && arr[2][2] === 'x' ||
					arr[0][0] === 'x' && arr[1][1] === 'x' && arr[2][2] === 'x' ||
					arr[0][2] === 'x' && arr[1][1] === 'x' && arr[2][0] === 'x' ) {
						console.log('win player1');
					}
				if(n % 2 == 0 && arr[i][j] === 2){
					arr[i][j] =='0';
					if(arr[0][0] === '0' && arr[0][1] === '0' && arr[0][2] === '0' || 
					arr[1][0] === '0' && arr[1][1] === '0' && arr[1][2] === '0' ||
					arr[2][0] === '0' && arr[2][1] === '0' && arr[2][2] === '0' ||
					arr[0][0] === '0' && arr[1][0] === '0' && arr[2][0] === '0' ||
					arr[0][1] === '0' && arr[1][1] === '0' && arr[2][1] === '0' ||
					arr[0][2] === '0' && arr[1][2] === '0' && arr[2][2] === '0' ||
					arr[0][0] === '0' && arr[1][1] === '0' && arr[2][2] === '0' ||
					arr[0][2] === '0' && arr[1][1] === '0' && arr[2][0] === '0') {
						console.log('win player2');
					}
				}
			}
		}
	}
}
Game([['x', 'x', 'x'], ['0', 'x', '0'], ['0', '0', '0']]);

