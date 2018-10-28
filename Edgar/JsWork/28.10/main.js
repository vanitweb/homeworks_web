var f =  function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments);
}(1, 2, 3,"string", true);



function simple(x,y){
let i, j, parz;
for (i = x; i < y; i++) {
parz = true;
    for (j = 2; j < i; j++){
        if (i % j === 0) {
        parz = false;
    }
}
    if (parz) {
        console.log(` ${i} թիվը պարզ է:`);
    }
}
}
simple(1,100);



function fib(x){
let f1 = 1;
let f2 = 1;
console.log(`${f1} `);
console.log(`${f2} `);
while(f2 <= x && f1+f2 < x ){
	let l = f2;
	f2 += f1;
	f1 = l;
	console.log(`${f2} `);
}
}
fib(200);