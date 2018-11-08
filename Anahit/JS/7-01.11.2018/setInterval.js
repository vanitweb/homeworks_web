//setInterval function

var date = new Date();
var second = date.getSeconds();
function print() {
    console.log("Hello");
}
function mySetInterval(fun,time) {
    for(let k = 1; k < 50; k++){
        var date1 = new Date();
        var second1 = date.getSeconds();
        if(second1 === second + k * time) return fun;
    }
}
console.log(mySetInterval(print,5));
