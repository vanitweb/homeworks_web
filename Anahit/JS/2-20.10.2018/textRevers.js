//1.տեքստի շրջման խնդիր

//length+4 քանի որ length գրելու դեպքում վերջին 2 էլէմենտ էր միայն բերում, array-ը դատարկ  տեղեր ունի վերջից?


let arr = ['a','b','c','d','e'];
let arr1 = [];
console.log("ունեցած տեքստն է abcde");
for( let i = 0; i < arr.length + 4 ; i++ ){
    arr1[i] = arr.pop();
}
console.log("շրջված տեքստը կլինի");
console.log(arr1);
