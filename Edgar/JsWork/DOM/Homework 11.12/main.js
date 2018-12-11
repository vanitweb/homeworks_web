
let object2 = {
  a: 1,
  b: 2,
  c: 3
};
console.log(JSON.stringify(object2,' '));
//tarberak 1
let cop = Object.assign({}, object2);
console.log("cop", cop);
//tarberak 2
let cop2 = {...object2};
console.log("cop2", cop2);
//tarberak 3
console.log(JSON.parse(object2));
