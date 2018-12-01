let dasht = [
	["?","?","?"],
	["?","?","?"],
	["?","?","?"],
];
let qanak = 0;
function nshel(x,y) {
	let haxtanak = false;
	qanak++;
	if (qanak%2 !== 0) {
		dasht[y-1][x-1] = "X";
	}else{
		dasht[y-1][x-1] = "O";
	}
	console.log(dasht);

	if(qanak >= 5){
		stugum("X");
		if (!haxtanak) {
			stugum("O");
		}else{
			console.log("Nichya");
		}
	}
}
function stugum(nshan) {
	if (dasht[0][0] === nshan) {
		if (dasht[0][1] === nshan && dasht[0][2] === nshan) {
			haxtanak = true;
			console.log("haxtar");
		}else if(dasht[1][1] === nshan && dasht[2][2] === nshan){
			haxtanak = true;
			console.log("haxtar");
		}
		else if(dasht[1][0] === nshan && dasht[2][0] === nshan){
			haxtanak = true;
			console.log("haxtar");
		}
	}
	if (dasht[1][0] === nshan && dasht[1][1] === nshan && dasht[1][2] === nshan) {
		haxtanak = true;
		console.log("haxtar");
	}
	if (dasht[0][2] === nshan) {
		if (dasht[1][2] === nshan && dasht[2][2] === nshan) {
			haxtanak = true;
			console.log("haxtar");
		}else if(dasht[1][1] === nshan && dasht[2][0] === nshan){
			haxtanak = true;
			console.log("haxtar");
		}
	}
	if (dasht[0][1] === nshan && dasht[1][1] === nshan && dasht[2][1] === nshan) {
		haxtanak = true;
		console.log("haxtar");
	}
	if (dasht[0][2] === nshan && dasht[1][2] === nshan && dasht[2][2] === nshan) {
		haxtanak = true;
		console.log("haxtar");
	}
}























