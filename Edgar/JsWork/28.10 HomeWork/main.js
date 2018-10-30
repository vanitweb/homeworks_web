/*console.log("Home work 1");
function numb(){
    function numMid(n){
        let k = n.arguments.length;
        return count/k;
    }
    let i;
    let count = 0;
    for(i = 0; i < arguments.length; i++){
        count += arguments[i];
    }
       return (`Գումարը հավասար է - ${count}, \nՄիջին տվաբանականը ~ ${Math.round(numMid(numb))}`);

}

console.log(numb(5,5,10,20,14,58,7,4));
console.log("---------------------------");
console.log("Home work 2");
let c;
function factorial() {
    let num = 5;
    let f = 1;
  if (num === 0 || num === 1){
      console.log(1);
  }
    for (i = 2; i <= num; i++){
        f *= i;
  }
    console.log(f);
}
function check(){
    c = factorial();
} 
setTimeout(check,10000); 
let counter = 0;
let setI = setInterval(function checkUnd(){
    counter += 1;
    if(counter === 10){
        clearInterval(setI);
        console.log("The end of")
    }
    if(c !== undefined){
        console.log(c);
    }else{  
        console.log("Processing...");
    }
},2000);*/
console.log("---------------------------");
console.log("Home work 3");
function mainF(a,b){
setTimeout(function counter(){
    console.log(a+b);
},2000);
setTimeout(function counter(){
     console.log(a-b);
},3000); 
setTimeout(function counter(){
    console.log(a/b);
},4000); 
    return (`Start:\nFirst number is: ${a}\nSecond number is: ${b}`);
}
console.log(mainF(56,10));


