/*
function f1(num) {
    return function c() {
      return ++num;
    }
}

let y = f1(5);
console.log(y());
console.log(y());
console.log(y());
*/

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery(input){
    var secret = 4;
    input += 2;
    
    function mystery2(multiplier){
       multiplier += input;
        return secret * multiplier;
    }
    return mystery2;
}
function mystery3(param){
    function mystery4(bonus){
        return param(6) + bonus;
    }
    return mystery4;
}


