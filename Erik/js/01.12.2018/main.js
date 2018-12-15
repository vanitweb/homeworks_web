let dasht = [
	[" ", " ", " "], 
	[" ", " ", " "],
	[" ", " ", " "]
];
//console.log(dasht);

function fun(x, y, pox) {
	if (dasht[x][y] = " "){
		dasht[x][y] = pox;
	}else{
		console.log("chexagfhfedv");
	}
	if (dasht[0][0] === "X" && dasht[0][1] === "X" && dasht[0][2] === "X") {
		console.log("haxtanak x");
	}
	if (dasht[1][0] === "X" && dasht[1][1]  ==="X" && dasht[1][2] === "X") {
		console.log("haxtanak x");
	}
	if (dasht[2][0] === "X" && dasht[2][1] === "X" && dasht[2][2] === "X") {
		console.log("haxtanak x");
	}
	if (dasht[0][0] === "X" && dasht[1][0] === "X" && dasht[2][0] === "X") {
		console.log("haxtanak x");	
	}
	if (dasht[0][1] === "X" && dasht[1][1] === "X" && dasht[2][1] === "X") {
		console.log("haxtanak");
	}
	if (dasht[0][2] === "X" && dasht[1][2] === "X" && dasht[2][2] === "X") {
		console.log("haxtanak");
	}
	if (dasht[0][0] === "X" && dasht[1][1] === "X" && dasht[2][2] === "X") {
		console.log("haxtanak");
	}
	if (dasht[0][2] === "X" && dasht[1][1] === "X" && dasht[2][0] === "X") {
		console.log("haxtanak");
	}
	if (dasht[0][0] === "O" && dasht[0][1] === "O" && dasht[0][2] === "O") {
		console.log("haxtanak O");
	}
	if (dasht[1][0] === "O" && dasht[1][1]  ==="O" && dasht[1][2] === "O") {
		console.log("haxtanak O");
	}
	if (dasht[2][0] === "O" && dasht[2][1] === "O" && dasht[2][2] === "O") {
		console.log("haxtanak O");
	}
	if (dasht[0][0] === "O" && dasht[1][0] === "O" && dasht[2][0] === "O") {
		console.log("haxtanak O");	
	}
	
	if (dasht[0][1] === "O" && dasht[1][1] === "O" && dasht[2][1] === "O") {
		console.log("haxtanak");
	}
	if (dasht[0][2] === "O" && dasht[1][2] === "O" && dasht[2][2] === "O") {
		console.log("haxtanak");
	}
	if (dasht[0][0] === "O" && dasht[1][1] === "O" && dasht[2][2] === "O") {
		console.log("haxtanak");
	}
	if (dasht[0][2] === "O" && dasht[1][1] === "O" && dasht[2][0] === "O") {
		console.log("haxtanak");
	}
	console.log(dasht);
}