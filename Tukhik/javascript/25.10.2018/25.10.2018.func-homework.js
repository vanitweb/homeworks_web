function mutq(p1, p2, p3) {
	let arr = [];
	arr[0] = p1;
	for (let k = 0; arr[k] < p2 ; k ++) {
		if(arr[k] + p3 <= p2) {
			arr[k + 1] = arr[k] + p3;
		}
	}
return arr;
}
console.log(mutq(1, 16, 2))

function net(elements) { 
	let qanak = 0, j; long = elements.length-1;
	for (let i = 0; i <= long; i++) {
		if (elements[i] === "<" ) {
			j = 1;
			while (elements[i + j] === "-") {
				j++;
			}
			if (elements [i + j] === "<" && elements [i + j + 1] === "<" && j > 1) {
				qanak++;
			}
		}
		if (elements[i] === ">" && elements[i + 1] === ">" && j > 2) {
			j = 2;
			while (elements[i + j] === "-") {
				j++;
			}
			if (elements[i + j] === ">") {
				qanak++;
			}
		}
	}
return qanak;
}
console.log(net("<--<<<<-<<-<<>-->><----<<"));
//<--<<, >>-->

   