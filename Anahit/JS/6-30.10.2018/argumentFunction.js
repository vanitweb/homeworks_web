/* 3. Գրել F ֆունկցիա, որը արգումենտում ստանում է ֆունկցիա և մի քանի թիվ և նրանց գումարը հաշվելուց հետո կանչում փոխանցված ֆունկցիան ստացված արժեքով։ F ֆունկցիան պետք է կանչել 3 տեղից
        - Փոխանցել print ֆունկցիան, որը կարտածի արգումենտով ստացված թիվը - F(print, 4, 5, 6)
       - Փոխանցել square ֆունկցիան, որը կարտածի արգումենտով ստացված  թվի քառակուսին - F(square, 4, 5, 6)
       - Փոխանցել prime ֆունկցիան, որը կարտածի True եթե արգումենտով ստացված թիվը պարզ է, False՝ հակառակ դեպքում- F(prime, 4, 5, 6) (edited)*/

function print(num) {
    return num;
}
function square(num) {
    return (num * num);
}
function prime(num) {
    let count = 2;
    for(let i = 2; i <= num / 2; i++) {
	if(num % i === 0) count++;
    }
    if(count === 2){
         return true;
    } else {
        return false;
    }
}
function F(fun,arg1,arg2,arg3) {
     let sum = arg1 + arg2 +arg3;
     return (fun(sum));
}
console.log(F(prime,2,2,3));
console.log(F(square,1,2,1));
console.log(F(print,2,4,1));
