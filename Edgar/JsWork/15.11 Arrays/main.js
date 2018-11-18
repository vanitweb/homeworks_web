let arr = ["a", [12,45,7,1,20,5], "c", "d", "e", ["name1", "name2"], 25];


function make_flat(arg) {
    return arg.reduce((acc, val) => Array.isArray(val) ? acc.concat(make_flat(val)) : acc.concat(val), []);
}
console.log("make_flat()", make_flat(arr));





