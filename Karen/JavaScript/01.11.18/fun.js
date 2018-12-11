function callater (num, k) {
	let a = 1;
	while (a <= num) {
		if (a === 5) {
			return k();
		} else {
			console.log('chka');
		}
		a++;
	}
}
function print () {
	console.log('stacvec');
}
let call = callater (6; print)
call();
call();
call();
call();
call();

call();
call();