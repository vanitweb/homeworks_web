//2.զանգվածը աճման կարգով դասավորման խնդիր
console.log("սկզբնական զանգվածն է 5,1,2,7,9,5");
let array = [5,1,2,7,9,5];
for(let j = 0; j < array.length - 1; j++){
    for(let i = 0; i < array.length; i++){
        if(array[i] >= array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
}
console.log("սորտավորելուց հետո կստացվի");
console.log(array);
