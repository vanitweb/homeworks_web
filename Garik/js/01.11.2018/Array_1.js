//homework 1
//1 chi ashxatum
let x = 0;
let a = "Читайте и отправляйте";
let arr = a.split("");
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i] === arr[j]){
            x++;
        }
    }
    console.log(arr[i],x)
    x = 0; 
}
//2 chi ashxatum
let tar = "т",
    str = "Читайте и отправляйте",
    handipum,
    k;
for(k = -1; handipum != -1; k++){
	handipum = str.indexOf(tar,handipum+1);
}
console.log(k);
//homework 2
let x;
function print(arg){
    console.log(arg)
}
function square(arg){
    console.log(arg * arg)
}
function prime(arg){
    for(var i = 2; i < parseInt(Math.sqrt(arg)) + 1; i++){
        if(arg % i === 0){
            break;
        }
    }
    if(arg !== 1 && i === parseInt(Math.sqrt(arg) + 1)){
        console.log(`${arg} parz tiv e`)
    }else{
        console.log(`${arg} parz tiv che`)
    }
}

function F(f, a , b, c){
    x = a + b + c;
    return f(x)
}
F(print,4,5,6)
F(square,4,5,6)
F(prime,4,5,6)
