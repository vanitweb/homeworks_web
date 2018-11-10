//Task2 objects diff - kisat e
function getDiff(obj1,obj2) {
    const obj3 = {};
    let count = 0;
    for(let key1 in obj1) {
        for(let key2 in obj2) {
            if(key1 === key2) {
                break;
            } else {
                count++;
            } 
        }
        //ete obj1-i 1-in key@ obj2-i bolor keyeri het stugela ev nuyn chi exel           
        if(count > Object.keys(obj2).length){
            obj3[key1] = obj1[key1];
        }
    }
    return obj3; 
}
const obj1 = {a: 2, b: 2, c: 3, e: 4};
const obj2 = {a: 2, b: 2, c: 3, d: 4};

console.log(getDiff(obj1,obj2)); 
