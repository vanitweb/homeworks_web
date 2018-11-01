function sm(a, b) {
	let sum = 0;
	sum = a + b;
	console.log(sum);
	return sm();
	function sm() {
		let mij = 0;
		mij = (a + b)/2;
		console.log(mij);
	}
}
sm(5, 9);