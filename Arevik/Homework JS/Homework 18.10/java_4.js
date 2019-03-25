function Sum(n) {
	for (let i = 2; i < n; i++) {
		for (let j = 2; j <= i; j++){
			if(i % j !== 0) {
				console.log(i);
			}
		}
	}
}
Sum(19);
