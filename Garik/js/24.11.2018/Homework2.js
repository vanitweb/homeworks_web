//homework1(1,2)
Array.prototype.push = function(n){
    return this.unshift(n);
};
Array.prototype.print = function(){
    for(let i of this){
        console.log(i);
    }
};
let arr = [1];
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
console.log(arr);
arr.print()
//homework2
let obj = {
    arr : [],
    set arrset(value) {
        this.arr.push(value);
    },
    get arrlength(){
		return this.arr.length
    },
}
obj.arrset = 15;
obj.arrset = 12;
obj.arrset = 16;
console.log(obj.arrlength);
