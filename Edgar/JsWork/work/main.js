function rand(max) {
    let str = "";
    let str1 = "";
    for (var i = 48; i < 122; i++) {
        if (i >= 58 && i <= 65) continue;
        str += String.fromCharCode(i);
    }
function slic(value){
let words = str.split(' ');
console.log(words[value]);
    for (var i = 0; i < max; i++)
        str1 += str.charAt(Math.floor(Math.random() * str.length));
}
if (typeof str1.indexOf[0] !== "string" && typeof str1.indexOf[1] !== "string") {

}
return str1;
};
console.log(rand(12));

/*__________________________________________________________*/
//arag massiv tpel
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

[2, 5, , 9].forEach(logArrayElements);
// a[0] = 2
// a[1] = 5
// a[3] = 9
/*__________________________________________________________*/
/*Array.map*/
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);
//kam
var roots = numbers.map(Math.sqrt);

console.log(map1);
console.log(roots);
/*__________________________________________________________*/
//reverse key-value
var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(obj =>{ 
   var rObj = {};
   rObj[obj.value] = obj.key;
   return rObj;
});
console.log(kvArray);
console.log(reformattedArray);
/*__________________________________________________________*/
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0); 
});
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
/*__________________________________________________________*/

