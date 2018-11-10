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

let k = 1;
setTimeout(function faktorial(){
	let n = 5;
	for (i = 1; i <= n; i++){
		k *= i; 
	}
	return k;
},10000)

let a = setInterval(function(){
	if(k === 1){
		console.log(123456)
	}else{
		clearInterval(a);
		console.log(k /2);
	}
},2000)




//Task 3.Գործողություններ թվերի հետ

let a= 20, b=30, plus, minus, bazh;
plus = a + b;
setTimeout('console.log(plus)', 2000);
minus = plus - a;
setTimeout('console.log(minus)', 3000);
bazh = minus / 2;
setTimeout('console.log(bazh)', 4000);

	






















