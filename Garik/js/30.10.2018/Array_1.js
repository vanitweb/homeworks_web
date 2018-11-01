//homework_1
let factorial = 1,
    n = 10;
setTimeout(function(){
    for(i = 2; i <= n; i++){
        factorial *= i;
    }   
    return factorial;
},10000);
let stugum = setInterval(function(){
    if(factorial === 1){
            console.log(`Հաշվում է ${n} -ի ֆակտորյալը ....`)
        }
    else{
        clearInterval(stugum)
            console.log(`${n} -ի ֆակտորյալ / 2 = ${factorial / 2}`)
        }
},2000)
//homework_2
function name(a, b){
    let sum;
    sum = a + b;
    console.log(`առաջին թիվ = ${a} \nերկրորդ թիվ = ${b}\n${sum} = առաջին թիվ + երկրորդ թիվ`);
    return function name(a, b){
        sum = sum - a;
        console.log(`${sum} = արդյունք - առաջին թիվ`)
    }
}
let t = name(10, 2);
t(10, 2)
//homework 3
let sum1,
    a = 10,
    b = 2;
console.log(`առաջին թիվ = ${a} \nերկրորդ թիվ = ${b} `)
setTimeout(function(){
    sum1 = a + b;
    console.log(`${sum1} = գումար առաջին թիվ + երկրորդ թիվ ::  2 վայրկյանում`);
    return sum1
},2000)
let stugum1 = setInterval(function(){
    if(sum1 !== undefined){
        clearInterval(stugum1);
        setTimeout(function(){
            sum1 = sum1 - a;
            console.log(`${sum1} = արդյունք - առաջին թիվ ::  1 վայրկյանում`);
            return sum1 
        },1000)
    }
},0)
let stugum2 = setInterval(function(){
    if(sum1 === b){
        clearInterval(stugum2);
        setTimeout(function(){
            sum1 = sum1 / 2;
            console.log(`${sum1} = արդյունքը / 2 ::  1 վայրկյանում`);
            return sum1 
        },1000)
    }
},0)