setTimeout(factTime, 10000, 5);
let f = 1;
function factTime(n) {
	for (let i = 1; i <= n; i++) {
		f *= i;
	}
	console.log(f);
	return f
}
let sI = setInterval(checkFactTime,2000);
function checkFactTime(a) {
	if (f == 1) {
		console.log(111);
	} else {
		clearInterval(sI);
		console.log(f/2);
    }
        
}