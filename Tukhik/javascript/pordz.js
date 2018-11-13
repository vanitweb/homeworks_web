let x = 3;
let foo = {
x : 2,
baz : {
x :1,
bar : function() {
return this.x
}
}
}
let go = foo.baz.bar;
console.log(go());
console.log(foo.baz.bar());

var key = "a";
const obj = {
key : "value",
method : function() {
// this.key= "THIS";
return this.key;
},
};
const obj1 = {
key : "b",
}
//1 dzev
console.log(obj.method());

//2 dzev
const a = obj.method;
console.log(a());

//3 dzev
obj1.method = obj.method;
obj1.method();
console.log(obj1.method());