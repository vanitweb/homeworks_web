//grel funkcia, vory artahani a-ic b tvery, a-n yev b-n neraryal, c qaylov
function mutq(a, b, c) {
	let arr = [];
	arr[0] = a;
	for (let k = 0; arr[k] < b ; k ++) {
		if(arr[k] + c <= b) {
			arr[k + 1] = arr[k] + c;
		}
	}
	return arr;
}
console.log(mutq(1, 16, 2))

//gtnel neteri qnakay  <--<<   -net, >>--> -net
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


   