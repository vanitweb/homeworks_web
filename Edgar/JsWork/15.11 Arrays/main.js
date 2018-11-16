/*let arr = ["a", [12,45,7,1,20,5], "c", "d", "e", ["name1", "name2"], 25];

function copy(arg){
let arrCopy = new Array();
let y;
    for(let i = 0; i<arg.length; i++){
        if(Array.isArray(arg[i])){
          y = arg[i];
        	arrCopy.push(y);
            console.log("arrCopy", arrCopy);
            return copy(y);
    }
    
}
    return arrCopy;
}
console.log('MAIN', copy(arr));

arr[1][2] = "5";
console.log('arr', arr);

function copy2(arg2){
    let arr2 = [];
    let y;
    const map1 = arg2.map(x => x);
        if(Array.isArray(x)){
        	y = arg2[i];
        	arr2.concat(y);
            console.log("arr2", arr2);
            return copy2(arr2);
        
        arr2.push(arg2[i]);
}
    return arr2;
}
console.log("map :", copy2(arr));
console.log("map :", copy2(arr));*/


// 0. (Դասարանային) Գրել ֆունկցիա, որը կհարթեցնի տրված զանգվածը։ Օրինակ
let mass = [1, [2], [3, [[4]]],[5,6]];
function make_flat(arg){
   return arg.reduce((acc, val) => Array.isArray(val) ? acc.concat(make_flat(val)) : acc.concat(val), []);
}
console.log("make_flat()", make_flat(mass));

//1.Հաշվել զանգվածի բոլոր դրական թվերի գումարը։
let r = [1, 2, 3, 5, 1, 0, -6];
function m(ar){
    let summa = 0;
for (var i = 0; i < ar.length; i++) {
    if(ar[i] > 0){
        summa += ar[i]; 
    }
}
        console.log("summa", summa);
}
m(mass);

//Առանձնացնել մասիվի դրական տվերը
let positiv = r.filter(function(v) {
    return v > 0; 
  });
 // նոր մասսիվը փոխանցել reduce Ֆունկցիային, վերադարձնելով դրական թվերի գումարը 
let g = positiv.reduce(function(sum, val){
  return sum + val;
});
    console.log("g", g);

// 2. Տրված զանգվածից ստանալ նոր զանգված, որի յուրաքանչյուր էլեմենտը տրված զանգվածի էլեմենտի կրկնապատիկն է։
let array1 = [1, 4, 65, 2.3, 3, 2, 36, 5];
function newArrSqrt(data){
let sqrt = data.map(x => x * 2);
return sqrt;
}
console.log("newArrSqrt", newArrSqrt(array1));

//4. Գրել ֆունկցիա, որը կգտնի երկու զանգվածների չկրկնվող էլեմենտները։
let zangvac_1 = ["data6","data1", "data2", "data3", "data4", "data5" ];
let zangvac_2 = ["Alpha1", "data2", "data3", "data7", "data6"];

function returnObj(ob1, ob2) {
  let z =  ob1.filter(function(val) {
  return ob2.indexOf(val) === -1;
});
  let z2 = ob2.filter(function(val2) {
  return ob1.indexOf(val2) === -1;
 });
return `in zangvac_1: ${z}, \nin zangvac_2: ${z2}`;
}

console.log(returnObj(zangvac_1,zangvac_2));

