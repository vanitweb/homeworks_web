//Classwork_15.11
let arr = ["a", [12,45,7,1,20,5], "c", "d", "e", ["name1", "name2"], 25];

function copy(arg){
const arrCopy = new Array();
let iterator1;
    for(let i = 0; i<arg.length; i++){
        if(Array.isArray(arg[i])){
            arrCopy.push(arg[i]);
           }else{
        arrCopy.push(arg[i]);
           }
    }
    
    return arrCopy;
}
console.log('MAIN', copy(arr));
//Homeworks_15.11