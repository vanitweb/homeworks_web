var unknow = function unknow(a,b){
    console.log(a*b);
}
function unknow(a,b){
    console.log(a+b);
function unknow(a,b){ 
    console.log((a+b)/2);
 }
}
unknow(6,8); //48;*/

// ֆունկցիա, որը ստանում է String -բառերի առային տառերը սարքելով մեծատառ
let Str = " list style image";
function camelize(str){
    let newArr = [];
    let r = str.split(" ");
    for(let i = 1 ; i < r.length; i++){
        newArr.push(r[i][0].toUpperCase() + r[i].slice(1)); 
    }
     return newArr.join(" "); 
}
console.log(camelize(Str));

