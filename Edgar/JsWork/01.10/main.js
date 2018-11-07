/*Ֆունկցիա, որը ավելացնում է ամեն կանչից 
հետո տրված արգումենտը ավելացնում է 1-ով*/
function f1(num) {
    return function c() {
      return ++num;
    }
}
let y = f1(5);
console.log(y());
console.log(y());
console.log(y());


/*Ինչ արժեք ունի result փոփողականը՞ 46՞ */
var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
console.log(result);
function mystery(input){
    var secret = 4;
    input += 2;
    
    function mystery2(multiplier){
       multiplier *= input;
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

<<<<<<< HEAD
/*
1-20tvery tpel 5 v heto;
get set interval metody*/
=======
/*ֆունկցիա, որը 6-րդ կանչով, կանչում է ուրիշ ֆունկցիա*/
function main(second, count){
    let i = 0;
    return function first(){
        i++;
        console.log("first function");
          if(i === count) {
            second();
        }
    }
}
function second(){
      console.log("Second function");
}
let m = main(second, 5);
for(let j = 0; j < 5; j++){
m();
}






>>>>>>> ba9c8d811cb93fdeaf8c1f3f74764544d12581d1
