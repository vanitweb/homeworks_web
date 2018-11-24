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
    arrlength: "",
    set arrset(value) {
        this.arr.push(value);
    },
    set arrlengthset(value) {
        this.arrlength = this.arr.length / value;
    },
    get print(){
        console.log(`arr - ${this.arr} \narrlength - ${this.arrlength}`)
    }
}
obj.arrset = 15;
obj.arrset = 12;
obj.arrset = 16;
obj.arrlengthset = 2;
console.log(obj);
obj.print