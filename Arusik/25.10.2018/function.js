var k = 0;
function sum(a, b, c){
	let m = [];
	for (let i = a; i < b; i += c){
		m[k] = i; k += 1;
		return (m[k]);
	}	
}
function array(){
	for (let j = 0; j <= k; j++){
		console.log(sum(1, 10, 2));
	}
}
	

