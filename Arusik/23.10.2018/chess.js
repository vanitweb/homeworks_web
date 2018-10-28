//Շախմատի տախտակի վրա սպիտակ վանդակների փոխարեն դնել # , իսկ սևերի փոխարեն՝ *
let chess = [];
let n = 8;
for (let i = 0; i < n; i++){
	chess[i] = ['#','#','#','#','#','#','#','#'];
}
for (let i = 0; i < n; i+=2){
		for (let j = 1; j < n; j+=2){
			chess[i][j] = '*';
		}
}
for (let i = 1; i < n; i+=2){
		for (let j = 0; j < n; j+=2){
			chess[i][j] = '*';
		}
}
console.log(chess);