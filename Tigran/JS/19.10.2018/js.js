// mijin tvabanakan
let a = 8;
let gum = 0;
let sum;
for (let i = 0; i <= a; i++) {
	gum += i;
}
sum = gum/(a+1);
console.log(` 0 ic ${a} tveri mijin tvabanakann e ${sum} `);


// fibonachi

let a1 = 0,
	a2 = 1,
	a3,
	n = 0;
console.log(`${a1} \n${a2}`);
while(n <= 200){ 
	a3 = (a1 + a2);
	a1 = a2; 
	a2 = a3;
	console.log(`${a3}`);
	n = a3 ;
}
console.log(`Fibonacci tver@ minchev ${n}_@`);


let hat = 50;
console.log(`parz_tver@ - [0, ${hat}]`)
console.log("2");console.log("3");
for(var parz_tiv = 4; parz_tiv <= hat; parz_tiv++){
    for(var i = 2; i < (parseInt(Math.sqrt(parz_tiv)) + 1); i++){
        if(parz_tiv % i === 0){
            break;
        }    
    }
    if(i == parseInt(Math.sqrt(parz_tiv)) + 1){
    	console.log(parz_tiv);
    }
}



