console.log(`arajadranq 2`);
//hashvel tvi faktorial yev bajanel 2-i
var timer1 = setInterval(function() {
  console.log("unknown");
}, 2000);

var factor = function() {
function faktorial(n){
	let k = 1;
	for (i = 1; i <= n; i++){
		k *= i;	
	}
	return k;
}
console.log (faktorial(5) ); 
console.log((faktorial(5))/2);
}
setTimeout(factor, 10000);

setTimeout(function(){
	clearInterval(timer1);
	console.log();
}, 10000); 

