
console.log(`fibonachii for-ov`);
var a = function (f2){
if (f2 === 1) {
return [0, 1];
}
else {
var f2 = a(f2 - 1);
f2.push(f2[f2.length-1] + f2[f2.length-2]);
return f2;
}
}
console.log(a(10));


console.log(`parz tver`);
var b = function (parz) {
let p;
let k;
for (p = 2; p <= parz; p++){
    for(k = 2; k <= p; k++){
        if (p % k == 0) break;
    }
    if(k == p)
    	return p;

}
}
console.log(b(45));
// console.log(`parz tver`);
// var b = function(parz) {
// if (parz === 1) {
// return [1];
// }
// if (parz === 2) {
// return [1, 2];
// }
// if (parz === 2) {
// return [1, 2, 3];
// }
// else {
// for (p = 4; p <= parz; p++){
// for(k = 2; k <= p; k++){
// if (p % k == 0) break;
// }
// if(k == p);



// return  p;
// }
// console.log(p);