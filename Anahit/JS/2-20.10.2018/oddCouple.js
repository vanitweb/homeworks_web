//3.կենտ և զույգ էլեմենտների տեղերը փոխել

let array1 = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
console.log("սկզբնական  զանգվածն է");
console.log(array1);
for( let i = 0; i < array1.length; i += 2 ){
    let temp = array1[i];
    array1[i] = array1[i + 1];
    array1[i + 1] = temp;
}
console.log("կենտ և զույգ էլեմենտների տեղերը փոխած կլինի");
console.log(array1);    
