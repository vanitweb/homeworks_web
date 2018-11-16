let arr = ["a", [12,45,7,1,20,5], "c", "d", "e", ["name1", "name2"], 25];

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

/*function copy2(arg2){
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
console.log("map :", copy2(arr));*/