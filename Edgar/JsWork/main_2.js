/*let count = 0;
const arr = [1,3,4,5,56,7,78,8,9,9,];
for (let item of arr){
    count = item;
   
}
let fl= Math.round(count/11, 2);
    console.log(fl);*/


let count;
const arr = [1,3,4,5,56,7,78,8,9,9,56,56,565,56,56,5];
 for (let item in arr){
    count = 0;
      for (let item1 of arr){
     if(arr[item] == item1){
    count++;
     }
     }
 }
console.log(count);
