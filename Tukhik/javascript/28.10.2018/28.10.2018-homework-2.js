let fak = 1;
function factorial (){
let tiv = 10;
for (i = 1; i <= 10; i++){
fak *= i;
}
console.log(fak);
return fak;
}
setTimeout(factorial,10000);
console.log(fak);

let inter = setInterval(function(){
if (fak === 1) {
console.log(fak, "stuguma");
}else {
console.log(fak / 2, "patasxan");
clearInterval(inter);
}
},2000)