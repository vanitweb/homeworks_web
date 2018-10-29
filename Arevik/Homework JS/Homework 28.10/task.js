//Task 1. unknown ֆունկցիա

function unknown(a, b){
	let sum = a+b;
	function unknown(a, b){
		let	mid = sum/2;
		return mid;
	}
	console.log(unknown());
	return sum;
}
console.log(unknown(20, 60));




// Task 2. Հաշվել թվերի ֆակտորիալը։

// 2 վայրկյան ինտերվալով կրկնում է
let timerId = setInterval(function() {
  console.log( 'ֆակտորիալը հաշված չէ' );
}, 2000);

// 5 վայրկյան հետո դադարեցնում է կրկնությունները
setTimeout(function() {
  clearInterval(timerId);
  console.log( );
}, 12000);

function faktorial(n){
	let k = 1;
	for (i = 1; i <= n; i++){
		k *= i;	
	}
	return k;
}
setTimeout("console.log(`Ֆակրորիալը հաշված է։ ${faktorial(5)}`)", 12000);




//Task 3.Գործողություններ թվերի հետ

let a= 20, b=30, plus, minus, bazh;
plus = a + b;
setTimeout('console.log(plus)', 2000);
minus = plus - a;
setTimeout('console.log(minus)', 3000);
bazh = minus / 2;
setTimeout('console.log(bazh)', 4000);

	






















