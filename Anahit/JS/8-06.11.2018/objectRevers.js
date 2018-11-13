//Task3-objectRevers

let object = {
    key1: 'value1',
    key2: 'value2', 
    key3: 'value3',
    key4: 'value4',
}
function objectRevers(obj) {
    for(key in obj) { 
        let temp = key;
        key = obj[key];
        obj[key] = temp;
        delete obj[temp];
    }
    console.log(obj);
}
objectRevers(object); 
