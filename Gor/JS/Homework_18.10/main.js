function first(number){
  
    return function second(){
         let sum = number;
        if(sum <= 20){
               number++;
        console.log(number);
        }
    }
        
}
let f = first(20);
setInterval(f, 200);