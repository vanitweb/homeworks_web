console.log(`mijin tvabanakan`);
let a = 0;
for(let i = 1; i < 10; i++){
a += i;
}
a = a / 9;
console.log(`միջին թվաբանականն է ${a}`);

console.log(`fibonachii for-ov`);
let c = 0;
let b = 1;
let d = 1; 
for (let i = 2; i < 20; i ++){
c = b;
b = d;
d = c + b;
console.log(d);
}

console.log(`parz tver`);
let p;
let k;
for (p = 2; p <= 21; p++){
    for(k = 2; k <= p; k++){
        if (p % k == 0) break;
    }
    if(k == p)
    	console.log(p);
}