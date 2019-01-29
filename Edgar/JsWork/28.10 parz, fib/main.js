var f =  function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments);
}(1, 2, 3,"string", true);


console.log("---------------------------");
function simple(x,y){
let i, j, parz;
let count = 0;
for (i = x; i < y; i++) {
parz = true;
    for (j = 2; j < i; j++){
        if (i % j === 0) {
        parz = false;
    }
}
    if (parz) {
        count++;
        console.log(` ${i}:`);
       
    }
    
}
     console.log(` Ընդամենը ${count} պարզ թիվ:`);
}
simple(1,100);

console.log("---------------------------");
console.log("Ֆիբոնաչիի հաջորդականություն");
function fib(x){
let count2 = 2; 
let f1 = 1;
let f2 = 1;
console.log(`${f1} `);
console.log(`${f2} `);
while(f2 <= x && f1+f2 < x ){
	let l = f2;
	f2 += f1;
	f1 = l;
    count2++;
	console.log(`${f2} `);
}
console.log(`մինչև ${x} թիվը ֆիբոնաչիի ${count2} թիվ կա `);
}
fib(400);
console.log("---------------------------");