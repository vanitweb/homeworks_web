function tver(x,y) {
 console.log(x + y);
 return tver();
 function tver() {
     return x - y;
 }
}
console.log(tver(5,6));

let fak = 1;
function faktorial() {
    let tiv = 10;
    for (let i = 1; i <= 10; i++) {
        fak *= i;
    }
    // console.log(fak);
    return fak;
}
setTimeout(faktorial, 10000);

let o = setInterval(function(){ 
    if (fak === 1) {
        console.log("chexav");
    }else{
        console.log(fak,"hashvec");
        clearInterval(o);
    }
}, 2000);

let a = 7, b = 9,arjeq;
function gumarum() {
    arjeq = a + b;
    console.log(arjeq);
    return arjeq;
}
setTimeout(gumarum, 2000);
let interval1 = setInterval(function(){ 
    if (arjeq !== undefined) {
        clearInterval(interval1);
        setTimeout(function(){arjeq = arjeq - a;console.log(arjeq);return arjeq;}, 1000);
    }
}, 100);
let interval2 = setInterval(function(){ 
    if (arjeq === b) {
        clearInterval(interval2);
        setTimeout(function(){arjeq = arjeq / 2;console.log(arjeq);return arjeq;}, 1000);
    }
}, 100);

