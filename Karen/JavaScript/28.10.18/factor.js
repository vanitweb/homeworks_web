setTimeout(factTime, 10000, 5);
function factTime(n) {
	let f = 1, k = 1;
	for (let i = 1; i <= n; i++) {
		f *= i;
	}
	console.log(f);
	let sI = setInterval(checkFactTime,2000, 5);
	function checkFactTime(a) {
	    for (let i = 1; i <= a; i++) {
		    k *= i;
	    }
	    if (f == k) {
		    console.log(k/2);
	    }
        clearInterval(sI);
    }
}