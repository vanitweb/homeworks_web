let counter = 0;
let setI = setInterval(function check20() {
    counter += 1;	
	console.log(counter);
	if (counter >= 20) {
		clearInterval(setI);
		console.log("The end");
    }
}, 5000);